import React from "react";
import DraggableElement from "./DraggableElement";
import { getExportFunctionality } from "../helper";

const Sidebar = (elements) => {

  return (
    <div className="lg:px-6 flex flex-col justify-between 
    lg:py-5 lg:w-80 w-40 p-3 bg-[#2D2D2D] z-50">
      <div className="flex flex-col gap-2.5">
        <p className="text-[#fff] mt-2 text-xl font-bold">BLOCKS</p>
        <DraggableElement text="Label" />
        <DraggableElement text="Input" />
        <DraggableElement text="Button" />
      </div>
      <div className="mb-10 w-full flex flex-col gap-6 justify-center">
        <button 
        onClick={() => getExportFunctionality(elements)}
        className="p-2 bg-green-500 rounded-lg 
        text-white text-lg font-semibold hover:bg-green-600">
          Export
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
