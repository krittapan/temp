import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface ILayoutProps {
  title?: string;
  keywords?: string;
  description?: string;
  hideFooter?: boolean
  children: ReactNode;
}
const Layout = ({ title, keywords, description, hideFooter, children }: ILayoutProps) => {
  return (
    <>
      <Head>
        <title>Thai SenSee {title && ` | ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className="bg-[white] w-full relative z-[1000]">
      <Navbar />
      </div>

      <section className="mx-auto max-w-[1152px] relative z-[1] overflow-x-hidden">{children}</section>
      {!hideFooter && <Footer />}
      
    </>
  );
};

export default Layout;


Layout.defaultProps = {
  title: '',
  description: 'Thai SenSee',
  keywords: 'Thai SenSee',
}