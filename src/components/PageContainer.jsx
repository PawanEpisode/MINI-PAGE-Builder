// src/components/PageContainer.js
import React, { useRef, useState } from 'react';
import CustomModal from './CustomModal';
import useClickOutside from '../hooks/useClickOutside';

const PageContainer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [config, setConfig] = useState({ x: 0, y: 0, text: '',fontSize: 0, fontWeight: 0 });
    const [elements, setElements] = useState([]);
    const [currentElement, setCurrentElement] = useState(null);

    const outsideRef = useRef()

    const handleDrop = (event) => {
        event.preventDefault();
        const {type, data} = JSON.parse(event.dataTransfer.getData('text/plain'));

        // Get mouse coordinates
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        if(type === 'blocks') {
            // Set the configuration and show the modal
            setConfig({ x: mouseX, y: mouseY, text: data,fontSize: 0, fontWeight: 0 });
            setIsModalOpen(true);
        } else {
            const updatedElements = [...elements];
            const index = updatedElements.findIndex(item => item.id === data );
    
            if (index < 0) return;
    
            updatedElements[index] = { ...updatedElements[index], x: mouseX, y: mouseY };
            setElements(updatedElements);
        }
    };

    const allowDrop = (event) => {
        event.preventDefault();
    };

    const saveChanges = (newConfig) => {
        // Save the new element configuration
        setElements([...elements, {...newConfig}]);
    };

    const handleDragStart = (event, id) => {
        event.dataTransfer.setData('text/plain',JSON.stringify({type: 'element', data: id}));
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDropElement = (event) => {
        event.preventDefault();
        console.log('helo')
        const ID = JSON.parse(event.dataTransfer.getData('text/plain'));
        const updatedElements = [...elements];
        const index = [...elements].findIndex(item => item.id === ID );

        if (index < 0) return;

        updatedElements[index] = { ...updatedElements[index], x: event.clientX, y: event.clientY };
        setElements(updatedElements);
    };

    const handleElementClick = (ID) => {
        setCurrentElement(ID);
    }

    const handleCurrentElement = () => {
        setCurrentElement(null);
    }

    useClickOutside(outsideRef, handleCurrentElement);

console.log('drag', config, elements);
    return (
        <div
        className="bg-[#F3F3F3] h-full w-full relative cursor-grabbing"
        onDrop={handleDrop}
        onDragOver={allowDrop}
        >
            {elements.map((element, index) => (
            <div
                ref={outsideRef}
                key={element.id}
                className={`absolute ${currentElement === element.id ? 'selected': ''} hover:border-2 hover:border-[#D95409] text-lg font-[${element?.fontWeight ?? 300}]`}
                style={{ left: element.x, top: element.y }}
                draggable
                onDragStart={(event) => handleDragStart(event, element.id)}
                onDragOver={handleDragOver}
                onDrop={handleDropElement}
                onClick={()=> handleElementClick(element?.id)}
            >
            {element.text}
            </div>
        ))}
        <CustomModal config={config} onSave={saveChanges} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default PageContainer;
