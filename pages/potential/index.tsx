import React, { use } from "react";
import Image from "next/image";
import Layout from "../../src/components/Layout/Layout";


const page = () => {
  return (
    <Layout>
      {/* <Image
        className="w-full"
        src="/images/potential.png"
        alt="Picture of the author"
        width={2874}
        height={6069}
      /> */}
      <iframe title="Report Section" 
        width="1024" 
        height="804" 
        src="https://app.powerbi.com/view?r=eyJrIjoiNzljMWVjYWUtM2RiNi00M2QyLWEzMGQtOGRjODVlZjY4MmY3IiwidCI6Ijk1NWU1YmM2LTI4MjEtNGQ0Mi1hNzE0LTBmMGQxNGMyZjlhNyIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true">
      </iframe>
    </Layout>
  );
};

export default page;
