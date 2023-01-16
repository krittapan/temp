import Link from "next/link";
import React from "react";
import StackChart from "../../src/components/Chart/StackChart";
import Layout from "../../src/components/Layout/Layout";
import ActivitySlideShow from "../../src/components/Slideshow/ActivitySlideShow";
import { IActivity } from "../../src/models/ActivityModel";
import { IArticle } from "../../src/models/ArticleModel";
import { firebaseService } from "../../src/services/firebase/firebaseService";
import Popup from "reactjs-popup";

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

const page = ({ activities }) => {
  return (
    <Layout>
      <section>
        <Link href="/cluster-map/head">
          <div className="flex relative items-center overflow-hidden">
            <img className="w-full" src={"/images/cluster-1.png"} alt="" />
            <div className="absolute ml-[92px] ">
              <h1 className="text-[52px] text-[white] opacity-50">
                CLUSTER MAP
              </h1>
              <h1 className="text-[104px] text-[white]">กลุ่มต้นน้ำ</h1>
            </div>
          </div>
        </Link>
      </section>
      <section className="mt-[36px]">
        <Link href="/cluster-map/body">
          <div className="flex relative items-center overflow-hidden">
            <img className="w-full" src={"/images/cluster-2.png"} alt="" />
            <div className="absolute ml-[92px] ">
              <h1 className="text-[52px] text-[white] opacity-50">
                CLUSTER MAP
              </h1>
              <h1 className="text-[104px] text-[white]">กลุ่มกลางน้ำ</h1>
            </div>
          </div>
        </Link>
      </section>
      <section className="mt-[36px]">
        <Link href="/cluster-map/tail">
          <div className="flex relative items-center overflow-hidden">
            <img className="w-full" src={"/images/cluster-3.png"} alt="" />
            <div className="absolute ml-[92px] ">
              <h1 className="text-[52px] text-[white] opacity-50">
                CLUSTER MAP
              </h1>
              <h1 className="text-[104px] text-[white]">กลุ่มปลายน้ำ</h1>
            </div>
          </div>
        </Link>
      </section>
      <div>
        <Popup
          trigger={
            <div className="bg-[#1A486C] w-full py-[12px] rounded-[12px] text-[white] text-center cursor-pointer my-[36px]">
              แผนภาพคลัสเตอร์เส้นใย ธรรมชาติและสีย้อมธรรมชาติ
            </div>
          }
          position="right center"
          modal
        >
          <img src="/images/mindmap.png"/>
        </Popup>
      </div>

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

export const getServerSideProps = async (context) => {
  const activities = await fetchActivity();
  return {
    props: { activities },
  };
};
