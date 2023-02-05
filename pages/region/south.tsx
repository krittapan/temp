import Link from "next/link";
import React from "react";
import PieChart, { COLORS } from "../../src/components/Chart/PieChart";
import Layout from "../../src/components/Layout/Layout";
import ActivitySlideShow from "../../src/components/Slideshow/ActivitySlideShow";
import Thumbnail from "../../src/components/Thumbnail/Thumbnail";
import { createMock } from "../../src/mocks/mock";
import { IActivity } from "../../src/models/ActivityModel";
import { IArticle } from "../../src/models/ArticleModel";
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

  const chartLabels:any[] = [];
  const chartDatas:any[] = [];
  console.log(res)
  res.map((item) => {
    chartLabels.push(item.name);
    chartDatas.push(item.Val);
  });


  return {chartDatas, chartLabels}
}

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
  const { plants, silks , activities, chartData } = JSON.parse(payload);

  const chartLabel = ["TEXT01", "TEXT02", "TEXT03", "TEXT04"];

  return (
    <div className="relative overflow-hidden">
      <img src="/images/south.png" className="absolute z-[-1] left-[-80px]  top-[-700px] w-[70%]" />
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
              ภาคใต้
            </h1>
            <h1 className="text-[36px] text-[#274769]">SOUTH</h1>

            <p className="w-[740px] text-primary">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ผ้าทอภาคใต้มักจะเป็นผ้าทอยกดอก ลวดลายมักจะเป็นลวดลายดอกไม้เช่น ลายดอกแก้ว ลายดอกพิกุล ผ้าลายแก้วชิงดวงเป็นลวดลายเฉพาะของผ้าทอนาหมื่นศรี ลวดลายในผ้าทอภาคใต้ไม่มีลายจากสัตว์เหมือนภูมิภาคอื่นๆ เนื่องมาจากอิทธิพลทางศาสนาอิสลามที่เชื่อว่าเป็นการเบียดเบียนสัตว์ และไม่เป็นมงคล ผ้าทอภาคใต้ที่โด่งดังเป็นที่รู้จักล้วนแต่เป็นผ้าทอยกดอกเช่น ผ้ายกเมืองนคร ผ้าทอนาหมื่นศรี ผ้าพุมเรียง ผ้าเกาะยอ ผ้าจวนตานี ผ้าพื้นเมืองที่โดดเด่นอีกอย่างหนึ่งของภาคใต้คือ ผ้าบาติก หรือผ้าปาเต๊ะ ซึ่งวาดลวดลายด้วยการเขียนเทียน ได้รับอิทธิพลมาจากวัฒนธรรมอินโด-มาเลย์ วัฒนธรรมทอผ้าในภาคใต้ขาดการสืบทอดและสนับสนุนในช่วงเวลาที่ผ่านมา แต่ขณะนี้กำลังได้รับการฟื้นฟูขึ้นมาอีกครั้งในหลายพื้นที่เช่น นครศรีธรรมราช พัทลุง สงขลา และปัตตานี
            </p>
          </div>
        </section>

        {silks?.length > 0 && (
          <section className="mt-[36px]">
            <Link href="south/color">
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
              labels: chartData?.chartLabels  || [],
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
                  <div className="text-[24px] text-primary">
                   {item}
                  </div>
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
  const silks = await fetchSilk("ภาคใต้");
  const plants = await fetchPlant("ภาคใต้");
  const activities = await fetchActivity();
  const chartData = await fetchRegionChart("ภาคใต้");

  const payload = JSON.stringify({ silks, plants, activities, chartData });

  return {
    props: {
      payload,
    },
  };
};
