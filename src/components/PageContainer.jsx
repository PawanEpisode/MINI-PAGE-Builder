// src/components/PageContainer.js
import React, { useEffect, useRef, useState } from 'react';
import CustomModal from './CustomModal';
import useClickOutside from '../hooks/useClickOutside';

const PageContainer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [config, setConfig] = useState({ x: 0, y: 0, text: '',fontSize: 0, fontWeight: 0 });
    const [elements, setElements] = useState([]);
    const [currentElement, setCurrentElement] = useState(null);

    const outsideRef = useRef();

    useEffect(() => {
        // Load data from local storage on component mount
        const savedElements = JSON.parse(localStorage.getItem('pageElements')) || [];
        setElements(savedElements);
    }, []);

    const handleDrop = (event) => {
        event.preventDefault();
        const {type, data} = JSON.parse(event.dataTransfer.getData('text/plain'));

        // Get mouse coordinates
        const mouseX = event.clientX;
        const mouseY = event.clientY-30;

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
            saveToLocalStorage(updatedElements);
        }
    };

    const allowDrop = (event) => {
        event.preventDefault();
    };

    const saveChanges = (newConfig) => {
        // Save the new element configuration
        const index = [...elements].findIndex(item => item.id === newConfig.id);

        if(index < 0) {
            const updatedElements = [...elements, {...newConfig}];
            setElements(updatedElements);
            saveToLocalStorage(updatedElements);
        } else {
            const tempElements = [...elements];
            tempElements[index] = {...newConfig};
            setElements(tempElements);
            saveToLocalStorage(tempElements);
        }
    };

    const handleDragStart = (event, id) => {
        event.dataTransfer.setData('text/plain',JSON.stringify({type: 'element', data: id}));
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleElementClick = (ID) => {
        setCurrentElement(ID);
    }

    const handleCurrentElement = () => {
        setCurrentElement(null);
    }

    const handleKey = (event) => {
        if(currentElement !== null) {
            if(event.key === 'Enter') {
                const selectedElement = elements.findIndex(item => item.id === currentElement);
                setConfig({...elements[selectedElement]});
                setIsModalOpen(true);
            }
    
            if (event.key === 'Delete') {
                const updatedElements = elements.filter(element => element.id !== currentElement);
                setElements(updatedElements);
                setCurrentElement(null);
                saveToLocalStorage(updatedElements);
            }
        }
    }

    // Add this function to save elements to local storage
    const saveToLocalStorage = (updatedElements) => {
        localStorage.setItem('pageElements', JSON.stringify(updatedElements));
    };

    const getElementByText = (element) => {
        let content;
        switch(element.text) {
            case 'Label':
                content = <p
                style={{ fontSize: element.fontSize || 20, fontWeight: element.fontWeight || 300 }}
                >{element.text}</p>;
                break;
            case 'Input':
                content = <input
                autoFocus
                className='w-32 outline-none px-3 cursor-grab'
                style={{ border: '1px solid rgba(0, 0, 0, 0.07)', fontSize: element.fontSize || 20, fontWeight: element.fontWeight || 300 }}
                />
                break;
            case 'Button':
                content = <button
                className='text-white bg-[#0044C1] p-3 cursor-grab'
                style={{ fontSize: element.fontSize || 20, fontWeight: element.fontWeight || 300 }}
                >{element.text}</button>;
                break;
        }
        return content;
    }

    useClickOutside(outsideRef, handleCurrentElement);

// console.log('drag', config, elements);
    return (
        <div
        className="bg-[#F3F3F3] h-full w-full relative"
        onDragEnter={allowDrop}
        onDrop={handleDrop}
        onDragOver={allowDrop}
        onKeyDown={handleKey}
        tabIndex="0"
        >
            {elements.map((element, index) => (
            <div
                ref={outsideRef}
                key={element.id}
                className={`absolute cursor-grab ${currentElement && currentElement === element.id ? 'selected': ''} hover:border-2 hover:border-[#D95409]`}
                style={{ left: Number(element.x), top: Number(element.y), fontSize: element.fontSize || 20, fontWeight: element.fontWeight || 300 }}
                draggable
                onDragStart={(event) => handleDragStart(event, element.id)}
                onDragOver={handleDragOver}
                onClick={()=> handleElementClick(element?.id)}
            >
                {getElementByText(element)}
            </div>
        ))}
        <CustomModal config={config} onSave={saveChanges} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default PageContainer;
