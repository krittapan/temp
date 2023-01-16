import React from "react";
import StackChart from "../../src/components/Chart/StackChart";
import Layout from "../../src/components/Layout/Layout";
import Thumbnail from "../../src/components/Thumbnail/Thumbnail";
import { createMock } from "../../src/mocks/mock";

const fetchSection1 = () => {
  return createMock(6);
};
const fetchSection2 = () => {
  return createMock(2);
};
const fetchSection3 = () => {
  return createMock(3);
};
const fetchSection4 = () => {
  return createMock(2);
};
const fetchSection5 = () => {
  return createMock(3);
};

const page = ({ payload }) => {

  const {section1, section2, section3, section4, section5} = JSON.parse(payload)

  return (
    <Layout>
      <section className="mt-[36px]">
          <div className="flex relative items-center overflow-hidden">
            <img className="w-full" src={"/images/cluster-2.png"} alt="" />
            <div className="absolute ml-[92px] ">
              <h1 className="text-[52px] text-[white] opacity-50">
                CLUSTER MAP
              </h1>
              <h1 className="text-[104px] text-[white]">กลุ่มกลางน้ำ</h1>
            </div>
          </div>
      </section>

      <section>
        <h1>กลุ่มปลูกพืชเส้นใย</h1>
        <div className="flex flex-wrap mt-[24px]">
          {section1.map((item, index) => (
            <Thumbnail key={index} name={item.name} />
          ))}
        </div>
      </section>

      <section className="mt-[36px]">
        <h1>กลุ่มเลี้ยงไหม</h1>
        <div className="flex flex-wrap mt-[24px]">
          {section2.map((item, index) => (
            <Thumbnail key={index} name={item.name} />
          ))}
        </div>
      </section>

      <section className="mt-[36px]">
        <h1>กลุ่มผลินเส้นใย</h1>
        <div className="flex flex-wrap mt-[24px]">
          {section3.map((item, index) => (
            <Thumbnail key={index} name={item.name} />
          ))}
        </div>
      </section>

      <section className="mt-[36px]">
        <h1>กลุ่มผลิตเส้นด้าย</h1>
        <div className="flex flex-wrap mt-[24px]">
          {section4.map((item, index) => (
            <Thumbnail key={index} name={item.name} />
          ))}
        </div>
      </section>

      <section className="mt-[36px]">
        <h1>ผู้ประกอบการ</h1>
        <div className="flex flex-wrap mt-[24px]">
          {section5.map((item, index) => (
            <Thumbnail key={index} name={item.name} />
          ))}
        </div>
      </section>

      <section>
        <StackChart
          data={{
            labels: ["TEXT01", "TEXT02", "TEXT03", "TEXT04"],
            values: [
              { name: " a", data: [1, 2, 3, 4] },
              { name: " b", data: [4, 3, 2, 1] },
            ],
          }}
        />
      </section>
    </Layout>
  );
};

export default page;

export const getServerSideProps = async (context) => {
  const section1 = fetchSection1();
  const section2 = fetchSection2();
  const section3 = fetchSection3();
  const section4 = fetchSection4();
  const section5 = fetchSection5();

  const payload = JSON.stringify({section1, section2, section3, section4, section5})
  return {
    props: {
      payload,
    },
  };
};
