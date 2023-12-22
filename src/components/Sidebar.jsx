// src/components/Sidebar.js
import React from 'react';
import DraggableElement from './DraggableElement';

const Sidebar = () => {
  return (
    <div className="px-6 flex flex-col justify-between py-5 w-80 bg-[#2D2D2D]">
        <div className='flex flex-col gap-2.5'>
          <p className='text-[#fff] mt-2 text-xl font-bold'>BLOCKS</p>
          <DraggableElement text="Label" />
          <DraggableElement text="Input" />
          <DraggableElement text="Button" />
        </div>
        <div className='mb-10 w-full flex flex-col gap-6 justify-center'>
          <button className='p-2 bg-green-500 rounded-lg text-white text-lg font-semibold hover:bg-green-600'>Import</button>
          <button className='p-2 bg-green-500 rounded-lg text-white text-lg font-semibold hover:bg-green-600'>Export</button>
        </div>
    </div>
  );
};

export default Sidebar;
