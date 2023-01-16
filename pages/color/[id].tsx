import Link from "next/link";
import React from "react";
import Layout from "../../src/components/Layout/Layout";
import ActivitySlideShow from "../../src/components/Slideshow/ActivitySlideShow";
import Thumbnail from "../../src/components/Thumbnail/Thumbnail";
import { createMock, MOCK_PRODUCTS, MOCK_REGIONS } from "../../src/mocks/mock";
import { IActivity } from "../../src/models/ActivityModel";
import { IArticle } from "../../src/models/ArticleModel";
import { firebaseService } from "../../src/services/firebase/firebaseService";
import TreeMap from "../../src/components/Chart/TreeMap";




const getColor = async (id) => {
  const res = await firebaseService.getById("ColorType", id)
  return res
}


const fetchSection1 = () => {
  return createMock(4);
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

const fetchRegions = () => {
  return MOCK_REGIONS.map((item) => {
    return {
      id: item.id,
      name: item.name,
      link: item.link
    };
  });
};

const page = ({payload}) => {

  const { color, activities, section1, section2, regions } = JSON.parse(payload)
  console.log(color)
  return (
    <Layout title="">
      
      <section>
        <div className="flex relative items-center overflow-hidden max-h-[423px]">
          <img className="w-full" src={color.ImgUrl} alt="" />
          <div className="absolute ml-[92px] ">
            <h1 className="text-[48px] text-[white]">สีย้อมธรรมชาติ</h1>
            <h1 className="text-[104px] text-[white]">กลุ่ม{color.Name}</h1>
          </div>
        </div>
      </section>



    <section>
      <TreeMap />
    </section>
      <section className="mt-[60px]">
        <h1>สีย้อมในกลุ่ม{color.Name}</h1>
        <div className="flex flex-wrap mt-[24px]">
          {section1.map((product) => (
            <Thumbnail
              key={product.id}
              name={product.name}
              image={product.image}
              url="/plant"
              size="large"
            />
          ))}
        </div>
      </section>
      

      <section className="mt-[60px]">
        <h1>ผลิตภัณฑ์ย้อมสีธรรมชาติ</h1>
        <div className="flex flex-wrap mt-[24px]">
          {section2.map((product) => (
            <Thumbnail
              key={product.id}
              name={product.name}
              image={product.image}
              url={""}
              size="large"
            />
          ))}
        </div>
      </section>
      
      <section>
        <h1>ภูมิภาค</h1>
        <div className="flex flex-wrap mt-[24px]">
          {regions.map((item, index) => (
            <Thumbnail key={index} name={item.name} url={item.link}/>
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
  );
};

export default page;
export const getServerSideProps = async ({ params: { id } }) => {
  const activities = await fetchActivity();
  const section1 = fetchSection1();
  const section2 = fetchSection2();
  const color = await getColor(id);
  const regions = await fetchRegions();

  const payload = JSON.stringify({  color,activities, section1, section2 , regions })
  return {
    props: {payload}
  };
};
