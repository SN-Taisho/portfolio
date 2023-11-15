import ScrollAnimation from "react-animate-on-scroll";

export default function Skills() {
    const languages = [
        {
            Name: "HTML 5",
            Image: "skills/html5-logo.png",
        },
        {
            Name: "CSS 3",
            Image: "skills/css3-logo.png",
        },
        {
            Name: "JavaScript",
            Image: "skills/javascript-logo.png",
        },
        {
            Name: "Java",
            Image: "skills/java-logo.png",
        },
        {
            Name: "PHP",
            Image: "skills/php-logo.png",
        },
        {
            Name: "MySQL",
            Image: "skills/mysql-logo.png",
        },

    ];

    const frameworksAndAPIs = [
        {
            Name: "React JS",
            Image: "skills/react-js-logo.png",
        },
        {
            Name: "Spring Boot w/ Spring Security",
            Image: "skills/spring-boot-logo.png",
        },
        {
            Name: "PHP Laravel",
            Image: "skills/laravel-logo.png",
        },
        {
            Name: "Spring MVC",
            Image: "skills/spring-logo.png",
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
            Name: "Axure Prototyping",
            Image: "skills/axure-rp-logo.png"
        },
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

                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                <h3 className="skill-heading">Languages</h3>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
                    <div className="width-limiter">
                        {languages.map((skill, index) => (
                            <div className="skill-card" key={index}>
                                <img src={skill.Image} alt={skill.Image.replace("skills/", "")} width={200} />
                                <p>{skill.Name}</p>
                            </div>
                        ))}
                    </div>
                </ScrollAnimation>
                
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                <h3 className="skill-heading">Frameworks and APIs</h3>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
                    <div className="width-limiter">
                        {frameworksAndAPIs.map((skill, index) => (
                            <div className="skill-card" key={index}>
                                <img src={skill.Image} alt={skill.Image.replace("skills/", "")} width={200} />
                                <p>{skill.Name}</p>
                            </div>
                        ))}
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                <h3 className="skill-heading">Other Skills</h3>
                </ScrollAnimation>
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
