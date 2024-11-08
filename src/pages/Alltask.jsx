import React, { useState } from "react";
import Cards from "../component/Home/Cards.jsx";
import { FaCirclePlus } from "react-icons/fa6";
import InputData from "../component/Home/InputData.jsx";

const Alltask = () => {
  const [InputDiv,setInputDiv]=useState("hidden")
  return (
    <>
      <div>
        <div className="w-full flex justify-end px-4 py-2">
          <button onClick={()=> setInputDiv("fixed")}>
            <FaCirclePlus className="text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300" />
          </button>
        </div>
        <Cards home={"true"} setInputDiv={setInputDiv}/>
      </div>
      <InputData InputDiv={InputDiv} setInputDiv={setInputDiv}/>
    </>
  );
};

export default Alltask;
