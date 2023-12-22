import React from 'react';
import gripvertical from '../assets/gripvertical.png';

const DraggableElement = ({ text }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({type: 'blocks',data: text}));
  };

  return (
    <div
    style={{ boxShadow: '0px 4px 24px 0px rgba(0, 0, 0, 0.7)'}}
      className="w-60 px-3 py-4 flex gap-2.5 items-center border bg-white rounded cursor-grab"
      draggable
      onDragStart={handleDragStart}
    >
    <img className='w-3 h-5' src={gripvertical} alt='grip-icon' />
    <span className='text-[#000] text-base font-light'>{text}</span>
    </div>
  );
};

export default DraggableElement;
