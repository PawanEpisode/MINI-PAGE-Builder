// src/components/DraggableElement.js
import React from 'react';
import gripvertical from '../assets/gripvertical.png';

const DraggableElement = ({ text }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', JSON.stringify({type: 'blocks',data: text}));
  };

  return (
    <div
      className="w-60 px-3 py-4 flex gap-2.5 items-center rounded bg-white cursor-grab"
      draggable
      onDragStart={handleDragStart}
    >
    <img className='w-3 h-5' src={gripvertical} alt='grip-icon' />
    <span className='text-[#000] text-base font-light'>{text}</span>
    </div>
  );
};

export default DraggableElement;
