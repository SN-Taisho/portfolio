import Profile from "../assets/images/Profile2-Alt.png";
import Email from "../assets/icons/email-icon.png";
import Download from "../assets/icons/arrow-down-icon.png";

import ScrollAnimation from "react-animate-on-scroll";

export default function AboutMe() {
    const aboutMe = {
        Paragraph:
            "I'm Anzel Ken P. Sakamoto, a Software Engineering student studying at Lithan eduCLaaS, I have a passion for design, problem solving, learning new things and exploring new topics or challenges.",
    };

    const experienceList = [
        {
            Place: "Lithan EduCLaaS",
            Title: "Full-stack web development bootcamp",
            Duration: 1,
            Dates: "2022 - 2023",
        },
    ];

    const experiencesList = experienceList.map((exp, index) => {
        return (
            <div className="mini-card" key={index}>
                <h4>{exp.Place}</h4>
                <p>{exp.Title}</p>
                <span>
                    {exp.Duration} {exp.Duration > 1 ? "Years" : " Year"}
                </span>
                <p>{exp.Dates}</p>
            </div>
        );
    });

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

                        <button id="send-email">
                            Send an Email
                            <img src={Email} alt="Email Icon" width={32} />
                        </button>

                        <button id="download-cv">
                            <div className="text">Download CV</div>
                            <img src={Download} alt="Download Icon" />
                        </button>
                    </div>

                    <div id="about-right">
                        <p className="paragraph">{aboutMe.Paragraph}</p>

                        <h3 className="section-subheading">Contact Me</h3>
                        <ul className="section-list">
                            <li id="contact-email">anzelsakamoto@gmail.com</li>
                        </ul>

                        <h3 className="section-subheading">Language Proficiency</h3>
                        <ul className="section-list cap">
                            <li>English</li>
                            <li>Filipino</li>
                        </ul>

                        <h3 className="section-subheading">Experience</h3>
                        <div className="mini-card-container">{experiencesList}</div>
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    );
}
