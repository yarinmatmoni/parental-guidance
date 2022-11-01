import React from 'react';
import Head from "next/head";
import { motion } from "framer-motion";
import * as Animation from "../../utils/animation/animation";

function Schedule() {
    return (
        <motion.div variants={Animation.pageAnimation} initial="hidden" animate="show">
            <Head>
                <title>שלהבת ברק - סדר יום לילדים</title>
                <meta name="keywords" content="אודות" />
            </Head>
        </motion.div>
    )
}

export default Schedule;