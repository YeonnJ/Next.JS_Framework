import Head from "next/head";
import React from "react";

const Seo = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title} | Next Movies</title>
      </Head>
    </div>
  );
};

export default Seo;
