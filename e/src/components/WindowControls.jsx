import useWindowStore from '#store/window';
import React from 'react'

const WindowControls = ({target}) => {
  const {closeWindow} = useWindowStore();
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)}/>
      <div className="minimize"/> //todo: implement minimize functionality
      <div className="maximize"/> //todo: implement maximize functionality

      </div>
  );
};

export default WindowControls;
