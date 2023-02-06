import classNames from "classnames";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Layout from "../../src/components/Layout/Layout";
import ActivitySlideShow from "../../src/components/Slideshow/ActivitySlideShow";
import Thumbnail from "../../src/components/Thumbnail/Thumbnail";
import { MOCK_ENTREPRENEUR } from "../../src/mocks/mock";
import { IActivity } from "../../src/models/ActivityModel";
import { IArticle } from "../../src/models/ArticleModel";
import { IEnterprise } from "../../src/models/Enterprise";
import { firebaseService } from "../../src/services/firebase/firebaseService";


const fetchEnterprise = async (value = "") => {
  const res = await firebaseService.list("Enterprise");

  return (res as IEnterprise[]).map((item) => {
    return {
      id: item.id,
      image: item.ImgUrl,
      name: item.name,
    };
  });
};

const fetchEntrepreneur = () => {
  return MOCK_ENTREPRENEUR.map((item) => {
    return {
      id: item.id,
      name: item.name,
      image: "",
    };
  });
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

const Page = ({ enterprises: enterprisesData, entrepreneurs, activities }) => {
  const [enterprises, setEnterprises] = useState(enterprisesData);
  const [search, setSearch] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  
  useEffect(() => {
    const result = enterprisesData.filter((e) => e.name?.includes(search));
    setEnterprises(result);
  }, [search]);
  return (
    <Layout title="วิสาหกิจชุมชนและผู้ประกอบการ">
      <section>
        <div className="flex relative items-center overflow-hidden">
          <img className="w-full" src={"/images/community-cover.png"} alt="" />
          <div className="absolute ml-[92px] ">
            <h1 className="text-[104px] text-[white]">วิสาหกิจชุมชน</h1>
            <h1 className="text-[104px] text-[white]">และผู้ประกอบการ</h1>
          </div>
        </div>
      </section>

      <div className="border-[1px] border-solid bg-primary-dark flex space-x-[12px] px-[34px] py-[20px] rounded-[12px] justify-between mt-[48px]">
        <div className="text-white text-[40px]">ค้นหาวิสาหกิจชุมชน</div>
        <input className="rounded-[8px] w-[70%] px-[12px]" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <section className="mt-[36px]">
        <h1>วิสาหกิจชุมชน</h1>
        <div className="flex flex-wrap w-full mt-[24px]">
          {enterprises.map((item) => (
            <Thumbnail
              key={item.id}
              name={item.name}
              image={item.image}
              url={`/community/${item.id}`}
            />
          ))}
        </div>
      </section>
{/* 
      <section className="mt-[36px]">
        <h1>ผู้ประกอบการ</h1>
        <div className="flex flex-wrap w-full mt-[24px]">
          {entrepreneurs.map((item) => (
            <Thumbnail
              key={item.id}
              name={item.name}
              image={item.image}
              url={""}
              // url={`/community/${item.id}`}
            />
          ))}
        </div>
      </section> */}



 


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

export default Page;

export const getServerSideProps = async (context) => {
  const activities = await fetchActivity();
  const entrepreneurs = await fetchEntrepreneur();
  const enterprises = await fetchEnterprise();
  return {
    props: { enterprises, entrepreneurs, activities },
  };
};
