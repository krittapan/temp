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
import { IProduct } from "../../src/models/ProductModel";

const getData = async (id: string) => {
  const res: IEnterprise = await firebaseService.getById("Enterprise", id);

  return res;
};

const getFiberList = async (id: string) => {
  const res = await firebaseService.list("Firber", [
    { key: "IdEnterprise", value: id },
  ]);

  return res;
};

const getShop = async (id: string) => {
  const res = await firebaseService.list("Shop", [
    { key: "IdEnterprise", value: id },
  ]);

  return res;
};

const getProduct = async (id: string) => {
  const res = await firebaseService.list("Products", [
    { key: "IdEnterprise", value: id },
  ]);
  return (res as IProduct[]).map((item) => {
    return {
      id: item.id,
      name: item.Name,
      image: item.ImgUrl,
    };
  });
};

const getPatent = async (id: string) => {
  const res = await firebaseService.list("Patent", [
    { key: "IdEnterprise", value: id },
  ]);
  return res;
};

const getStandard = async (id: string) => {
  const res = await firebaseService.list("Standard", [
    { key: "IdEnterprise", value: id },
  ]);
  return res;
};

const getChartData = async (id: string)  => {

  const chartLabels:any[] = []
  const chartDatas:any[] = []

  const res = await firebaseService.getById("PotentialInformation", id)

  for (const key in res) {
    if (key.includes('มิติ')) {
      chartLabels.push(key)
      chartDatas.push(res[key])
    }
  }
  
  return { chartLabels, chartDatas, valid: chartLabels.length > 0 }
}

const page = ({ payload }) => {
  const { data, products, fiberList, shops, standards, patents, chartData } =
    JSON.parse(payload);

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
            <img src={data.ImgUrl || "/images/empty.png"} className="w-full" />
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-primary">{data?.Description}</p>
            <div className="text-[25px] grid grid-cols-2">
              <div className="text-primary flex items-center space-x-[12px]">
                <img src="/images/drop.svg" />
                <div className="">
                  ย้อมสีธรรมชาติ {data?.NaturalColorRatio}%
                </div>
              </div>
              <div className="text-secondary flex items-center space-x-[12px]">
                <img src="/images/tree.svg" />
                <div className="flex space-x-[8px]">
                  {fiberList.map((item) => (
                    <div key={item.FiberType}>{item.FiberType}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {shops?.length > 0 && (
        <section className="mt-[60px]">
          <h1>ร้านค้า</h1>
          <div className="text-[22px] flex space-x-[30px] mt-[20px]">
            {shops.map((item) => (
              <div className="flex items-center space-x-[12px]" key={item.name}>
                <img src="/images/shop.svg" />
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </section>
      )}

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
          </div>
        </div>
      </section>

      <section className="mt-[60px]">
        <h1>มาตรฐาน นวัตกรรมและทรัพย์สินทางปัญญา</h1>
        <div className="flex mt-[24px] space-x-[24px]">
          {standards.map((item) => (
            <div className="flex flex-col items-center">
              <img
                src={item.ImgUrl || "/images/empty.png"}
                width={80}
                height={80}
                alt="QR"
                className="rounded-[50%] w-[80px] h-[80px] border-[1px] border-solid"
              />
              <div className="mt-[12px]">{item.StandardName}</div>
              <div className="mt-[12px]">{item.year || "-"}</div>
            </div>
          ))}
        </div>
      </section>

      {chartData.valid && (
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
              <RadarChart chartDatas={chartData?.chartDatas || []} chartLabels={chartData?.chartLabels || []}/>
              <div className="mt-[78px] border-[2px] border-solid border-primary-dark text-primary-dark text-[60px] mr-0 ml-auto px-[24px] w-fit rounded-[12px]">
                ศักยภาพเชิงลึก
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default page;

export const getServerSideProps = async ({ params: { id } }) => {
  const data = await getData(id);
  const products = await getProduct(id);
  const fiberList = await getFiberList(id);
  const shops = await getShop(id);
  const standards = await getStandard(id);
  const patent = await getPatent(id);
  const chartData = await getChartData(id);
  const payload = JSON.stringify({
    data,
    products,
    fiberList,
    shops,
    standards,
    patent,
    chartData,
  });
  return { props: { payload } };
};
