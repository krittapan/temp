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

const fetchSection1 = () => {
  return createMock(6);
};
const fetchSection2 = () => {
  return createMock(4);
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
  const { section1, section2, activities } = JSON.parse(payload);
  const chartLabel = ["TEXT01", "TEXT02", "TEXT03", "TEXT04"];

  return (
    <div className="relative overflow-hidden">
      <img src="/images/north.png" className="absolute z-[-1] left-[-120px]  top-[150px]" />
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
              ภาคเหนือ
            </h1>
            <h1 className="text-[36px] text-[#274769]">NORTH</h1>

            <p className="w-[740px] text-primary">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; โครงการ
              ระบบดิจิตัลเพื่อการบริหารจัดการเชิงรุกคลัสเตอร์เส้นใยธรรมชาติเพื่อการสร้างมูลค่าเพิ่มและยกระดับวิสาหกิจชุมชนไปสู่วิสาหกิจนวัตกรรม
              เป็นการดำเนินงานร่วมกันระหว่าง ภาควิชาวิทยาการสิ่งทอ
              คณะอุตสาหกรรมเกษตรมหาวิทยาลัยเกษตรศาสตร์,
              สถาบันค้นคว้าและพัฒนาผลิตผลทางการเกษตรและอุตสาหกรรมเกษตร
              มหาวิทยาลัยเกษตรศาสตร์ (KAPI), ภาควิชาเทคโนโลยีอุตสาหกรรมเกษตร
              คณะอุตสาหกรรมเกษตร มหาวิทยาลัยเกษตรศาสตร์,
              มหาวิทยาลัยเทคโนโลยีพระจอมเกล้า
            </p>
          </div>
        </section>

        <section className="mt-[36px]">
          <h1>เส้นใยธรรมชาติ</h1>
          <div className="flex flex-wrap mt-[24px]">
            {section1.map((item, index) => (
              <Thumbnail key={index} name={item.name} />
            ))}
          </div>
        </section>

        <section className="mt-[36px]">
          <h1>วัตถุดิมและพรรณพืชให้สีประจำถิ่น</h1>
          <div className="flex flex-wrap mt-[24px]">
            {section2.map((item, index) => (
              <Thumbnail key={index} name={item.name} size="large" />
            ))}
          </div>
        </section>

        <section className="flex my-[96px]">
          <PieChart
            data={{
              labels: chartLabel,
              values: [2, 3, 2, 3],
              hide: true,
            }}
          />

          <div className="w-[30%]">
            {chartLabel.map((item, index) => (
              <div key={index} className="flex space-x-[12px] mb-[24px]">
                <div
                  className="h-[24px] w-[24px] rounded-[50%]"
                  style={{
                    background: COLORS[index],
                  }}
                />
                <div className="w-[calc(100%-30px)]">
                  <div className="text-[24px] text-primary">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <div className="text-default text-[20px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate unde sequi quis animi possimus neque corporis!
                    Quae, dignissimos. Minus, illo.
                  </div>
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
  const section1 = fetchSection1();
  const section2 = fetchSection2();
  const activities = await fetchActivity();

  const payload = JSON.stringify({ section1, section2, activities });
  return {
    props: {
      payload,
    },
  };
};
