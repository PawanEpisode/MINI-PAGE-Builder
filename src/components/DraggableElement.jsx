import React from 'react';
import gripvertical from '../assets/gripvertical.png';

const DraggableElement = ({ text }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({type: text,data: text}));
  };

  return (
    <div
    style={{ boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.7)'}}
      className="lg:w-60 lg:px-3 lg:py-4 w-20 p-2 flex gap-2.5 items-center border bg-white rounded cursor-grab"
      draggable
      onDragStart={handleDragStart}
    >
    <img className='lg:w-3 lg:h-5 sm:w-2 sm:h-3' src={gripvertical} alt='grip-icon' />
    <span className='text-[#000] text-base font-light'>{text}</span>
    </div>
  );
};

export default DraggableElement;
