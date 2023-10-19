import ScrollAnimation from "react-animate-on-scroll";

export default function Skills() {
    const frontEndSkills = [
        {
            Name: "HTML",
            Image: "skills/html5-logo.png",
        },
        {
            Name: "CSS",
            Image: "skills/css3-logo.png",
        },
        {
            Name: "JavaScript",
            Image: "skills/javascript-logo.png",
        },
        {
            Name: "React JS",
            Image: "skills/react-js-logo.png",
        },
    ];

    const backEndSkills = [
        {
            Name: "MySQL",
            Image: "skills/mysql-logo.png",
        },
        {
            Name: "Spring MVC",
            Image: "skills/spring-logo.png",
        },
        {
            Name: "Spring Boot w/ Spring Security",
            Image: "skills/spring-boot-logo.png",
        },
        {
            Name: "REST API",
            Image: "skills/rest-api-logo.png",
        },
        {
            Name: "Paypal Rest API",
            Image: "skills/paypal-logo.png",
        },
    ];

    const otherSkills = [
        {
            Name: "Figma Design",
            Image: "skills/figma-logo.png",
        },
        {
            Name: "Pixel Art",
            Image: "skills/aseprite-logo.png",
        },
    ];

    return (
        <>
            <div className="skills-divider">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                </svg>
            </div>

            <section id="skills">
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                    <span className="span-title">&lt;What I can offer /&gt;</span>
                    <h2 className="section-heading">Skills</h2>
                </ScrollAnimation>

                <h3 className="skill-heading">Front-End-Development</h3>
                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
                    <div className="width-limiter">
                        {frontEndSkills.map((skill, index) => (
                            <div className="skill-card" key={index}>
                                <img src={skill.Image} alt={skill.Image.replace("skills/", "")} width={200} />
                                <p>{skill.Name}</p>
                            </div>
                        ))}
                    </div>
                </ScrollAnimation>

                <h3 className="skill-heading">Back-End-Development</h3>
                <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
                    <div className="width-limiter">
                        {backEndSkills.map((skill, index) => (
                            <div className="skill-card" key={index}>
                                <img src={skill.Image} alt={skill.Image.replace("skills/", "")} width={200} />
                                <p>{skill.Name}</p>
                            </div>
                        ))}
                    </div>
                </ScrollAnimation>

                <h3 className="skill-heading">Other Skills</h3>
                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
                    <div className="width-limiter">
                        {otherSkills.map((skill, index) => (
                            <div className="skill-card" key={index}>
                                <img src={skill.Image} alt={skill.Image.replace("skills/", "")} width={200} />
                                <p>{skill.Name}</p>
                            </div>
                        ))}
                    </div>
                </ScrollAnimation>
            </section>
        </>
    );
}
