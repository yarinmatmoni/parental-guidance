import React from 'react';
import Head from "next/head";

function MetaData({ title, keywords, description }: { title: string, keywords: string, description: string }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="author" content="שלהבת ברק" />
            <meta name="description" content={description} />
        </Head>
    )
}

export default MetaData;