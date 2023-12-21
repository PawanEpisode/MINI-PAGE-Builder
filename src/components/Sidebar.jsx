// src/components/Sidebar.js
import React from 'react';
import DraggableElement from './DraggableElement';

const Sidebar = () => {
  return (
    <div className="px-6 flex flex-col gap-2.5 py-5 w-80 bg-[#2D2D2D]">
        <p className='text-[#fff] mt-2 text-xl font-bold'>BLOCKS</p>
        <DraggableElement text="Label" />
        <DraggableElement text="Input" />
        <DraggableElement text="Button" />
    </div>
  );
};

export default Sidebar;
