// IIMAGES
import Logo from "../assets/images/Logo.png";
import LinkedIn from "../assets/icons/linkedin-icon.png";
import Github from "../assets/icons/github-icon.png";
import Instagram from "../assets/icons/instagram-icon.png";
import Menu from "../assets/icons/menu-icon.png";

// Components
import SideNav from "./SideNav";

export default function Header() {

    // TOGGLE SIDE NAV
    const toggleSideNav = () => {
        let sideNav = document.getElementById("side-nav");
        let sideNavBtn = document.getElementById("side-nav-btn");
        sideNav.classList.toggle("opened");
        sideNavBtn.classList.toggle("opened");
    };

    window.addEventListener("resize", () => {
        try {
            let sideNav = document.getElementById("side-nav");
        if (window.innerWidth > 600) {
            sideNav.classList.remove("opened");
        }
        } catch (error) {
            
        }
    });

    document.onclick = function (e) {
        try {
            let sideNav = document.getElementById("side-nav");
        let sideNavBtn = document.getElementById("side-nav-btn");
        if (!sideNav.contains(e.target) && !sideNavBtn.contains(e.target)) {
            sideNav.classList.remove("opened");
        }
        } catch (error) {
            
        }
    };

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

    const emailClick = () => {
        window.location.href = "mailto:anzelsakamoto@gmail.com";
    };

    return (
        <>
            <header>
                <div className="width-limiter align-center justify-evenly">
                    <a id="logo-text" className="align-center" href="/zeru-sakamoto.dev/">
                        <img src={Logo} alt="Logo" width={60} />
                        <h1>Zeru</h1>
                    </a>

                    <div id="nav-links" className="align-center">
                        <ul id="section-links" className="align-center">
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
                    </div>

                    <ul id="social-links" className="align-center">
                        <li>
                            <a id="linkedIn" href="https://www.linkedin.com/in/anzel-ken-sakamoto-2437bb250" title="LinkedIn">
                                <img src={LinkedIn} alt="LinkedIn Icon" width={25} height={25} />
                            </a>
                        </li>
                        <li>
                            <a id="github" href="https://github.com/SN-Taisho" title="Github">
                                <img src={Github} alt="LinkedIn Icon" width={25} height={25} />
                            </a>
                        </li>
                        <li>
                            <a id="instagram" href="https://www.instagram.com/sn.taisho/" title="Instagram">
                                <img src={Instagram} alt="LinkedIn Icon" width={25} height={25} />
                            </a>
                        </li>
                        <li>
                            {" "}
                            <button id="lets-talk" className="btnPress" onClick={emailClick}>
                                Let's Talk
                            </button>
                        </li>
                    </ul>

                    <button id="side-nav-btn" onClick={toggleSideNav}>
                        <img src={Menu} alt="Menu" width={40}
                         height={40}/>
                    </button>
                </div>
            </header>
            <SideNav />
        </>
    );
}