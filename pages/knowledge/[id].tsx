import Link from "next/link";
import React from "react";
import Layout from "../../src/components/Layout/Layout";
import Thumbnail from "../../src/components/Thumbnail/Thumbnail";
import { firebaseService } from "../../src/services/firebase/firebaseService";
import { IArticle } from "../../src/models/ArticleModel";

const getArticleType = async (id) => {
  const res = await firebaseService.getById("ArticleType", id)
  return res
}

const fetchArticle = async(id) => {

  const res = await firebaseService.list("Article", [{key: "ArticleType",  value: id}])
  return res.map((item) => {
    return {
      id: item.id,
      name: item.Name,
      image: item.ImgUrl,
      link:item.LinkUrl,
    };
  })
};

const page = ({payload}) => {
  const { articles , articleType} = JSON.parse(payload)

  return (
    <Layout>
      <section>
        <div className="flex relative items-center overflow-hidden">
          <img className="w-full" src={articleType.CoverImgUrl||"/images/activity-cover.png"} alt="" />
          <div className="absolute ml-[92px] ">
            <h1 className="text-[104px] text-[white]">{articleType.Name}</h1>
          </div>
        </div>
      </section>


      {/* <section className="flex flex-wrap gap-y-[48px] gap-x-[48px] mt-[96px] mb-[216px]"> 
        {articles.map((item) => <Link key={item} href="/knowledge/example">
            <div className="relative flex items-center  h-[420px] w-[480px] border-[1px] border-[solid]">
              <img src={"/images/activity-cover.png"} alt=""  className="absolute h-full left-0 z-0"/>
              <div className="text-white z-[1] relative text-[104px] pl-[24px]">
                <div>ชุดความรู้</div>
                <div>เรื่อง{item}</div>
              </div>
            </div>
        </Link>)}
      </section> */}
      <section className="mt-[60px]">
        <div className="flex flex-wrap mt-[24px]">
          {articles.map((articles) => (
            <Thumbnail
              key={articles.id}
              name={articles.name}
              image={articles.image}
              url={articles.link||'/knowledge'}
              size="large"
            />
          ))}
        </div>
        <div className="text-[30px] mt-[15px] group-hover:text-secondary duration-300">{articles.Name}</div>
      </section>
    </Layout>
  );
};

export default page;
export const getServerSideProps = async ({ params: { id } }) => {
  
  const articleType = await getArticleType(id);
  const articles = await fetchArticle(id);
  const payload = JSON.stringify({  id, articles,articleType })
  return {
    props: {payload}
  };
};
