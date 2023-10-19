import Profile from '../assets/images/Profile2.png'
import ArrowRight from '../assets/icons/arrow-right-icon.png';

export default function Landing() {

    const scrollToProjects = () => {
        document.getElementById("recent-projects").scrollIntoView({behavior: "smooth"});
    }

    return (
        <section id="landing">
            <div className="width-limiter">

                <div id="landing-content" className='animate__animated animate__fadeInLeft'>
                    <span className="span-title-landing">&lt;Simple, Yet Expressive /&gt;</span>
                    <h1>Full-Stack Developer</h1>
                    <p className="paragraph">Hello, I'm Anzel Sakamoto a full-stack developer with a passion for design.</p>
                    <button id="projects-button" onClick={scrollToProjects}>
                        VIew Projects
                        <div className="icon">
                            <img src={ArrowRight} alt="Right" />
                        </div>
                    </button>
                </div>

                <div className="image-wrapper animate__animated animate__fadeInRight">
                    <img src={Profile} alt="Me" />
                </div>
            </div>
            <div className="landing-divider">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
}
