import ArrowRight from "../assets/icons/arrow-right-icon.png";
import Profile2 from "../assets/images/Profile2.png";

import React, { useState, useEffect } from "react";

export default function Landing() {
    const scrollToProjects = () => {
        document.getElementById("recent-projects").scrollIntoView({ behavior: "smooth" });
    };

    const [text, setText] = useState("Full-Stack Developer");

    useEffect(() => {
        const updateText = () => {
            const width = window.innerWidth;
            setText(width < 350 ? "Full-Stack Dev" : "Full-Stack Developer");
        };

        updateText();
        window.addEventListener("resize", updateText);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener("resize", updateText);
    }, []);

    return (
        <section id="landing">
            <div className="width-limiter">
                <div id="landing-content" className="animate__animated animate__fadeInLeft">
                    <span className="span-title-landing">&lt;Simple, Yet Expressive /&gt;</span>
                    <h1>{text}</h1>
                    <p className="paragraph">
                        Hello, I'm Anzel Sakamoto a Full-Stack Developer specializing in UI/UX Design.
                    </p>
                    <button id="projects-button" onClick={scrollToProjects}>
                        VIew Projects
                        <div className="icon">
                            <img src={ArrowRight} alt="Right" />
                        </div>
                    </button>
                </div>

                <div className="image-wrapper animate__animated animate__fadeInRight">
                    <img src={Profile2} alt="Shiroko" />
                </div>
            </div>
            <div className="landing-divider">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
}
