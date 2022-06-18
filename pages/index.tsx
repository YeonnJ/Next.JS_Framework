import { useState } from "react";
import Navbar from "../components/Navbar";
import Test from "./Type";
import Head from "next/head";
import Seo from "../components/Seo";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Seo title="Home" />
      <Test name="yeonjae" age={28} />
    </>
  );
};

export default Home;
