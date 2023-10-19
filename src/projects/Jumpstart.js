import { useEffect } from "react";
import BackHome from "../components/BackHome";
import BackToTop from "../components/BackToTop";

// VARIABLES
const title = "Jumpstart";
const desc =
    "Jumpstart is an ecommerce platform that sells enthusiast grade products consisting of premium computer accessories. Users are able to purchase products from the website, while staff members manage the orders and administrators manage the users but also have access to staff permissions.";

const imageLink = "https://res.cloudinary.com/zeru-taisho/image/upload/v1696154263/Jumppstart/Home_hvkaie.png";

const tags = [
        "Spring Boot", "Paypal API", "Java Mail", "MySQL"
]

const projectDetails = [
    {
        title: "Responsive Design",
        desc: "The Jumpstart website can adjust to different screen sizes ranging from desktop all the way to mobile.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1696154263/Jumppstart/Responsive_djslxq.gif",
    },
    {
        title: "Registration with email confirmation",
        desc: "Users will be required to confirm their email address with an OTP code before they can login with their registered credentials.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1696224136/Jumppstart/Registration_pahyvr.gif",
    },
    {
        title: "Forgot Password",
        desc: "Users are able to request to change their password and an email will be sent containing a One-Time-Pin code to verify their identity",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1696224274/Jumppstart/Forgot-password_ff70dw.gif",
    },
    {
        title: "Products Page with Categories (User View)",
        desc: "Cards of Jumpstart products with dynamic categories.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1696224964/Jumppstart/Products_n8wmuw.gif",
    },
    {
        title: "Edit Products (Staff)   ",
        desc: "Staff members are able to view or delete products from the website",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1696224964/Jumppstart/Edit-product_fuvoa8.gif",
    },
    {
        title: "Edit Cagegory (Staff)   ",
        desc: "Staff memebrs can edit information about categories.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1696225392/Jumppstart/Edit-category_s43a47.gif",
    },
    {
        title: "Filtered Search",
        desc: "All user types are able to access the filtered search function on Jumpstart",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1696225392/Jumppstart/Search-with-filter_ehxhkj.gif",
    },
    {
        title: "Cart",
        desc: "Users are able to add items to their cart, and edit the amount or remove an item. This page also displays the total price of the items in the cart",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1696154261/Jumppstart/Cart_wywvxw.png",
    },
    {
        title: "Checkout",
        desc: "Users are shown a summary of their purchase and get to select which method they would prefer; delivery or in-store pickup. Their payment is handled by the Paypal API",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1696226271/Jumppstart/Checkout_bxubqq.gif",
    },
    {
        title: "Delivery / Pickup Confirmation",
        desc: "Staff members are able to confirm purchases of users on delivery or on pickup.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1696226270/Jumppstart/Pickup-confirmation_lsoqrk.gif",
    },
    {
        title: "Purchase History",
        desc: "Users can view their completed purchases and search for its details.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1696154262/Jumppstart/Product_History_with_Search_yosnrb.png",
    },
    {
        title: "User Management",
        desc: "Administrators are able to view, edit, assign user roles, or delete users from the website.",
        imageLink: "https://res.cloudinary.com/zeru-taisho/image/upload/v1696226272/Jumppstart/User-management_np2lm5.gif",
    }
];

export default function Jumpstart() {
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