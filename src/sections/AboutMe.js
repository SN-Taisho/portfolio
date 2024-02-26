import Profile from "../assets/images/Profile.webp";
import Email from "../assets/icons/email-icon.png";
import Download from "../assets/icons/arrow-down-icon.png";

import ScrollAnimation from "react-animate-on-scroll";

export default function AboutMe() {
    const aboutMe = {
        Paragraph:
            "I'm Anzel Ken P. Sakamoto, a Software Engineering student studying at Lithan eduCLaaS, I have a passion for design, problem solving, learning new things and exploring new topics.",
    };

    const experienceList = [
        {
            Place: "Strike Academy",
            Title: "Software Apprentice",
            Duration: 4,
            DurationType: "Months",
            DateRange: "October 2023 - February 2024",
        },
        {
            Place: "Lithan EduCLaaS",
            Title: "Full-stack web development bootcamp",
            Duration: 1,
            DurationType: "Year",
            DateRange: "2022 - 2023",
        },
    ];

    const downloadClick = () => {
        window.location.href = "https://drive.google.com/u/7/uc?id=1-70GrGUtZVFpdsoN2z_XHj3ST4h9fupL&export=download";
    };

    const emailClick = () => {
        window.location.href = "mailto:anzelsakamoto@gmail.com";
    };
    return (
        <section id="about-me">
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                <span className="span-title">&lt;Get To Know Me /&gt;</span>
                <h2 className="section-heading">About Me</h2>
            </ScrollAnimation>

            <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
                <div className="width-limiter">
                    <div id="about-left">
                        <div className="image-wrapper">
                            <img src={Profile} alt="Me" width={450} height={450} />
                        </div>

                        <div className="float-container">
                            <div className="pseudo"></div>
                        </div>

                        <button id="send-email" onClick={emailClick}>
                            Send an Email
                            <img src={Email} alt="Email Icon" width={32} />
                        </button>

                        <button id="download-cv" onClick={downloadClick}>
                            <div className="text">Download CV</div>
                            <img src={Download} alt="Download Icon" />
                        </button>
                    </div>

                    <div id="about-right">
                        <p className="paragraph">{aboutMe.Paragraph}</p>

                        <h3 className="section-subheading">Contact Me</h3>
                        <ul className="section-list">
                            <li id="contact-email">anzelsakamoto<wbr/>@gmail.com</li>
                        </ul>

                        <h3 className="section-subheading">Language Proficiency</h3>
                        <ul className="section-list cap">
                            <li>English</li>
                            <li>Filipino</li>
                        </ul>

                        <h3 className="section-subheading">Experience</h3>
                        <div className="mini-card-container">
                            {experienceList.map((exp, index) => (
                                <div className="mini-card" key={index}>
                                    <h4>{exp.Place}</h4>
                                    <p>{exp.Title}</p>
                                    <span>
                                        {exp.Duration} {exp.DurationType}
                                    </span>
                                    <p>{exp.DateRange}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    );
}
