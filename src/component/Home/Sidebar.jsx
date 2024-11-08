import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const data = [
    {
      title: "All tasks",
      icon: <CgNotes />,
      link: "/",
    },
    {
      title: "Important tasks",
      icon: <MdLabelImportant />,
      link: "/importantTasks",
    },
    {
      title: "Complete tasks",
      icon: <FaCheckDouble />,
      link: "/completedTasks",
    },
    {
      title: "Incompleted tasks",
      icon: <TbNotebookOff />,
      link: "/incompletedTasks",
    },
  ];

  return (
    <>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Akib</h2>
        <h4 className="mb-1 text-gray-400">akm@gmail.com</h4>
        <hr />
      </div>
      <div>
        {data.map((item, i) => (
          <Link
            key={i}
            to={item.link}
            className="my-2 flex items-center hover:bg-gray-600 p-2 rounded transition-all duration-300"
          >
            {item.icon} &nbsp; {item.title}
          </Link>
        ))}
      </div>
      <div>
        <button className="bg-gray-600 w-full p-2 rounded">Log Out</button>
      </div>
    </>
  );
};

export default Sidebar;
