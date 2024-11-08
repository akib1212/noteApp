import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";

const Cards = ({home, setInputDiv}) => {
  const data = [
    {
      title: "The Best Coding Channel",
      desc: "World's best concept-clearing YouTube channel for beginners.",
      status: "Incomplete",
    },
    {
      title: "Mastering Web Development",
      desc: "Comprehensive tutorials on HTML, CSS, and JavaScript for building modern websites.",
      status: "Complete",
    },
    {
      title: "Learn Data Science",
      desc: "Step-by-step guides to become a data science pro with Python, R, and real-world projects.",
      status: "Incomplete",
    },
    {
      title: "AI and Machine Learning Hub",
      desc: "Explores the fundamentals of AI, machine learning, and neural networks with hands-on demos.",
      status: "Incomplete",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data &&
        data.map((items, i) => (
          <div className="bg-gray-800 rounded-sm p-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold">{items.title}</h3>
              <p className="text-gray-300 my-2">{items.desc}</p>
            </div>
            <div className="mt-4 w-full flex items-center">
              <button
                className={`${
                  items.status === "Incomplete" ? "bg-red-500" : "bg-green-700"
                } p-2 rounded`}
              >
                {items.status}
              </button>
              <div className="text-white p-2 w-3/6 text-2xl flex justify-around">
                <button>
                  <CiHeart />
                </button>
                <button>
                  <FaEdit />
                </button>
                <button>
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
      {home === "true" && (
        <button 
        className = "bg-gray-800 rounded-sm p-4 flex justify-center items-center text-gray-300 hover:cursor-pointer transition-all duration-300 hover:scale-105"
         onClick={()=>setInputDiv("fixed")} >
          <FaCirclePlus className="text-4xl" />
          <h2 className="mx-4 text-2xl">Add Task </h2>
        </button>
      )}
    </div>
  );
};

export default Cards;
