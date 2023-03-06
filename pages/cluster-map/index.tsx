import Link from "next/link";
import React from "react";
import StackChart from "../../src/components/Chart/StackChart";
import Layout from "../../src/components/Layout/Layout";
import ActivitySlideShow from "../../src/components/Slideshow/ActivitySlideShow";
import { IActivity } from "../../src/models/ActivityModel";
import { IArticle } from "../../src/models/ArticleModel";
import { firebaseService } from "../../src/services/firebase/firebaseService";
import Popup from "reactjs-popup";
import { MOCK_CLUSTER_AGENCIES, MOCK_CLUSTER_MAPS } from "../../src/mocks/mock";
import ClusterMapSlideShow from "../../src/components/Slideshow/ClusterMapSlideShow";

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
      link: item.LinkUrl,
    };
  });

  return { mainActivity, subActivity };
};

const fetchClusterMaps = () => {
  return MOCK_CLUSTER_MAPS.map((item) => {
    return {
      id: item.id,
      name: item.name,
      image: item.imageUrl,
      link: item.link,
    };
  });
};
const fetchClusterAgencies = () => {
  return MOCK_CLUSTER_AGENCIES.map((item) => {
    return {
      id: item.id,
      name: item.name,
      image: item.imageUrl,
    };
  });
};

const fetchChart = async () => {
  const res = await firebaseService.fetchClusterMainChart();
  const values1: any[] = [];
  const values2: any[] = [];
  const values3: any[] = [];
  const labels: any[] = [];

  res.forEach((item) => {
    labels.push(item.id);
    values1.push(item.ต้ำนน้ำ);
    values2.push(item.กลางน้ำ);
    values3.push(item.ปลายน้ำ);
  });

  const values = [
    {
      name: "ต้นน้ำ",
      data: values1,
    },
    {
      name: "กลางน้ำ",
      data: values2,
    },
    {
      name: "ปลายน้ำ",
      data: values3,
    },
  ];

  return { labels, values };
};
const page = ({ payload }) => {
  const { activities, chartData, clusterMaps, agencies } = JSON.parse(payload);
  return (
    <Layout>
      <section>
        <div className="flex relative items-center overflow-hidden">
          <img className="w-full" src={"/images/cluster-0.png"} alt="" />
          <div className="absolute ml-[92px] ">
            <h1 className="text-[104px] text-[white]">CLUSTER MAP</h1>
          </div>
        </div>

        <p className="my-[36px]">
          คลัสเตอร์เส้นใยธรรมชาติและสีย้อมธรรมชาติ
          เป็นการเชื่อมโยงกันของเครือข่ายเกษตรกร
          กลุ่มวิสาหกิจชุมชนรวมถึงผู้ประกอบการธุรกิจและอุตสาหกรรมสิ่งทอ
          ตั้งแต่ต้นน้ำถึงปลายน้ำโดยมีเป้าหมายเพื่อการผลิต การแปรรูป
          และการจัดจำหน่าย โดยเครือข่ายเกษตรกรและวิสาหกิจชุมชน ประกอบด้วย
          วิสาหกิจชุมชนต้นน้ำผู้ปลูกพืชเส้นใย เลี้ยงไหม ผลิตเส้นใยและเส้นด้าย
          วิสาหกิจชุมชนกลางน้ำผู้ผลิตผ้าทอ ผ้าถัก และย้อมสีธรรมชาติ
          และวิสาหกิจชุมชนปลายน้ำผู้ผลิตเสื้อผ้า
          ผลิตภัณฑ์สิ่งทอและผลิตภัณฑ์ต่างๆ
          <br />
          <br />
          คลัสเตอร์
          ให้ความสำคัญในการสร้างความเชื่อมโยงทั้งในมิติการทำงานและเชื่อมโยงองค์ความรู้และข้อมูลกับหน่วยงานภาครัฐ
          ภาคธุรกิจ ภาคการศึกษา สถาบันวิจัย สถาบันการเงินองค์กรและสมาคมต่างๆ
          ให้สามารถมีส่วนร่วมในการสนับสนุนเกษตรกรและวิสาหกิจชุมชน
          ผู้ผลิตเส้นใยธรรมชาติและสีย้อมธรรมชาติของประเทศ
          ซึ่งรวมถึงการเพิ่มศักยภาพในแข่งขันในด้านการตลาดระดับภูมิภาคและระดับโลก
        </p>
      </section>

      <section className="mt-[36px]">
        <Link href="/cluster-map">
          <h1 className="mb-[16px]">
            คลัสเตอร์เส้นใยธรรมชาติและสีย้อมธรรมชาติ
          </h1>
        </Link>
        <ClusterMapSlideShow payload={clusterMaps} />
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
          <img src="/images/mindmap.png" />
        </Popup>
      </div>

      {/*
	<section className="mt-[36px]">
        <Link href="/cluster-map">
          <h1 className="mb-[16px]">หน่วยงานสนับสนุนการดำเนินงาน</h1>
        </Link>
        <ClusterMapSlideShow payload={agencies} />
      </section>
       */}
      <section>
        <StackChart data={chartData} height={600} />
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
  const chartData = await fetchChart();
  const clusterMaps = await fetchClusterMaps();
  const agencies = await fetchClusterAgencies();

  const payload = JSON.stringify({
    activities,
    chartData,
    clusterMaps,
    agencies,
  });
  return {
    props: { payload },
  };
};
