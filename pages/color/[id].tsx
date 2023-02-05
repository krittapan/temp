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
import { IRegion, regionLinkMapper } from "../../src/models/RegionModel";




const getColor = async (id) => {
  const res = await firebaseService.getById("ColorType", id)
  return res
}


const fetchPlants = async(id) => {

  const p = id.replace("สี", "")
  const res = await firebaseService.list("PlantsColor", [{key: "ColorType",  value: id}])

  const plants = res.map((item) => {
    return {
      id: item.id,
      name: item.PlantsType,
      image: item.ImgUrl,
    };
  })

  return plants
};
const fetchProducts = async(id) => {
  const res = await firebaseService.list("ProductsGroup", [{key: "ColorType",  value: id}])
  return res.map((item) => {
    return {
      id: item.id,
      name: item.name,
      image: item.ImgUrl,
    };
  })
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

const fetchRegions = async () => {

  const res = await firebaseService.list("RegionType");

  return (res as IRegion[]).map((item) => {
    return {
      id: item.id,
      name: item.name,
      image: item.ImgUrl,
      link: regionLinkMapper[item.name],
    };
  });
};


const fetchTreeMap = async (id: string) => {
  const res = await firebaseService.fetchColorTreeMap(id)



  return res.map((item) => {
    return {
      x: item.name,
      y: item.Val
    }
  })
}

const page = ({payload}) => {

  const { color, activities, plants, products, regions,treeMap, id } = JSON.parse(payload)

  return (
    <Layout title="">
      
      <section>
        <div className="flex relative items-center overflow-hidden max-h-[423px]">
          <img className="w-full" src={color.CoverImgUrl || "/images/empty.png"} alt="" />
          <div className="absolute ml-[92px] ">
            <h1 className="text-[48px] text-[white]">สีย้อมธรรมชาติ</h1>
            <h1 className="text-[104px] text-[white]">กลุ่ม{color.Name}</h1>
          </div>
        </div>
      </section>



    <section>
      <TreeMap data={treeMap} color={id}/>
    </section>
      <section className="mt-[60px]">
        <h1>สีย้อมในกลุ่ม{color.Name}</h1>
        <div className="flex flex-wrap mt-[24px]">
          {plants.map((item) => (
            <Thumbnail
              key={item.id}
              name={item.name}
              image={item.image}
              url={`/plant/${item.name}`}
              size="large"
            />
          ))}
        </div>
      </section>
      

      <section className="mt-[60px]">
        <h1>ผลิตภัณฑ์ย้อมสีธรรมชาติ</h1>
        <div className="flex flex-wrap mt-[24px]">
          {products.map((product) => (
            <Thumbnail
              key={product.id}
              name={product.name}
              image={product.image}
              url={`/product/${id}/${product.name}`}
              size="large"
            />
          ))}
        </div>
      </section>
      
      <section>
        <h1>ภูมิภาค</h1>
        <div className="flex flex-wrap mt-[24px]">
          {regions.map((item, index) => (
            <Thumbnail key={index} name={item.name} url={item.link} image={item.image}/>
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
  const plants = await fetchPlants(id);
  const products = await fetchProducts(id);
  const color = await getColor(id);
  const regions = await fetchRegions();
  const treeMap = await fetchTreeMap(id)

  const payload = JSON.stringify({  id, color,activities, plants, products , regions,treeMap })
  return {
    props: {payload}
  };
};
