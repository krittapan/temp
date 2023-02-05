export const revalidate = 10;

import React, { use } from "react";

import Layout from "../src/components/Layout/Layout";
import Slideshow from "../src/components/Slideshow/Slideshow";
import FiberSlideShow from "../src/components/Slideshow/FiberSlideShow";
import RegionSlideShow from "../src/components/Slideshow/RegionSlideShow";
import ColorSlideShow from "../src/components/Slideshow/ColorSlideShow";
import ActivitySlideShow from "../src/components/Slideshow/ActivitySlideShow";
import ClusterMapSlideShow from "../src/components/Slideshow/ClusterMapSlideShow";
import { firebaseService } from "../src/services/firebase/firebaseService";
import { IBanner } from "../src/models/BannerModel";
import { IFiberType } from "../src/models/FiberTypeModel";
import { IColorType } from "../src/models/ColorType";
import { IActivity } from "../src/models/ActivityModel";
import { IArticle } from "../src/models/ArticleModel";
import { IThumbnail } from "../src/types/thumbnail";
import {IRegion, regionLinkMapper} from "../src/models/RegionModel";
import {
  MOCK_CLUSTER_MAPS,
  MOCK_KNOWLEDGE_1,
  MOCK_KNOWLEDGE_2,
  MOCK_REGIONS,
} from "../src/mocks/mock";
import Link from "next/link";

const fetchBanners = async (): Promise<IThumbnail[]> => {
  const res = await firebaseService.list("Banner");
  return (res as IBanner[]).map((item) => {
    return {
      id: item.id,
      image: item.ImgUrl,
      link: item.LinkUrl,
    };
  });
};

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

const fetchColorTypes = async (): Promise<IThumbnail[]> => {
  const res = await firebaseService.list("ColorType");
  return (res as IColorType[]).map((item) => {
    return {
      id: item.id,
      image: item.ImgUrl,
      color: item.ColorCode,
      name: item.Name,
    };
  });
};

const fetchClusterMaps = () => {
  return MOCK_CLUSTER_MAPS.map((item) => {
    return {
      id: item.id,
      name: item.name,
      image: item.imageUrl,
      link: item.link
    };
  });
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
const Page = ({
  banners,
  fibers,
  colorTypes,
  regions,
  activities,
  clusterMaps,
}) => {
  return (
    <Layout>
      {/* <head>
        <title>THAI SENSEE</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head> */}
      <section className="bg-[red]">
        <Slideshow payload={banners} />
      </section>

      <section className="mt-[30px]">
        <Link href="/silk">
          <h1 className="mb-[16px]">เส้นใยธรรมชาติ</h1>
        </Link>

        <FiberSlideShow payload={fibers} />
      </section>

      <section className="mt-[36px]">
        <Link href="/color">
          <h1 className="mb-[16px]">สีย้อมธรรมชาติ</h1>
        </Link>
        <ColorSlideShow payload={colorTypes} />
      </section>

      <section className="mt-[36px]">
        <Link href="/cluster-map">
          <h1 className="mb-[16px]">
            คลัสเตอร์เส้นใยธรรมชาติและสีย้อมธรรมชาติ
          </h1>
        </Link>

        <ClusterMapSlideShow payload={clusterMaps} />
      </section>

      <section className="mt-[36px]">
        <Link href="/region">
          <h1 className="mb-[16px]">ภูมิภาค</h1>
        </Link>

        <RegionSlideShow payload={regions} />
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

export default Page;

export const getServerSideProps = async (context) => {
  const banners = await fetchBanners();
  const fibers = await fetchFibers();
  const colorTypes = await fetchColorTypes();
  const regions = await fetchRegions();
  const activities = await fetchActivity();
  const clusterMaps = await fetchClusterMaps();

  return {
    props: {
      banners,
      fibers,
      colorTypes,
      regions,
      activities,
      clusterMaps,
    },
  };
};
