import Link from "next/link";
import React from "react";
import Layout from "../../src/components/Layout/Layout";

const page = () => {
  return (
    <Layout>
      <section className="relative mt-[64px] mb-[300px]">
        <div className="absolute text-white text-[104px] top-[48px] left-[48px]">
          <div>ชุดความรู้</div>
          <div>Lorem</div>
        </div>
        <img src="/images/example.png" />

        <p className="my-[48px]">
          &nbsp;&nbsp;&nbsp;&nbsp;
          เส้นใยไหมอีรี่เป็นเส้นใยเส้นสั้นๆ ต้องดึงเส้นใยจาก
          รังด้วยวิธีปั่นแบบเดียวกับการปั่นฝ้าย ดังนั้นจึงไม่ต้องต้มรัง
          ไหมขณะที่ยังมีตัวดักแด้ไหมอยู่ในรัง
          สามารถตัดเปลือกรังไหมหรือรอให้ตัวผีเสื้อออกมาจึงนำรังไปต้ม
          เพื่อละลายสารเหนียวที่เคลือบเส้นไหมออกจึงจะนำไปปั่นเส้นใยไหม
          คุณสมบัตินี้เป็นข้อดีของไหมอีรี่ คือ
          ทำให้ไม่ขัดต่อความรู้สึกของผู้ใช้ที่ไม่มีการฆ่าตัวไหมเพื่อเอาใยมาทำเสื้อผ้าการใช้วิธีสาวโดยใช้เครื่องสาวพื้นบ้านแบบไหมหม่อนก็อาจทำได้แต่ต้องใช้ความชำนาญเป็นพิเศษ
          เส้นใยไหมอีรี่จึงจัดเป็นไหมปั่นซึ่งเส้นไหมปั่นนั้นเป็นที่ต้องการของอุตสาหกรรมด้ายปั่นมาก
          เพราะเส้นไหมมีความเหนียว ยาว แวววาว สวยงาม มีลักษณะคล้ายฝ้ายสีขาวนวล
          น้ำหนักเบาฟู อ่อนนุ่ม ให้ความอบอุ่นเหมือนขนสัตว์มีความมันเงาในตัว
          แต่ไม่เงาแวววาวเหมือนไหมหม่อน
        </p>

        <Link href="https://www.africau.edu/images/default/sample.pdf" target="_blank" className="">
          <h1 className="hover:text-secondary text-[104px]">DOWNLOAD .PDF</h1>
        </Link>
      </section>
    </Layout>
  );
};

export default page;
