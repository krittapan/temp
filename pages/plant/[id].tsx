import React from "react";
import PieChart from "../../src/components/Chart/PieChart";
import Layout from "../../src/components/Layout/Layout";
import Thumbnail from "../../src/components/Thumbnail/Thumbnail";
import { SPEC_ICONS } from "../../src/mocks/mock";
import { firebaseService } from "../../src/services/firebase/firebaseService";

const fetchPlant = async (id: string) => {
  const res = await firebaseService.getById("PlantsType", id);

  return res;
};

const fetchCommunities = async (id: string) => {
  const r = await firebaseService.list("PlantsColor", [
    { key: "PlantsType", value: id },
  ]);

  const queryEnterprise = r.map((item) => item.IdEnterprise);

  const result = await firebaseService.bulkFetchEnterprise(queryEnterprise);
  return result;
};

const fetchSpec = async (id: string) => {
  const res = firebaseService.fetchPlantSpec(id);
  return res;
};

const fetchChart = async (id: string) => {
  const chartLabels: any[] = [];
  const chartDatas: any[] = [];

  const cr = await firebaseService.fetchPlantChart(id);


  cr.map((item) => {
    chartLabels.push(item.id);
    chartDatas.push(item.Val);
  });

  const isValid = chartLabels.length > 0

  return {chartLabels, chartDatas, isValid};

};
const page = ({ payload }) => {
  const { plant, communities, plantSpecs, chartData } = JSON.parse(payload);
  return (
    <Layout>
      <section className="mb-[48px]">
        <div className="flex relative items-center overflow-hidden max-h-[480px]">
          <img
            className="w-full"
            src={plant.CoverImgUrl || "/images/empty.png"}
            alt=""
          />
          <div className="absolute ml-[92px] ">
            <h1 className="text-[48px] text-[white]">สีย้อมธรรมชาติ</h1>
            <h1 className="text-[104px] text-[white]">{plant.name}</h1>
          </div>
        </div>

        <p>{plant.Description}</p>

        {/* add on */}

        <div className="flex items-center space-x-[24px]">
          {plantSpecs.map((item, index) => (
            <div className="flex flex-col items-center justify-center mt-[24px]">
              <img src={SPEC_ICONS[index]} className="h-[40px]" />
              <div
                key={item.name}
                className="text-[32px] text-[#684D43] text-center"
              >
                <div>{item.name}</div>
                <div>
                  {item.value} {item.unit}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {communities.length > 0 && (
        <section className="mt-[36px]">
          <h1>วิสาหกิจชุมชน</h1>
          <div className="flex flex-wrap w-full mt-[24px]">
            {communities.map((item) => (
              <Thumbnail
                key={item.id}
                name={item.name}
                image={item.ImgUrl}
                url={`/community/${item.id}`}
              />
            ))}
          </div>
        </section>
      )}

      {chartData.isValid && (
        <section className="w-full flex justify-center my-[64px]">
          <PieChart
            data={{
              labels: chartData?.chartLabels || [],
              values: chartData?.chartDatas || [],
              hide: false,
            }}
          />
        </section>
      )}
    </Layout>
  );
};

export default page;

export const getServerSideProps = async ({ params: { id } }) => {
  const plant = await fetchPlant(id);
  const communities = await fetchCommunities(id);
  const plantSpecs = await fetchSpec(id);
  const chartData = await fetchChart(id)
  const payload = JSON.stringify({ plant, communities, plantSpecs, chartData });

  return {
    props: { payload },
  };
};
