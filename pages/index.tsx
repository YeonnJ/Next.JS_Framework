import { useState } from "react";
import Navbar from "../components/Navbar";
import Test from "./Type";

const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Navbar />
      <div>hi {counter}</div>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        +
      </button>
      <Test name="yeonjae" age={28} />
    </>
  );
};

export default Home;
