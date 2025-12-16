import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

import { Navbar, Welcome, React, Dock} from "#components";
import {Terminal} from "#windows";


const App = () => {
    return (
       <main>
        <Navbar />
        <Welcome />                                     
        <Dock />

        <Terminal />
        </main>
    );
}
export default App;