import Image from "next/image";
import React from "react";
import Layout from "../../src/components/Layout/Layout";

const Page = () => {
  return (
    <Layout title="เกี่ยวกับเรา" hideFooter>
      <section>
        <div className="w-full flex h-[378px] items-center overflow-hidden justify-between px-[80px]">
          <div className="text-[#E2BFAC] text-[92px] leading-[78px]">
            <h2>ABOUT</h2>
            <h2>THAI SENSEE</h2>
          </div>
          <div>
            <img
              src="/images/logo-color.png"
              alt="Thai Sensee Logo"
              height={570}
              width={480}
              className="translate-y-[110px]"
            />
          </div>
        </div>
        <div className="mt-[40px]">
          <p>
            โครงการ
            ระบบดิจิตัลเพื่อการบริหารจัดการเชิงรุกคลัสเตอร์เส้นใยธรรมชาติเพื่อการสร้างมูลค่าเพิ่มและยกระดับวิสาหกิจชุมชนไปสู่วิสาหกิจนวัตกรรม
            เป็นการดำเนินงานร่วมกันระหว่าง ภาควิชาวิทยาการสิ่งทอ
            คณะอุตสาหกรรมเกษตรมหาวิทยาลัยเกษตรศาสตร์,
            สถาบันค้นคว้าและพัฒนาผลิตผลทางการเกษตรและอุตสาหกรรมเกษตร
            มหาวิทยาลัยเกษตรศาสตร์ (KAPI), ภาควิชาเทคโนโลยีอุตสาหกรรมเกษตร
            คณะอุตสาหกรรมเกษตร มหาวิทยาลัยเกษตรศาสตร์,
            มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
            และสถาบันพัฒนาอุตสาหกรรมสิ่งทอ (THTI)
            โดยมีเป้าหมายเพื่อพัฒนาระบบดิจิตัลเพื่อการบริหารจัดการในเชิงรุกของเกษตรกรและวิสาหกิจชุมชนในคลัสเตอร์เส้นใยธรรมชาติและสีย้อมธรรมชาติของประเทศไทย
            โดยนำระบบเทคโนโลยีสารสนเทศมาบูรณาการในการพัฒนาระบบดิจิตัลสำหรับประเมินศักยภาพความพร้อมของเกษตรกรและวิสาหกิจชุมชนในคลัสเตอร์เส้นใยธรรมชาติและสีย้อมธรรมชาติของประเทศ
            เพื่อนำผลมาพัฒนาระบบดิจิตัลสำหรับการจัดหาวัตถุดิบ การผลิต
            การแปรรูปผลิตภัณฑ์ และการตลาดของกลุ่มเครือข่ายวิสาหกิจชุมชน
            เพื่อเพิ่มขีดความสามารถทางการแข่งขันและการขยายตลาดสู่เชิงพาณิชย์ให้เหมาะสมกับระดับศักยภาพของกลุ่มวิสาหกิจชุมชน
            และสร้างความเชื่อมโยงของเครือข่ายกลุ่มวิสาหกิจชุมชนไปสู่โซ่อุปทานของธุรกิจและอุตสาหกรรมต่างๆ
            และทำการพัฒนาศักยภาพด้านการตลาดของวิสาหกิจชุมชม
            ด้วยการจัดทำระบบดิจิตัลสำหรับการเรียนรู้ด้านการตลาดดิจิตัลและการตลาดเชิงประสบการณ์
            (Experiential marketing) ให้กับวิสาหกิจชุมชน
            โดยนำกระบวนการนำเสนอเนื้อหาที่มีคุณค่า (Content marketing)
            จากการนำเอกลักษณ์ท้องถิ่นและการนำเทคโนโลยีและนวัตกรรมมาบูรณาการในการออกแบบและพัฒนาผลิตภัณฑ์
            เพื่อสร้างคุณค่าใหม่และเพิ่มมูลค่าให้กับผลิตภัณฑ์เส้นใยธรรมชาติและสีย้อมธรรมชาติของวิสาหกิจชุม
            เพื่อสร้างช่องทางการตลาดใหม่และส่งเสริมให้เกิดการยกระดับวิสาหกิจชุมชนไปสู่วิสาหกิจนวัตกรรม
            รวมทั้งจัดทำระบบคลังความรู้ดิจิตัลและฐานข้อมูลด้านเส้นใยธรรมชาติและสีย้อมธรรมชาติ
            เทคโนโลยีการผลิต
            และการแปรแปรรูปผลิตภัณฑ์ภูมิปัญญาท้องถิ่นจากเส้นใยธรรมชาติและสีย้อมธรรมชาติ
            เพื่อเป็นช่องทางการสื่อสารองค์ความรู้และส่งเสริมให้เกิดการเรียนรู้
            และการประยุกต์ใช้ไปยังวิสาหกิจชุมชน ผู้ประกอบการ และประชาชน
          </p>
        </div>
      </section>
      <footer className="mt-[120px]">
        <div>
          <h1 className="mb-[40px]">Contact</h1>
          <div className="flex justify-between items-start">
            <div className="grid grid-cols-2 gap-x-[108px] text-primary leading-[52px]">
              <div>เลขที่ 50 อาคารระพีสาคริก</div>
              <div className="flex items-center space-x-[8px]">
                <img src="/images/facebook.svg" />
                <div>Thai SenSee</div>
              </div>
              <div>ถนนงามวงศ์วาน แขวงลาดยาว</div>
              <div className="flex items-center space-x-[8px]">
                <img src="/images/email.svg" />
                <div>Thaisensee@gmail.com</div>
              </div>
              <div>เขตจตุจักร</div>
              <div className="flex items-center space-x-[8px]">
                <img src="/images/web.svg" />
                <div>www.thaisensee.com</div>
              </div>
              <div>10900</div>
            </div>
            <div className="flex space-x-[20px] items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.855516804174!2d100.56743111597629!3d13.847709990285459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29cde04a24eaf%3A0xe4bd211a23d9e111!2z4Lit4Liy4LiE4Liy4Lij4Lij4Liw4Lie4Li14Liq4Liy4LiE4Lij4Li04LiB!5e0!3m2!1sth!2sth!4v1669466764335!5m2!1sth!2sth"
                width="178"
                height="178"
              ></iframe>
              <img src="/images/qr.png" width={200} height={200} alt="QR" />
            </div>
          </div>
        </div>
        <div className="mt-[64px]">
          <h1 className="mb-[40px]">เครือข่ายที่เกี่ยวข้อง</h1>
          <div className="flex space-x-[46px] mb-[108px] translate-x-[-60px]">
            <img
              src="/images/de.png"
              width={376}
              height={185}
              alt="DE Logo"
            />
            <img
              src="/images/ku.png"
              width={185}
              height={185}
              alt="Kasetsart University Logo"
            />
            <img
              src="/images/kapi.png"
              width={185}
              height={185}
              alt="KAPI Logo"
            />
            <img
              src="/images/inno-fashion-center.png"
              width={185}
              height={185}
              alt="Inno Fashion Center Logo Logo"
            />
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Page;
