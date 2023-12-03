import { useEffect } from "react";
import BackHome from "../components/BackHome";
import BackToTop from "../components/BackToTop";

// VARIABLES
const title = "ABC Job Portal";
const desc =
    "ABC Job Portal is a job-hunting website similiar to Linkedin, users of the website are able to edit their profile information, add experiences and educational backgrounds, and also post and reply to threads. Administrators on the website can also manage user information, send out bulk mails, create job posts and manage the users' responses. The website was built using Spring Boot and uses MySQL for the database.";

const imageLink = "https://res.cloudinary.com/zeru-taisho/image/upload/v1692957370/ABC%20Job%20Portal%20%28Spring%20Boot%29/Landing_fgbfyi.png";

const tags = [
        "Spring Boot", "Spring Security", "Java Mail", "MySQL"
]

const projectDetails = [
    {
        title: "Responsive Design",
        desc: "The Job Portal maintains a consistent itnerface on different screen sizes.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692957372/ABC%20Job%20Portal%20%28Spring%20Boot%29/Responsive_qjp2lq.gif",
    },
    {
        title: "Dynamic Validation",
        desc: "Registration form makes use of dynamic validation for a better user experience during account creation.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692957371/ABC%20Job%20Portal%20%28Spring%20Boot%29/Registration_Validation_docuhw.gif",
    },
    {
        title: "Forgot Password",
        desc: "Users are able to request to change their password and an email will be sent containing a One-Time-Pin code to verify their identity",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692957370/ABC%20Job%20Portal%20%28Spring%20Boot%29/Forgot_Password_hck6xj.png",
    },
    {
        title: "One-Time-Pin Account Validation",
        desc: "Users will recieve an OTP to confirm their account registration and for requesting a password reset.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692957372/ABC%20Job%20Portal%20%28Spring%20Boot%29/OTP_Validation_zprwch.gif",
    },
    {
        title: "Password Match Validation",
        desc: "The form highlight color will change depending if the password is valid or not.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692957372/ABC%20Job%20Portal%20%28Spring%20Boot%29/Reset_Password_Validation_z2uof2.gif",
    },
    {
        title: "Threads",
        desc: "Users are able to create, view and reply to threads posted onto the community portal. However, only the original poster is able to edit or delete the threads or replies.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692957373/ABC%20Job%20Portal%20%28Spring%20Boot%29/Threads_ucvhtd.png",
    },
    {
        title: "Job Posts",
        desc: "Admins on the community portal are able to create job posts wherein users can send responses applying for the job. Administrators are also able to edit the status of the user's application.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692957370/ABC%20Job%20Portal%20%28Spring%20Boot%29/JobPost_x9rnj2.png",
    },
    {
        title: "Search functionality",
        desc: "Search functionalty for finding threads, job posts, and users on the platform. The search bar is also protected from SQL injection.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692957373/ABC%20Job%20Portal%20%28Spring%20Boot%29/Thread_Search_gudaqu.png",
    },
    {
        title: "Education and Experience",
        desc: "The user's profile page contians information regarding their Experience and Education, of which they are able to create, edit, or delete.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692957371/ABC%20Job%20Portal%20%28Spring%20Boot%29/Profile_v9safv.png",
    },
    {
        title: "User's Threads",
        desc: "The user's profile page also contains a list of threads that they have posted.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692957372/ABC%20Job%20Portal%20%28Spring%20Boot%29/Profile_Thread_wj1kkj.png",
    },
    {
        title: "Bulk Mail",
        desc: "Administrators can send bulk mail to all users regisreted onto the community portal. The information regarding each email is saved in the site's mail history.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1692957371/ABC%20Job%20Portal%20%28Spring%20Boot%29/Bulk_Mail_cjsjun.png",
    },
];

export default function ABCJobPortal() {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    });

    return (
        <main id="project-details-container">
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