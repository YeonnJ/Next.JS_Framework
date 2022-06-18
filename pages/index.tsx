import { useState } from "react";
import Navbar from "../components/Navbar";
import Test from "./Type";

const Home = () => {
  return (
    <>
      <Navbar />
      <h1>Home</h1>
      <Test name="yeonjae" age={28} />
    </>
  );
};

export default Home;
