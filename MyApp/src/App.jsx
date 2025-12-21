import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

import { Navbar, Welcome, React, Dock} from "#components";
import {Terminal, Safari, Resume} from "#windows";


const App = () => {
    return (
       <main>
        <Navbar />
        <Welcome />                                     
        <Dock />

        <Terminal />
        <Safari />
        <Resume />
        </main>
    );
}
export default App;