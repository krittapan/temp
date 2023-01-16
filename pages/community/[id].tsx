import React, { useState } from "react";
import Image from "next/image";
import { IEnterprise } from "../../src/models/Enterprise";
import { firebaseService } from "../../src/services/firebase/firebaseService";
import Link from "next/link";
import { MOCK_PRODUCTS } from "../../src/mocks/mock";
import Layout from "../../src/components/Layout/Layout";
import Thumbnail from "../../src/components/Thumbnail/Thumbnail";
import RadarChart from "../../src/components/Chart/RadarChart";
import classNames from "classnames";
const getData = async (id: string) => {
  const res: IEnterprise = await firebaseService.getById("Enterprise", id);
  return res;
};

const getProduct = async () => {
  return MOCK_PRODUCTS.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
};

const page = ({ payload }) => {
  const { data, products } = JSON.parse(payload);

  const address: IEnterprise["address"] = data[" address"];
  const contact: IEnterprise["Contact"] = data[" Contact"];

  const [isToggle, setIsToggle] = useState(false);
  return (
    <Layout>
      <section className="mt-[48px]">
        <h1 className="text-default h-[60px]">{data.name}</h1>
        <h1 className="text-default h-[60px]">
          อ.{address?.District} จ.{address?.Province}
        </h1>

        <div className="flex space-x-[64px] mt-[48px]">
          <div className="h-[342px] w-[374px] border-[1px] border-default border-solid flex overflow-hidden flex-grow-0 flex-shrink-0 basis-[374px] rounded-[8px]">
            <img src="/images/empty.png" className="w-full" />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-primary">{data?.Description}</p>
            <div className="text-[25px] grid grid-cols-2">
              <div className="text-primary flex items-center space-x-[12px]">
                <img src="/images/drop.svg" />
                <div className="">ย้อมสีธรรมชาติ 80%</div>
              </div>
              <div className="text-secondary flex items-center space-x-[12px]">
                <img src="/images/tree.svg" />
                <div>เส้นใยสับปะรด, เส้นใยฝ้าย</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[60px]">
        <h1>ร้านค้า</h1>
        <div className="text-[22px] flex space-x-[30px] mt-[20px]">
          <div className="flex items-center space-x-[12px]">
            <img src="/images/shop.svg" />
            <div>ไหมทอมือ: iconsiam</div>
          </div>
          <div className="flex items-center space-x-[12px]">
            <img src="/images/shop.svg" />
            <div>ไหมทอมือ: Siam Paragon</div>
          </div>
        </div>
      </section>

      <section className="mt-[60px]">
        <h1>ผลิตภัณฑ์</h1>
        <div className="flex flex-wrap mt-[24px]">
          {products.map((product) => (
            <Thumbnail
              key={product.id}
              name={product.name}
              image={product.image}
              url={""}
            />
            // <div className="w-[180px]  flex flex-col !-0 !mr-[16px] group mb-[36px]">
            //   <div className="p-0 m-0  h-[180px] w-[180px] overflow-hidden flex items-center border-[1px] border-[solid] border-default cursor-pointer">
            //     <img src={product["image"] || "/images/empty.png"} />
            //   </div>
            //   <div className="text-[30px] mt-[15px] group-hover:text-secondary duration-300 text-center">
            //     {product.name}
            //   </div>
            // </div>
          ))}
        </div>
      </section>

      <section className="mt-[60px]">
        <h1>ติดต่อ</h1>
        <div className="flex justify-between mt-[12px]">
          <div className="grid grid-cols-2 gap-x-[128px]">
            <p>
              เลขที่ {address?.Number} หมู่ที่ {address?.Moo} <br />
              อำเภอ
              {address?.District} จังหวัด{address?.Province} <br />
              {address?.PostalCode}
            </p>
            <div>
              <div className="flex items-center space-x-[12px]">
                <img src="/images/tel.svg" className="grayscale" />
                <p>{contact?.Tel}</p>
              </div>
              <Link
                href={contact?.Facebook || ""}
                target="_blank"
                className="flex items-center space-x-[12px]"
              >
                <img src="/images/facebook.svg" className="grayscale" />
                <p>Thai SenSee</p>
              </Link>
              <div className="flex items-center space-x-[12px]">
                <img src="/images/email.svg" className="grayscale" />
                <p>{contact?.Line}</p>
              </div>
              <div className="flex items-center space-x-[12px]">
                <img src="/images/web.svg" className="grayscale" />
                <p>{contact?.Web || "-"}</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-[20px] items-center">
            <iframe
              src={`https://maps.google.com/maps?q=${data?.Location?.latitude}, ${data?.Location?.longitude}&z=15&output=embed`}
              width="178"
              height="178"
            ></iframe>
            <img src="/images/qr.png" width={200} height={200} alt="QR" />
          </div>
        </div>
      </section>

      <section className="mt-[60px]">
        <h1>มาตรฐาน นวัตกรรมและทรัพย์สินทางปัญญา</h1>
        <div className="flex mt-[24px] space-x-[24px]">
          <div className="flex flex-col items-center">
            <img src="/mock/otop-logo.png" width={80} height={80} alt="QR" />
            <div className="mt-[12px]">2017</div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/mock/otop-logo.png" width={80} height={80} alt="QR" />
            <div className="mt-[12px]">2018</div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/mock/otop-logo.png" width={80} height={80} alt="QR" />
            <div className="mt-[12px]">2019</div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/mock/otop-logo.png" width={80} height={80} alt="QR" />
            <div className="mt-[12px]">2020</div>
          </div>
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
          className={classNames("flex justify-center overflow-y-hidden", {
            "opacity-0 h-0": !isToggle,
          })}
        >
          <div className="w-[80%] my-[24px]">
            <RadarChart />
            <div className="mt-[78px] border-[2px] border-solid border-primary-dark text-primary-dark text-[60px] mr-0 ml-auto px-[24px] w-fit rounded-[12px]">
              ศักยภาพเชิงลึก
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default page;

export const getServerSideProps = async ({ params: { id } }) => {
  const data = await getData(id);
  const products = await getProduct();

  const payload = JSON.stringify({ data, products });
  return { props: { payload } };
};

// export const getStaticPaths = async () => {
//   const enterprises: IEnterprise[] = await firebaseService.list("Enterprise");

//   const paths = enterprises.map((item) => {
//     return { params: { id: item.id } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };
