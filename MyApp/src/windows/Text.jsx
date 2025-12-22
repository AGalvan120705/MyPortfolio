import React from 'react';
import useWindowStore from "#store/window";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const {name, image, subtitle, description} = data;

    return (
        <>
            <div id="window-header" className="shrink-0">
                <WindowControls target="txtfile" />
                <h2> {name}</h2>
            </div>

            <div className="p-5 pb-15 space-y-6 bg-white overflow-y-auto flex-1 min-h-0 max-h-full">
                {image ? (
                    <div className="w-full">
                        <img src={image} alt={name} className="mb-4 max-w-full h-auto" /> 
                    </div>
                ) : null}
                {subtitle && <h2 className="text-lg font-semibold">{subtitle}</h2>}
                {description && description.map((para, i) => (
                    <p key={i} className="space-y-3 leading-relaxed text-base text-gray-800">{para}</p>
                ))}
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;