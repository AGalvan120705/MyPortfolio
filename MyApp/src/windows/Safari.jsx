import WindowControls from "#components/WindowControls";
import React from 'react'
import WindowWrapper from '#hoc/windowWrapper.jsx';
import { Copy, PanelLeft } from "lucide-react";
import { Plus, Search, Share, ShieldHalf,   ChevronLeft, ChevronRight } from "lucide-react";

const Safari = () => {
  return (
    <>
        <div id = "window-header">
        <WindowControls  target="safari" />

        <PanelLeft className ="ml-10 icon" />

        <div className = "flex items-center gap-1 ml-5">
            <ChevronLeft className ="icon" />
            <ChevronRight className ="icon" />
        </div>

        <div className ="flex-1 flex-center gap-3">
            <ShieldHalf className ="icon"/>

            <div className="search" >
                <Search className ="icon"/>

                <input
                    type="text"
                    placeholder = "Search or enter website name"
                    className="flex-1"
                />
            </div>
        </div>

        <div className = "flex items-center gap-5">
            <Share className ="icon" />
            <Plus className ="icon" />
            <Copy className ="icon" />
            
            </div>
        </div>
    </>
  );
};


const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;