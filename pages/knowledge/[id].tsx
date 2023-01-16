import Link from "next/link";
import React from "react";
import Layout from "../../src/components/Layout/Layout";
import Thumbnail from "../../src/components/Thumbnail/Thumbnail";







const page = () => {
  const articles = [1,2,3,4,5,6]

  return (
    <Layout>
      <section>
        <div className="flex relative items-center overflow-hidden">
          <img className="w-full" src={"/images/activity-cover.png"} alt="" />
          <div className="absolute ml-[92px] ">
            <h1 className="text-[104px] text-[white]">กิจกรรม</h1>
            <h1 className="text-[104px] text-[white]">และคลังความรู้</h1>
          </div>
        </div>
      </section>


      <section className="flex flex-wrap gap-y-[48px] gap-x-[48px] mt-[96px] mb-[216px]"> 
        {articles.map((item) => <Link key={item} href="/knowledge/example">
            <div className="relative flex items-center  h-[420px] w-[480px] border-[1px] border-[solid]">
              <img src={"/images/activity-cover.png"} alt=""  className="absolute h-full left-0 z-0"/>
              <div className="text-white z-[1] relative text-[104px] pl-[24px]">
                <div>ชุดความรู้</div>
                <div>เรื่อง{item}</div>
              </div>
            </div>
        </Link>)}
      </section>
    </Layout>
  );
};

export default page;
