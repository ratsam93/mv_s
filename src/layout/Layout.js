import { Fragment, useEffect } from "react";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation, sidebarClick } from "../utils";
import ScrollTop from "./ScrollTop";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import SideBar from "./header/SideBar";
import Head from 'next/head';

const Layout = ({ children, header, footer, singleMenu, dark }) => {
  useEffect(() => {
    animation();
    sidebarClick();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>MANEUVER VENTURES</title>
        <meta name="description" content="Maneuver Ventures Is An Investment Banking Firm That Provides Advisory Services Such As Business Restructuring, Portfolio Management, And Mergers And Acquisitions. The Company Works With High-Performing Entrepreneurs And Potential Wealth Creators To Help Them Outperform The Current Market. With Our Deep Understanding Of The Sectors We Cover, We Are Uniquely Positioned To Provide Tailored And Responsible Solutions For Our Clients." />
        <link rel="icon" href="public/assets/images/favicon.webp" />
        {/* Add other metadata as needed */}
      </Head>
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        <Header header={header} singleMenu={singleMenu} dark={dark} />
        <SideBar />
        {children}
        <Footer footer={footer} dark={dark} />
        <ScrollTop />
      </div>
    </Fragment>
  );
};

export default Layout;
