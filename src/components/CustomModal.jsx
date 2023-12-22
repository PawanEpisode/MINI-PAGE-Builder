import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1000
}

const MODAL_STYLES = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    zIndex: 1000
}

const CustomModal = ({ config, open,onSave, onClose }) => {
    const [configData, setConfigData] = useState({})

    useEffect(() => {
        setConfigData({...config});
    },[config])

    const handleSave = () => {

        if('id' in configData) {
            onSave({ ...configData});
        } else {
            onSave({ ...configData, id: Date.now() + Math.random()*2 });
        }
        onClose();
    };

    const handleConfigData = (event, elementType) => {
        switch (elementType) {
            case 'elementText':
                setConfigData({...configData, text: event.target.value});
                break;
            case 'elementX':
                setConfigData({...configData, x: event.target.value.replace(/\D/g, '')});
                break;
            case 'elementY':
                setConfigData({...configData, y: event.target.value.replace(/\D/g, '')});
                break;
            case 'elementFontSize':
                setConfigData({...configData, fontSize: event.target.value.replace(/\D/g, '')});
                break;
            case 'elementFontWeight':
                setConfigData({...configData, fontWeight: event.target.value.replace(/\D/g, '')});
                break;
            default:
                setConfigData({...configData});
                break;
        }
    }

    const handleClose = () => {
        setConfigData({ x: 0, y: 0, text: '',fontSize: 0, fontWeight: 0 })
        onClose();
    }
    if (!open) return null;

    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES} onClick={handleClose} />
            <div style={MODAL_STYLES} className="flex w-[400px] 
            flex-col gap-6 rounded-md text-[#262626] 
            text-sm font-normal">
                <div className="w-full flex flex-col justify-start">
                    <div className="flex justify-between px-5 mt-5 items-center text-xl text-[#000]">
                        <h2 className="font-semibold">
                            Edit {config ? `${config?.text}` : "Modal"}
                        </h2>
                        <span className="opacity-50 font-normal cursor-pointer" 
                        onClick={handleClose}>
                            &times;
                        </span>
                    </div>
                    <div className="w-full h-[2px] opacity-10 bg-black"/>
                </div>
                <div className="flex px-5 gap-1 flex-col">
                    <label htmlFor="elementText">Text</label>
                    <input
                        className="border-2 rounded-sm p-2 
                        border-[#D9D9D9] outline-none"
                        type="text"
                        id="elementText"
                        value={configData?.text}
                        onChange={(e) => handleConfigData(e, "elementText")}
                    />
                </div>
                <div className="flex px-5 gap-1 flex-col">
                    <label htmlFor="elementX">X</label>
                    <input
                        className="border-2 rounded-sm p-2 
                        border-[#D9D9D9] outline-none"
                        type="number"
                        id="elementX"
                        value={configData?.x}
                        onChange={(e) => handleConfigData(e, "elementX")}
                    />
                </div>
                <div className="flex px-5 gap-1 flex-col">
                    <label htmlFor="elementY">Y</label>
                    <input
                        className="border-2 rounded-sm p-2 
                        border-[#D9D9D9] outline-none"
                        type="number"
                        id="elementY"
                        value={configData?.y}
                        onChange={(e) => handleConfigData(e, "elementY")}
                    />
                </div>
                <div className="flex px-5 gap-1 flex-col">
                    <label htmlFor="elementFontSize">Font Size ( pixel )</label>
                    <input
                        className="border-2 rounded-sm p-2 
                        border-[#D9D9D9] outline-none"
                        type="number"
                        id="elementFontSize"
                        value={configData?.fontSize}
                        onChange={(e) => handleConfigData(e, "elementFontSize")}
                    />
                </div>
                <div className="flex px-5 gap-1 flex-col">
                    <label htmlFor="elementFontWeight">Font Weight ( multiple of 100 )</label>
                    <input
                        className="border-2 rounded-sm p-2 
                        border-[#D9D9D9] outline-none"
                        type="number"
                        id="elementFontWeight"
                        value={configData?.fontWeight}
                        onChange={(e) => handleConfigData(e, "elementFontWeight")}
                    />
                </div>
                <div className="flex px-5 mb-5 justify-start">
                    <button 
                        className="bg-[#0044C1] text-white rounded-sm py-2 px-4"
                        onClick={handleSave}
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </>,
        document.getElementById("portal")
    );
};

export default CustomModal;
