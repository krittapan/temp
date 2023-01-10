import React, { useState } from "react";
import { IFiberType } from "../../src/models/FiberTypeModel";
import { IFiber } from "../../src/models/FiberModel";
import { IEnterprise } from "../../src/models/Enterprise";
import { firebaseService } from "../../src/services/firebase/firebaseService";
import Link from "next/link";
import { MOCK_KNOWLEDGE_1, MOCK_KNOWLEDGE_2 } from "../../src/mocks/mock";
import ActivitySlideShow from "../../src/components/Slideshow/ActivitySlideShow";
import Layout from "../../src/components/Layout/Layout";
import classNames from "classnames";
import Thumbnail from "../../src/components/Thumbnail/Thumbnail";
import { IActivity } from "../../src/models/ActivityModel";
import { IArticle } from "../../src/models/ArticleModel";
import StackChart from "../../src/components/Chart/StackChart";
import { ISilkStackChart } from "../../src/models/FiberChartModel";
const getData = async (id: string) => {
  const res: IFiberType = await firebaseService.getById("FiberType", id);

  const communityRes: IFiber[] = await firebaseService.list("Firber", [
    {
      key: "FiberType",
      value: id,
    },
  ]);

  const community = await Promise.all(
    communityRes.map(async (item): Promise<IEnterprise> => {
      const result = await firebaseService.getById(
        "Enterprise",
        item.IdEnterprise
      );

      return { ...result, id: item.IdEnterprise };
    })
  );

  return {
    silk: res,
    community,
  };
};



const fetchStackChart = async(id: string) => {
  const res = await firebaseService.fetchStackChart(id)  as ISilkStackChart[]
  const values1: any[] = []
  const values2: any[] = []
  const values3: any[] = []
  const labels: any[] = []

  

  res.forEach((item) => {
    labels.push(item.id)
    values1.push(item.เตรียมพร้อม)
    values2.push(item.มีความพร้อม)
    values3.push(item.เชี่ยวชาญ)
  })


  const values = [
    {
      name: 'เตรียมความพร้อม',
      data: values1
    },
    {
      name: 'มีความพร้อม',
      data: values2
    },
    {
      name: 'ความเชี่ยวชาญ',
      data: values3
    }
  ]

  return {labels, values}
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

const page = ({ payload }) => {
  const { silk, community, activities,chartData } = JSON.parse(payload);
  const [isToggle, setIsToggle] = useState(false);
  return (
    <Layout title={silk.Name}>
      <section>
        <div
          className={classNames(
            "flex relative items-center overflow-hidden h-[423px]",
            { "border-[1px] border-solid border-default": !silk.CoverImgUrl }
          )}
        >
          <img
            className={classNames("w-full")}
            src={silk.CoverImgUrl || "/images/empty-large.png"}
            alt=""
          />
          <div className="absolute ml-[92px]">
            <h1 className="text-[#594f45] text-[45px]">เส้นใยธรรมชาติ</h1>
            <h1 className="text-[104px]">{silk.Name}</h1>
          </div>
        </div>
        <div className="mt-[60px]">
          <h1>{silk.Name}</h1>
          <div className="flex space-x-[74px]">
            <div className="w-[278px] h-[278px] flex overflow-hidden flex-grow-0 flex-shrink-0 basis-[278px]">
              <img
                className={classNames("w-full", {
                  "border-[1px] border-solid border-default": !silk.ImgUrl,
                })}
                src={silk.ImgUrl || "/images/empty.png"}
                alt=""
              />
            </div>
            <p>{silk.Description}</p>
          </div>
        </div>
      </section>

      <section className="mt-[36px]">
        <h1>วิสาหกิจชุมชน</h1>
        <div className="flex flex-wrap w-full mt-[24px]">
          {community.map((item) => (
            <Thumbnail
              key={item.id}
              name={item.name}
              image={item.image}
              url={`/community/${item.id}`}
            />
          ))}
        </div>
      </section>


      <section className="my-[60px]">
        <div
          className="bg-[#1A486C] w-full py-[12px] rounded-[12px] text-[white] text-center cursor-pointer"
          onClick={() => setIsToggle(!isToggle)}
        >
          ข้อมูลศักยภาพ
        </div>

        <div
          className={classNames("flex justify-center relative"
          , { 'opacity-0 h-0 z-[-100]': !isToggle }
          
          )}
        >
          <div className="w-[100%] flex flex-col justify-center my-[24px]">
            <div className="text-danger">
              * แสดงค่าเฉลี่ยศักยภาพและความพร้อมของแต่ละเส้นใย / ต่อผู้ผลิิต
            </div>
            <StackChart data={chartData}/>
          </div>
        </div>
      </section>

      <section className="mt-[36px] mb-[98px]">
        <h1 className="mb-[16px]">กิจกรรมและคลังความรู้</h1>
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
  const { silk, community } = await getData(id);
  const chartData = await fetchStackChart(id);
  const activities = await fetchActivity();

  const payload = JSON.stringify({ chartData, silk, community, activities });
  return { props: { payload } };

};

// export const getStaticPaths = async () => {
//   const silks: IFiberType[] = await firebaseService.list("FiberType");

//   const paths = silks.map((item) => {
//     return { params: { id: item.id } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };
