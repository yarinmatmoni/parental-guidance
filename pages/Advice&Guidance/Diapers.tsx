import React from 'react';
// import Head from "next/head";
import { motion } from "framer-motion";
import { pageAnimation } from "../../utils/animation/animation";

function Diapers() {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
            {/* <Head>
                <title>שלהבת ברק - גמילה מחיתולים</title>
                <meta name="keywords" content="אודות" />
            </Head> */}
        </motion.div>
    )
}

export default Diapers;