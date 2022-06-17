import { useState } from "react";
import Navbar from "../components/Navbar";

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
    </>
  );
};

export default Home;
