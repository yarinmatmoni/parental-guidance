import React from "react";
import Header from "./header/Header";
import ParallaxSection from '../components/parallaxSection/ParallaxSection';
import Footer from "./footer/Footer";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div id="content">{children}</div>
      <ParallaxSection />
      <Footer />
    </>
  );
}

export default Layout;
