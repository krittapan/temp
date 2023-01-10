import Link from "next/link";
import React from "react";
import PieChart from '../../src/components/Chart/PieChart';
import Layout from "../../src/components/Layout/Layout";
import ActivitySlideShow from "../../src/components/Slideshow/ActivitySlideShow";
import Thumbnail from "../../src/components/Thumbnail/Thumbnail";
import { IActivity } from "../../src/models/ActivityModel";
import { IArticle } from "../../src/models/ArticleModel";
import { IFiberType } from "../../src/models/FiberTypeModel";
import { IFiberChart } from "../../src/models/FiberChartModel";
import { firebaseService } from "../../src/services/firebase/firebaseService";
import { IThumbnail } from "../../src/types/thumbnail";



const fetchFibers = async (): Promise<IThumbnail[]> => {
  const res = await firebaseService.list("FiberType", [
    { key: "SlideShow", value: true },
    { key: "Enabled", value: true },
  ]);
  return (res as IFiberType[]).map((item) => {
    return {
      id: item.id,
      image: item.ImgUrl,
      name: item.Name,
      link: `/silk/${item.id}`,
    };
  });
};

const fetchFiberChart = async (): Promise<any> => {
  await firebaseService.fetchChart()
  const  res = await firebaseService.fetchChart() as IFiberChart[]
  
  const labels: string[] = []
  const values: number[] = []

  res.forEach((item) => {
    labels.push(item.id)
    values.push(item.val)
  })

  return {
    labels, values
  }
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


const Page = ({fiberChart, fibers, activities}) => {
  return <Layout title="เส้นใยธรรมชาติ">
     <section>
        <div className="flex relative items-center overflow-hidden">
          <img className="w-full" src={"/images/activity-cover.png"} alt="" />
          <div className="absolute ml-[92px] ">
            <h1 className="text-[104px] text-[white]">เส้นใยธรรมชาติ</h1>
            <h1 className="text-[52px] text-[white] opacity-50">NATURAL FIBERS</h1>
          </div>
        </div>
      </section>


      <section className="mt-[36px]">
        <h1>เส้นใยธรรมชาติ</h1>
        <div className="flex flex-wrap w-full mt-[24px]">
          {fibers.map((item) => (
            <Thumbnail
              key={item.id}
              name={item.name}
              image={item.image}
              url={`/silk/${item.id}`}
            />
          ))}
        </div>
      </section>

      <section className="mt-[36px]">
        <h1>ข้อมูลพื้นฐานของเส้นใย</h1>
        <div className="w-full mt-[24px] ml-[48px]">
        <PieChart data={fiberChart} />
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
  </Layout>;
};

export default Page;


export const getServerSideProps = async (context) => {
  const fibers = await fetchFibers();
  const activities = await fetchActivity();
  const fiberChart = await fetchFiberChart();
  return {
    props: {  fiberChart, fibers, activities },
  };
};
