import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div id="content">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
