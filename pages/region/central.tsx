import Link from "next/link";
import React from "react";
import PieChart, { COLORS } from "../../src/components/Chart/PieChart";
import Layout from "../../src/components/Layout/Layout";
import ActivitySlideShow from "../../src/components/Slideshow/ActivitySlideShow";
import Thumbnail from "../../src/components/Thumbnail/Thumbnail";
import { createMock } from "../../src/mocks/mock";
import { IActivity } from "../../src/models/ActivityModel";
import { IArticle } from "../../src/models/ArticleModel";
import { IFiberType } from "../../src/models/FiberTypeModel";
import { firebaseService } from "../../src/services/firebase/firebaseService";

const fetchSilk = async (id: string) => {
  const rr = await firebaseService.list("FiberRegion", [
    { key: "Region", value: id },
  ]);

  const ids = rr.map((item) => item.FiberType);

  const result = await firebaseService.bulkFetch("FiberType", ids);

  return (result).map((item) => {
    return {
      id: item.id,
      image: item.ImgUrl,
      name: item.Name,
      link: `/silk/${item.id}`,
    };
  });
};

const fetchPlant = async (id: string) => {
  const rr = await firebaseService.list("PlantsRegion", [
    { key: "Region", value: id },
  ]);

  const ids: string[] = [];
  rr.map((item) => {
    if (!item.PlantsType.includes("/")) {
      ids.push(item.PlantsType);
    }
  });

  const result = await firebaseService.bulkFetch("PlantsType", ids);

  return result.map((item) => {
    return {
      id: item.id,
      image: item.ImgUrl,
      name: item.id,
      link: `/plant/${item.id}`,
    };
  });
};

const fetchRegionChart = async (id: string) => {
  const res = await firebaseService.fetchRegionChart(id);

  const chartLabels: any[] = [];
  const chartDatas: any[] = [];
  res.map((item) => {
    chartLabels.push(item.name);
    chartDatas.push(item.Val);
  });

  return { chartDatas, chartLabels };
};
const fetchActivity = async () => {
  const resMain = await firebaseService.list("Activity");
  const mainActivity = (resMain as IActivity[]).map((item) => {
    return {
      id: item.id,
      image: item.ImgUrl,
    };
  });

  const resSub = await firebaseService.list("Article");
  const subActivity = (resSub as IArticle[]).map((item) => {
    return {
      id: item.id,
      image: item.ImgUrl,
    };
  });

  return { mainActivity, subActivity };
};

const page = ({ payload }) => {
  const {  activities, chartData, plants, silks } = JSON.parse(payload);

  return (
    <div className="relative overflow-hidden">
      <img
        src="/images/central.png"
        className="absolute z-[-1] left-[-80px]  top-[-80px] w-[70%]"
      />
      <Layout>
        <section>
          <div className="max-w-[744px] mr-0 ml-auto">
            <div className="flex items-center space-x-[12px]">
              <img src="/images/compass.svg" className="h-[48px]" />
              <h1 className="text-[48px] text-[#274769] leading-[50px]">
                ภูมิภาค
              </h1>
            </div>
            <h1 className="text-[104px] text-[#274769] leading-[60%]">
              ภาคกลาง
            </h1>
            <h1 className="text-[36px] text-[#274769]">CENTRAL</h1>

            <p className="w-[740px] text-primary">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ภาคกลางของประเทศไทย
              เป็นภูมิภาคแห่งเกษตรกรรมและการค้าขาย เศรษฐกิจดี
              วัฒนธรรมการทอผ้าใช้เองจึงไม่โดดเด่นเหมือนภาคเหนือหรือภาคอิสาน
              ผ้าทอที่โดดเด่นคือผ้าซิ่นตีนจก
              คือจกผ้าเป็นลวดลายเฉพาะช่วงปลายของผ้าซิ่นทอด้วยการคว่ำผ้าลง
              ลายที่ทอมักเป็นลวดลายเรขาคณิต เรียกชื่อลายต่างๆ กัน เช่น
              ลายสิบหกดอกตัด ลายแปดขอ ลายสี่ดอกตัด ลายเครือใหญ่ ลายดอกเครือน้อย
              ลายเหล่านี้ มักเป็นลายสี่เหลี่ยมข้าวหลามตัด มีลายเล็กๆ
              ย่อซ้อนอยู่ภายใน
              นอกจากนี้ก็มักจะเป็นผ้าจากกลุ่มชาติพันธุ์ที่แทรกตัวเป็นกลุ่มเล็กๆ
              ในแต่ละท้องถิ่น
            </p>
          </div>
        </section>
        {silks?.length > 0 && (
          <section className="mt-[36px]">
            <Link href="central/color">
              <h1>
              เส้นใยธรรมชาติ
              </h1>
              </Link>
            <div className="flex flex-wrap mt-[24px]">
              {silks.map((item, index) => (
                <Thumbnail
                  key={index}
                  name={item.name}
                  url={item.link}
                  image={item.image}
                />
              ))}
            </div>
          </section>
        )}

        {plants?.length > 0 && (
          <section className="mt-[36px]">
            <h1>วัตถุดิบและพรรณพืชให้สีประจำถิ่น</h1>
            <div className="flex flex-wrap mt-[24px]">
              {plants.map((item, index) => (
                <Thumbnail
                  key={index}
                  name={item.name}
                  url={item.link}
                  image={item.image}
                />
              ))}
            </div>
          </section>
        )}

        <section className="flex my-[96px] justify-center">
          <PieChart
            data={{
              labels: chartData?.chartLabels || [],
              values: chartData?.chartDatas || [],
              hide: true,
            }}
          />

          <div className="w-[30%]">
            {chartData.chartLabels.map((item, index) => (
              <div key={index} className="flex space-x-[12px] mb-[24px]">
                <div
                  className="h-[24px] w-[24px] rounded-[50%]"
                  style={{
                    background: COLORS[index],
                  }}
                />
                <div className="w-[calc(100%-30px)]">
                  <div className="text-[24px] text-primary">{item}</div>
                  {/* <div className="text-default text-[20px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate unde sequi quis animi possimus neque corporis!
                    Quae, dignissimos. Minus, illo.
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-[36px] mb-[98px]">
          <Link href="/knowledge">
            <h1 className="mb-[16px]">กิจกรรมและคลังความรู้</h1>
          </Link>

          <ActivitySlideShow
            mainActivity={activities.mainActivity}
            subActivity={activities.subActivity}
          />
        </section>
      </Layout>
    </div>
  );
};

export default page;

export const getServerSideProps = async (context) => {
  const activities = await fetchActivity();
  const chartData = await fetchRegionChart("ภาคกลาง");
  const silks = await fetchSilk("ภาคกลาง");
  const plants = await fetchPlant("ภาคกลาง");
  const payload = JSON.stringify({ silks, activities, chartData, plants });
  return {
    props: {
      payload,
    },
  };
};
