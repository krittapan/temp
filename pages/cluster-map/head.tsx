import React from "react";
import PieChart from "../../src/components/Chart/PieChart";
import StackChart from "../../src/components/Chart/StackChart";
import Layout from "../../src/components/Layout/Layout";
import Thumbnail from "../../src/components/Thumbnail/Thumbnail";
import { createMock } from "../../src/mocks/mock";
import { firebaseService } from "../../src/services/firebase/firebaseService";




const fetchAll = async (id: string) => {
  const chartLabels: any[] = [];
  const chartDatas: any[] = [];

  const cr = await firebaseService.fetchClusterChart(id);


  cr.map((item) => {
    chartLabels.push(item.id);
    chartDatas.push(item["จำนวนที่ทำ"]);
  });

  const chartData = { chartLabels, chartDatas };

  const details = await firebaseService.list("ClusterMap", [
    { key: "ClusterGroup", value: id },
  ]);

  const ids = details.map((item) => item.IdEnterprise);

  const enterprises = await firebaseService.bulkFetchEnterprise(ids);


  return {
    chartData,
    enterprises,
  };
};
const fetchData = async () => {
  const output: any = [];
  const groups = await firebaseService.list("ClusterGroup", [
    { key: "ClusterMapType", value: "ต้นน้ำ" },
  ]);

  await Promise.all(
    groups.map(async (group) => {
      const data = await fetchAll(group.id);
      output.push({ core: group, ...data });
    })
  );

  return output.reverse();
};

const page = ({ payload }) => {
  const {  result } = JSON.parse(payload);

  return (
    <Layout>
      <section className="mb-[48px]">
        <div className="flex relative items-center overflow-hidden">
          <img className="w-full" src={"/images/cluster-1.png"} alt="" />
          <div className="absolute ml-[92px] ">
            <h1 className="text-[52px] text-[white] opacity-50">CLUSTER MAP</h1>
            <h1 className="text-[104px] text-[white]">กลุ่มต้นน้ำ</h1>
          </div>
        </div>
      </section>

      {result.map((item, index) => (
        <section key={index} className="mb-[48px]">
          <h1>{item.core.name}</h1>
          <div className="my-[24px]">
          <PieChart
            data={{
              labels: item?.chartData?.chartLabels || [],
              values: item?.chartData?.chartDatas || [],
            }}
          />
          </div>

          <div className="flex flex-wrap mt-[24px]">
            {item.enterprises.map((item, index) => (
              <Thumbnail
                key={index}
                name={item.name}
                url={`/community/${item.id}`}
                image={item.ImgUrl}
              />
            ))}
          </div>
        </section>
      ))}

      <div className="bg-[#1A486C] w-full py-[12px] rounded-[12px] text-[white] text-center cursor-pointer my-[36px]">
        หน่วยงานสนับสนุนและผู้ประกอบการที่เกี่ยวข้อง
      </div>
    </Layout>
  );
};

export default page;

export const getServerSideProps = async (context) => {
  const result = await fetchData();

  const payload = JSON.stringify({ result });
  return {
    props: {
      payload,
    },
  };
};
