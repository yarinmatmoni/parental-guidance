import React from "react";
// import Head from "next/head";
import { motion } from "framer-motion";
import { pageAnimation } from "../../utils/animation/animation";

function Sleep() {
  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show">
      {/* <Head>
                <title>שלהבת ברק - יועצת שינה</title>
                <meta name="keywords" content="אודות" />
            </Head> */}
    </motion.div>
  );
}

export default Sleep;
