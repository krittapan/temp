import React from "react";
import Image from "next/image";
import Layout from "../../src/components/Layout/Layout";

const page = () => {
  return (
    <Layout>
      <Image
      className="w-full"
        src="/images/potential.png"
        alt="Picture of the author"
        width={2874}
        height={6069}
      />
    </Layout>
  );
};

export default page;
