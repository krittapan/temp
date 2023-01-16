import { createMock } from "../../src/mocks/mock";
import React from "react";
import Layout from "../../src/components/Layout/Layout";
import Thumbnail from "../../src/components/Thumbnail/Thumbnail";
import PieChart, { COLORS } from "../../src/components/Chart/PieChart";

const fetchSection1 = () => {
  return createMock(12);
};
const fetchSection2 = () => {
  return createMock(4);
};

const page = ({ payload }) => {
  const { section1, section2 } = JSON.parse(payload);
  const chartLabel = ["TEXT01", "TEXT02", "TEXT03", "TEXT04"];
  return (
    <Layout>
      <section className="mt-[36px]">
        <div className="flex relative items-center overflow-hidden">
          <img className="w-full" src={"/images/hom.png"} alt="" />
          <div className="absolute ml-[92px] ">
            <h1 className="text-[52px] text-[white] opacity-50">
              สีย้อมธรรมชาติ
            </h1>
            <h1 className="text-[104px] text-[white]">ห้อม</h1>
          </div>
        </div>

        <p className="leading-normal my-[48px] !text-[26px]">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; เส้นใยไหมอีรี่เป็นเส้นใยเส้นสั้นๆ
          ต้องดึงเส้นใยจาก รังด้วยวิธีปั่นแบบเดียวกับการปั่นฝ้าย
          ดังนั้นจึงไม่ต้องต้มรัง ไหมขณะที่ยังมีตัวดักแด้ไหมอยู่ในรัง
          สามารถตัดเปลือกรังไหมหรือรอให้ตัวผีเสื้อออกมาจึงนำรังไปต้ม
          เพื่อละลายสารเหนียวที่เคลือบเส้นไหมออกจึงจะนำไปปั่นเส้นใยไหม
          คุณสมบัตินี้เป็นข้อดีของไหมอีรี่ คือ
          ทำให้ไม่ขัดต่อความรู้สึกของผู้ใช้ที่ไม่มีการฆ่าตัวไหมเพื่อเอาใยมาทำเสื้อผ้าการใช้วิธีสาวโดยใช้เครื่องสาวพื้นบ้านแบบไหมหม่อนก็อาจทำได้แต่ต้องใช้ความชำนาญเป็นพิเศษ
          เส้นใยไหมอีรี่จึงจัดเป็นไหมปั่นซึ่งเส้นไหมปั่นนั้นเป็นที่ต้องการของอุตสาหกรรมด้ายปั่นมาก
          เพราะเส้นไหมมีความเหนียว ยาว แวววาว สวยงาม มีลักษณะคล้ายฝ้ายสีขาวนวล
          น้ำหนักเบาฟู อ่อนนุ่ม{" "}
        </p>

        <div className="flex space-x-[24px]">
          <div className="text-center">
            <img src="/images/tree-icon.svg" className="h-[48px]" />
            <div>ห้อม 600 ไร่</div>
          </div>
          <div className="text-center">
            <img src="/images/circle-icon.svg" className="h-[48px]" />
            <div>ห้อมเปียก 200 ตัน</div>
          </div>
          <div className="text-center">
            <img src="/images/triangle-icon.svg" className="h-[48px]" />
            <div>เทคนิคพิเศษ 30/54</div>
          </div>
        </div>
      </section>

      <section className="mt-[36px]">
        <h1>วิสาหกิจชุมชน</h1>
        <div className="flex flex-wrap mt-[24px]">
          {section1.map((item, index) => (
            <Thumbnail key={index} name={item.name} />
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
              <div className="h-[24px] w-[24px] rounded-[50%]" style={{
                background: COLORS[index]
              }}/>
              <div className="w-[calc(100%-30px)]">
                <div className="text-[24px] text-primary">Lorem ipsum dolor sit amet.</div>
                <div className="text-default text-[20px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde sequi quis animi possimus neque corporis! Quae, dignissimos. Minus, illo.</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-[36px]">
        <h1>พืชพรรณอื่นๆที่ให้สีน้ำเงิน</h1>
        <div className="flex flex-wrap mt-[24px]">
          {section2.map((item, index) => (
            <Thumbnail key={index} name={item.name} size="large" />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default page;

export const getServerSideProps = async (context) => {
  const section1 = fetchSection1();
  const section2 = fetchSection2();

  const payload = JSON.stringify({ section1, section2 });
  return {
    props: {
      payload,
    },
  };
};
