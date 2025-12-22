import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import { socials } from '#constants';

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img src="/images/about-me.png" alt="Anna" className="w-20 mx-auto rounded-full"/>

        <h3> Let's Connect!</h3>

        <p>
          I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in tech! Want to discuss a project, or just want to say hi, feel free to reach out.
        </p>

        <ul>
            {socials.map(({id, bg, link, icon, text}) => (
                <li key={id} style={{backgroundColor: bg}}>
                    <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                        <img src={icon} alt={text} className="size-5" />
                        <p> {text}</p>
                    </a>
                </li>
            ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;