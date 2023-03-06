import React from "react";
import Layout from "../../../src/components/Layout/Layout";
import Thumbnail from "../../../src/components/Thumbnail/Thumbnail";
import { firebaseService } from "../../../src/services/firebase/firebaseService";

const getProduct = async (color, id) => {
  const res = await firebaseService.getById(
    "ProductsGroup",
    `${id} กลุ่ม${color}`
  );

  return res;
};

const fetchCommunity = async (color, id) => {
  const res = await firebaseService.list("ProductsColor", [
    { key: "ProductsGroup", value: `${id} กลุ่ม${color}` },
  ]);

  console.log(`${id} กลุ่ม${color}`);

  const queryEnterprise = res.map((item) => item.IdEnterprise);

  const result = await firebaseService.bulkFetchEnterprise(queryEnterprise);
  return result;
};

const fetchProducts = async (color) => {
  const res = await firebaseService.list("ProductsGroup", [
    { key: "ColorType", value: color },
  ]);

  return res.map((item) => {
    return {
      id: item.id,
      name: item.name,
      image: item.ImgUrl,
    };
  });
};

const page = ({ payload }) => {
  const { products, color, product, id, communities } = JSON.parse(payload);
  return (
    <Layout>
      <section>
        <div className="flex relative items-center overflow-hidden max-h-[423px]">
          <img
            className="w-full"
            src={product.CoverImgUrl || "/images/empty.png"}
            alt=""
          />
          <div className="absolute ml-[92px] ">
            <h1 className="text-[104px] text-[white]">
              {id} กลุ่ม{color}
            </h1>
          </div>
        </div>
      </section>

      {communities.length > 0 && (
        <section className="mt-[36px]">
          <h1>วิสาหกิจชุมชน</h1>
          <div className="flex flex-wrap w-full mt-[24px]">
            {communities.map((item) => (
              <Thumbnail
                key={item.id}
                name={item.name}
                image={item.ImgUrl}
                url={`/community/${item.id}`}
              />
            ))}
          </div>
        </section>
      )}

      <section className="mt-[60px]">
        <h1>ผลิตภัณฑ์ย้อมสีธรรมชาติ</h1>
        <div className="flex flex-wrap mt-[24px]">
          {products.map((product) => (
            <Thumbnail
              key={product.id}
              name={product.name}
              image={product.image}
              url={`/product/${color}/${product.name}`}
              size="large"
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default page;

export const getServerSideProps = async ({ params: { color, id } }) => {
  const product = await getProduct(color, id);
  const products = await fetchProducts(color);
  const communities = await fetchCommunity(color, id);
  const payload = JSON.stringify({ product, products, color, id, communities });

  return {
    props: { payload },
  };
};
