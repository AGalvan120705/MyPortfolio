import React from 'react';
import useWindowStore from "#store/window";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className="p-5 bg-white">
                <img src={imageUrl} alt={name} className="max-w-full h-auto" />
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;