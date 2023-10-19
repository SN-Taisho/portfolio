import { useEffect } from "react";
import BackHome from "../components/BackHome";
import BackToTop from "../components/BackToTop";

// VARIABLES
const title = "ABC Car Portal";
const desc =
    "ABC Car Portal is a used-car sales website, it allows users to create an account and post their car on the platform for sale. Other users are able to book the car for a test drive or place a bid. Administrators on the website take charge in approving bids and booking dates for cars on the platform. (They are also able to manage the cars and users on the platform)";

const imageLink = "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958308/ABC%20Car%20Portal/Home_ynbias.png";

const tags = [
        "Spring Boot", "Spring Security", "Java", "MySQL"
]

const projectDetails = [
    {
        title: "Responsive Design",
        desc: "The Car Portal maintains a consistent itnerface on different screen sizes.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958310/ABC%20Car%20Portal/Responsive_rnolt1.gif",
    },
    {
        title: "Login with Spring Security",
        desc: "Login functionality is implemented using Spring Security with authroization for the two users on the platform: Users and Administrators.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958308/ABC%20Car%20Portal/Home_ynbias.png"
    },
    {
        title: "Password Encryption",
        desc: "Passwords of users are automatically encrypted and hidden from Administrators.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958308/ABC%20Car%20Portal/Passwords_lb5bee.png"
    },
    {
        title: "Post Car",
        desc: "Users are able to create car posts on the website where other users will be able to place bids or book them for test drives.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958309/ABC%20Car%20Portal/Sell_Modal_rxv3sp.png"
    },
    {
        title: "Post Success message",
        desc: "Users will see a notification that their car has been successfully posted on the website.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958309/ABC%20Car%20Portal/Post_Success_vanmwx.png"
    },
    {
        title: "View Car Details",
        desc: "After clicking on the success message or clicking the view car details button, the users will be able to view the details of the car and place bids or book dates.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958308/ABC%20Car%20Portal/Car_Details_cvr6te.png"
    },
    {
        title: "Car Search",
        desc: "Search functionality for finding cars using thier details",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958309/ABC%20Car%20Portal/Search_aboevg.png"
    },
    {
        title: "User Profile",
        desc: "Users can change their profile information and view their placed bids and book dates.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958309/ABC%20Car%20Portal/Profile_xuduuk.png"
    },
    {
        title: "Post and Book History",
        desc: "Users can manage and view their posted cars and book dates.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958307/ABC%20Car%20Portal/Book_List_tfrgvg.png"
    },
    {
        title: "Admin Dashboard",
        desc: "Admins can also see the cars listed and search for specific cars, however, they have special links that only Admins are able to access.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958308/ABC%20Car%20Portal/Admin_Dashboard_cwqncm.png"
    },
    {
        title: "Car Post Management",
        desc: "Admins are able to manipulate car posts along with the bids and bookings.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958307/ABC%20Car%20Portal/Car_CRUD_osumgf.png"
    },
    {
        title: "User Management",
        desc: "Admins are allowed to manage the users and their information except their passwords. They can also assign roles to accounts on the website (User/Admin).",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692958310/ABC%20Car%20Portal/User_CRUD_wnovdz.png"
    }
];

export default function ABCCarPortal() {
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