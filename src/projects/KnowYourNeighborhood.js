import { useEffect } from "react";
import BackHome from "../components/BackHome";
import BackToTop from "../components/BackToTop";

// VARIABLES
const title = "Know Your Neighborhood";
const desc =
    "Know Your Neighborhood, or KYN, is a community website that provides users with information about stores in their neighborhood. The project front-end is developed using React JS and connected to the back-end using Axios with a custom REST API. The site also features google, and facebook login capabilities to enhance the user experience.";

const imageLink = "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958801/Know%20Your%20Neighborhood/Home_n0qldd.png";

const tags = [
        "React JS", "Spring Boot", "REST API", "MySQL"
]

const projectDetails = [
    {
        title: "Responsive Design",
        desc: "The KYN website maintains a consistent itnerface on different screen sizes.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958802/Know%20Your%20Neighborhood/Responsive_ak9gbp.gif",
    },
    {
        title: "Dynamic Validation",
        desc: "Registration form makes use of dynamic validation for a better user experience during account creation.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958802/Know%20Your%20Neighborhood/Sign_Up_t5eeyl.png",
    },
    {
        title: "API Login",
        desc: "Google and Facebook login API's are integrated for faster account creation",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958801/Know%20Your%20Neighborhood/Login_uycler.png"
    },
    {
        title: "Facebook Login",
        desc: "Login using Facebook's Login API",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958800/Know%20Your%20Neighborhood/Facebook_Login_pe9ixh.png",
    },
    {
        title: "Google Login",
        desc: "Login using Google's Login API",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958801/Know%20Your%20Neighborhood/Google_Login_jjgnqt.png",
    },
    {
        title: "Stores listing",
        desc: "All Stores registered on the website",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958800/Know%20Your%20Neighborhood/Dashboard_gtvgpz.png",
    },
    {
        title: "Store details",
        desc: "Details of each store retrieved from a REST API back-end I created using Spring Boot",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958800/Know%20Your%20Neighborhood/Store_Details_ol1wi7.png",
    },
    {
        title: "Retrieved data from REST API",
        desc: "Details of each store retrieved from the REST API back-end",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958801/Know%20Your%20Neighborhood/Rest_API_c6pz6o.png",
    },
];

export default function KnowYourNeighborhood() {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    });

    return (
        <main id="projectDetailsContainer">
            <BackHome />

            <h3 className="project-heading">{title}</h3>
            {/* MAIN CONTENT */}
            <div className="project-details">
                <div className="text-container">
                    <ul className="project-tags align-center flex-wrap">
                        {tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>
                    <h4 className="project-subhead text-align-center">Introduction</h4>
                    <p className="project-intro">{desc}</p>
                </div>
                <div className="project-screenshot">
                    <img src={imageLink} alt="Project Screenshot" width={960} />
                </div>
            </div>

            {/* SUB CONTENT */}
            <h4 className="project-subhead text-align-center" style={{ margin: "1rem 1rem" }}>
                Features
            </h4>

            {projectDetails.map((detail, index) => (
                 <div className="details-background" key={index}>
                 <div className="project-details alt">
                     <div className="project-screenshot">
                         <img src={detail.imageLink} alt="Project Screenshot" width={960} />
                     </div>
                     <div className="text-container">
                         <h4 className="project-subhead">{detail.title}</h4>
                         <p>{detail.desc}</p>
                     </div>
                 </div>
             </div>
            ))}

            <BackToTop />

            <div id="projectPageFooter"></div>
        </main>
    );
}