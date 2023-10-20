import React, { useState, useEffect } from "react";

import ChevronUp from "../assets/icons/chevron-up-icon.png";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            const triggerDistance = 500;

            if (scrollPos > triggerDistance) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button id="back-to-top" onClick={scrollToTop} className={`scroll-appear-element ${isVisible ? "visible" : ""}`}>
            <img id="arrow-up" src={ChevronUp} alt="Chevron Up" height={16}/>
            <p>Back to Top</p>
        </button>
    );
};

export default BackToTop;
