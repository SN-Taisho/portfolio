// IIMAGES
import Logo from "../assets/images/Logo.png";
import LinkedIn from "../assets/icons/linkedin-icon.png";
import Github from "../assets/icons/github-icon.png";
import Instagram from "../assets/icons/instagram-icon.png";

import Menu from "../assets/icons/menu-icon.png";

//  COMPONENTS
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
        let sideNav = document.getElementById("side-nav");
        if (window.innerWidth > 600) {
            sideNav.classList.remove("opened");
        }
    });

    document.onclick = function (e) {
        let sideNav = document.getElementById("side-nav");
        let sideNavBtn = document.getElementById("side-nav-btn");
        if (!sideNav.contains(e.target) && !sideNavBtn.contains(e.target)) {
            sideNav.classList.remove("opened");
        }
    };

    return (
        <>
            <header>
                <div className="width-limiter align-center justify-evenly">
                    <a id="logo-text" className="align-center" href="/">
                        <img src={Logo} alt="Logo" width={60} />
                        <h1>Zeru</h1>
                    </a>

                    <div id="nav-links" className="align-center">
                        <ul id="section-links" className="align-center">
                            <li>
                                <button>About Me</button>
                            </li>
                            <li>
                                <button>Contact</button>
                            </li>
                            <li>
                                <button>Skills</button>
                            </li>
                            <li>
                                <button>Projects</button>
                            </li>
                        </ul>
                    </div>

                    <ul id="social-links" className="align-center">
                        <li>
                            <a id="linkedIn" href="/linkedin" title="LinkedIn">
                                <img src={LinkedIn} alt="LinkedIn Icon" width={25} height={25} />
                            </a>
                        </li>
                        <li>
                            <a id="github" href="/github" title="Github">
                                <img src={Github} alt="LinkedIn Icon" width={25} height={25} />
                            </a>
                        </li>
                        <li>
                            <a id="instagram" href="/instagram" title="Instagram">
                                <img src={Instagram} alt="LinkedIn Icon" width={25} height={25} />
                            </a>
                        </li>
                        <li>
                            {" "}
                            <button id="lets-talk" className="btnPress">
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