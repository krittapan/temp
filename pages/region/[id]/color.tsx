import React from "react";
import Layout from "../../../src/components/Layout/Layout";
import Thumbnail from "../../../src/components/Thumbnail/Thumbnail";
import { createMock } from "../../../src/mocks/mock";

const fetchData = async () => {
  const section1 = createMock(2);
  const section2 = createMock(4);
  const section3 = createMock(6);
  const section4 = createMock(1);
  const section5 = createMock(1);
  const section6 = createMock(4);

  return {
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
  };
};

const page = ({ payload }) => {
  const { section1, section2, section3, section4, section5, section6 } =
    JSON.parse(payload)?.result;

  return (
    <Layout>
      <section className="mb-[48px]">
        <div className="flex relative items-center overflow-hidden">
          <img className="w-full" src={"/images/region-color.png"} alt="" />
          <div className="absolute ml-[92px] ">
            <h1 className="text-[104px] text-[white]">ภูมิภาค</h1>
          </div>
        </div>
      </section>

      <section>
        <h1>วิสาหกิจชุมชนกลุ่มภาคเหนือ</h1>
        <div className="flex flex-wrap mt-[24px]">
          {section1.map((item, index) => (
            <Thumbnail
              key={index}
              name={item.name}
              // url={`/community/${item.id}`}
              image={item.ImgUrl}
            />
          ))}
        </div>
      </section>


      <section className="mt-[48px]">
        <h1>พรรณพืชให้สีน้ำเงิน กลุ่มภาคเหนือ</h1>
        <div className="flex flex-wrap mt-[24px]">
          {section2.map((item, index) => (
            <Thumbnail
              key={index}
              name={item.name}
              // url={`/community/${item.id}`}
              image={item.ImgUrl}
              size="large"
            />
          ))}
        </div>
      </section>
      <section className="mt-[48px]">
        <h1>วิสาหกิจชุมชน กลุ่มภาคกลาง</h1>
        <div className="flex flex-wrap mt-[24px]">
          {section3.map((item, index) => (
            <Thumbnail
              key={index}
              name={item.name}
              // url={`/community/${item.id}`}
              image={item.ImgUrl}
            />
          ))}
        </div>
      </section>
      <section className="mt-[48px]">
        <h1>พรรณพืชให้สีน้ำเงิน กลุ่มภาคกลาง</h1>
        <div className="flex flex-wrap mt-[24px]">
          {section4.map((item, index) => (
            <Thumbnail
              key={index}
              name={item.name}
              // url={`/community/${item.id}`}
              image={item.ImgUrl}
              size="large"
            />
          ))}
        </div>
      </section>
      <section className="mt-[48px]">
        <h1>พรรณพืชให้สีน้ำเงิน กลุ่มภาคใต้</h1>
        <div className="flex flex-wrap mt-[24px]">
          {section5.map((item, index) => (
            <Thumbnail
              key={index}
              name={item.name}
              // url={`/community/${item.id}`}
              image={item.ImgUrl}
            />
          ))}
        </div>
      </section>
      <section className="mt-[48px] mb-[200px]">
        <h1>พรรณพืชให้สีน้ำเงิน กลุ่มภาคใต้</h1>
        <div className="flex flex-wrap mt-[24px]">
          {section6.map((item, index) => (
            <Thumbnail
              key={index}
              name={item.name}
              // url={`/community/${item.id}`}
              image={item.ImgUrl}
              size="large"
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default page;

export const getServerSideProps = async (context) => {
  const result = await fetchData();
  console.log("hi");
  const payload = JSON.stringify({ result });
  return {
    props: {
      payload,
    },
  };
};
