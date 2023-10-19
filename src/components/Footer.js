import Logo from "../assets/images/Logo.png";

import Copyright from "../assets/icons/copyright-icon.png";
import Linkedin from "../assets/icons/linkedin-icon.png";
import Github from "../assets/icons/github-icon.png";
import Instagram from "../assets/icons/instagram-icon.png";

import ArrowUp from "../assets/icons/arrow-up-icon.png";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer>
            <div id="footer-top">
                <div className="width-limiter">
                    <div className="bible-verse">
                        <div className="flex">
                            <img src={Logo} alt="Logo" width={32} />
                            <h3 className="footer-subheader" style={{ marginLeft: 16 }}>
                                John 3:16
                            </h3>
                        </div>
                        <p className="verse-parag">
                            "For God so loved the world that he gave his one and only Son, that whoever believes in him
                            shall not perish but have eternal life."
                        </p>
                    </div>

                    <div className="footer-subcont-container">
                        <div className="footer-subcont">
                            <h3 className="footer-subheader">Quick Links</h3>
                            <button>About Me</button>
                            <button>Contact Info</button>
                            <button>My Skills</button>
                            <button>My Projects</button>
                        </div>

                        <div className="message-form-container">
                            <h3 className="footer-subheader">Send A Message</h3>
                            <form className="message-form">
                                <input className="input" type="text" placeholder="Subject" required />
                                <textarea className="input" placeholder="Body" rows="7" required></textarea>
                                <button type="submit" className="message-submit">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer-bot">
                <div className="width-limiter">
                    <div id="copyright" className="align-center">
                        <img src={Copyright} alt="Copyright Symbol" width={16} height={16} />
                        <p style={{ marginLeft: "10px" }}>
                            {" "}
                            2023&nbsp;<span className="extension">All rights reserved.</span>
                        </p>
                    </div>

                    <div className="foot-socials">
                        <a href="https://www.linkedin.com/in/anzel-ken-sakamoto-2437bb250" title="LinkedIn">
                            <img src={Linkedin} alt="LinkedIn Icon" />
                        </a>
                        <a href="https://github.com/SN-Taisho" title="Github">
                            <img src={Github} alt="Github Icon" />
                        </a>
                        <a href="https://www.instagram.com/sn.taisho/" title="Instagram">
                            <img src={Instagram} alt="Instagram Icon" />
                        </a>
                        <button onClick={scrollToTop} title="Back To Top">
                            <img src={ArrowUp} alt="Up" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}