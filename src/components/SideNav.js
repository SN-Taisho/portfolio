export default function SideNav() {

    const scrollToAboutMe = () => {
        document.getElementById("about-me").scrollIntoView({behavior: "smooth"});
    }
    const scrollToContact = () => {
        document.getElementById("about-right").scrollIntoView({behavior: "smooth"});
        setTimeout(function() {
            document.getElementById("contact-email").classList.add("animate__animated", "animate__headShake");
        }, 1300);
        document.getElementById("contact-email").classList.remove("animate__animated", "animate__headShake");
    }
    const scrollToSkills= () => {
        document.getElementById("skills").scrollIntoView({behavior: "smooth"});
    }
    const scrollToProjects = () => {
        document.getElementById("recent-projects").scrollIntoView({behavior: "smooth"});
    }

    return (
            <nav id="side-nav">
                <ul id="section-links" className="align-center flex-col">
                        <li>
                            <button onClick={scrollToAboutMe}>About Me</button>
                        </li>
                        <li>
                            <button onClick={scrollToContact}>Contact</button>
                        </li>
                        <li>
                            <button onClick={scrollToSkills}>Skills</button>
                        </li>
                        <li>
                            <button onClick={scrollToProjects}>Projects</button>
                        </li>
                    </ul>
            </nav>
        )
}