import Layout from "../../src/components/Layout/Layout";
import React from "react";
import { firebaseService } from "../../src/services/firebase/firebaseService";
import { IActivity } from "../../src/models/ActivityModel";
import { IArticle } from "../../src/models/ArticleModel";
import { IThumbnail } from "../../src/types/thumbnail";
import { IColorType } from "../../src/models/ColorType";
import Link from "next/link";
import ActivitySlideShow from "../../src/components/Slideshow/ActivitySlideShow";
import ThumbnailColor from "../../src/components/Thumbnail/ThumbnailColor";
import PolarChart from "../../src/components/Chart/PolarChart";
import PolarChartV2 from "../../src/components/Chart/PolarCharV2";


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

const fetchColorTypes = async (): Promise<IThumbnail[]> => {
  const res = await firebaseService.list("ColorType");
  return (res as IColorType[]).map((item) => {
    return {
      key: item.id,
      id: item.id,
      image: item.ImgUrl,
      color: item.ColorCode,
      name: item.Name,
    };
  });
};

const page = ({ colorTypes, activities }) => {
  return (
    <Layout title="">
      <section>
        <div className="flex relative items-center overflow-hidden">
          <img className="w-full" src={"/images/activity-cover.png"} alt="" />
          <div className="absolute ml-[92px] ">
            <h1 className="text-[104px] text-[white]">สีย้อมธรรมชาติ</h1>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-y-[32px] mt-[60px]">
        {colorTypes.map((item) => (
          <ThumbnailColor {...item} />
        ))}
      </section>


          <section>
          <div>
            <PolarChartV2 />
            <PolarChart />
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

export const getServerSideProps = async (context) => {
  const activities = await fetchActivity();
  const colorTypes = await fetchColorTypes();

  return {
    props: { colorTypes, activities },
  };
};
