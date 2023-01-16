import React from "react";
import { MOCK_KNOWLEDGE_1, MOCK_KNOWLEDGE_2 } from "../../src/mocks/mock";
import MainActivitySlideShow from "../../src/components/Slideshow/ActivitySlideShow/MainActivitySlideShow";
import SubActivitySlideShow from "../../src/components/Slideshow/ActivitySlideShow/SubActivitySlideShow";
import Layout from "../../src/components/Layout/Layout";
import { firebaseService } from "../../src/services/firebase/firebaseService";
import { IActivity } from "../../src/models/ActivityModel";
import { IArticle } from "../../src/models/ArticleModel";
import Link from "next/link";

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

const fetchYoutube = async () => {
  const res = await firebaseService.list("EnterpriseModel");
  return res;
};

const fetchArticleTypes = async () => {
  const res = await firebaseService.list("ArticleType");
  return res;
};

const page = ({ payload }) => {
  const { activities, youtubes, articles } = JSON.parse(payload);

  console.log("x", articles);
  return (
    <Layout title="กิจกรรมและคลังความรู้">
      <section>
        <div className="flex relative items-center overflow-hidden">
          <img className="w-full" src={"/images/activity-cover.png"} alt="" />
          <div className="absolute ml-[92px] ">
            <h1 className="text-[104px] text-[white]">กิจกรรม</h1>
            <h1 className="text-[104px] text-[white]">และคลังความรู้</h1>
          </div>
        </div>
      </section>

      <section className="mt-[36px]">
        <h1 className="mb-[24px]">กิจกรรม</h1>
        <MainActivitySlideShow mainActivity={activities.mainActivity} />
      </section>

      <section className="mt-[36px]">
        <h1 className="mb-[24px]">ต้นแบบวิสาหกิจชุมชน</h1>
        <div className="flex space-x-[24px]">
          {youtubes.map((e) => (
            <iframe
              key={e.id}
              width="572"
              height="321"
              src={e.youtubeUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </section>

      <section className="mt-[36px]">
        <h1 className="mb-[24px]">คลังความรู้</h1>
        <SubActivitySlideShow subActivity={activities.subActivity} />
      </section>

      <section className="mt-[36px] mb-[60px]">
        <div className="grid grid-cols-2 gap-y-[36px]">
          {articles.map((item) => (
            <Link href={`/knowledge/${item.id}`} key={item.id} className="text-primary border-solid">
              <div className="hover:text-secondary"> {item.Name}</div>
             
            </Link>
          ))}
          {/* <p className="text-primary">ชุดความรู้ด้านเส้นใยธรรมชาติ</p>
          <p className="text-primary">ชุดความรู้เกี่ยวกับเส้นใยกัญชง</p>
          <p className="text-primary">ชุดความรู้ด้านการย้อมสีธรรมชาติ</p>
          <p className="text-primary">
            ชุดความรู้คำศัพท์สิ่งทอ (Textile Terms)
          </p>
          <p className="text-primary">ชุดความรู้ด้านการเพิ่มสมบัติพิเศษ</p>
          <p className="text-primary">
            ชุดความรู้ด้านการดูแลรักษาผลิตภัณฑ์สิ่งทอ
          </p>
          <p className="text-primary">ชุดความรู้เกี่ยวกับเส้นไยสับปะรด</p>
          <p className="text-primary">
            ชุดความรู้ด้านการออกแบบและเทคนิคการตกแต่งสิ่งทอ
          </p>
          <p className="text-primary">ชุดความรู้เกี่ยวกับไหมอิรี่</p>
          <p className="text-primary">
            ชุดความรู้ด้านกาออกแบบและตัดเย็บสิ่งทอและผลิตภัณฑ์
          </p> */}
        </div>
      </section>
    </Layout>
  );
};

export default page;

export const getServerSideProps = async (context) => {
  const activities = await fetchActivity();
  const youtubes = await fetchYoutube();
  const articles = await fetchArticleTypes();

  const payload = JSON.stringify({ activities, youtubes, articles });
  return {
    props: {
      payload,
    },
  };
};
