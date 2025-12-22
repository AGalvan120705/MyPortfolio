import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

import React from 'react';
import { Navbar, Welcome, Dock, Home} from "#components";
import {Terminal, Safari, Resume, Finder, Text, Image, Contact} from "#windows";


const App = () => {
    return (
       <main>
        <Navbar />
        <Welcome />                                     
        <Dock />
        <Home />

        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <Image />
        <Contact />
        </main>
    );
}
export default App;