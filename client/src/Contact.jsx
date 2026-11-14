import React , {useState} from "react";
import { useEffect } from "react";
function Contact(){
   useEffect(() => {
    const elements = document.querySelectorAll(".contact-us li");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    elements.forEach((element, index) => {
        element.style.setProperty(
            "--delay",
            `${index * 200}ms`
        );

        observer.observe(element);
    });

    return () => observer.disconnect();

}, []);
    return(
<div className="contact-us">

    <div className="contacts">
        <h1>Contact Us</h1>

        <ul>
            <li>
                <h3>Email</h3>
                <h4>mmirfan2232@gmail.com</h4>
            </li>

            <li>
                <h3>Phone</h3>
                <h4>+447861904842</h4>
            </li>

            <li>
                <h3>Public Profiles</h3>
                <ul>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                    <li>Facebook</li>
                </ul>
            </li>
        </ul>
    </div>

    <div className="projects">
        <h1>Projects</h1>

        <ul>
            <li>
                <h3>To-Do-App</h3>
                <h4>Complete working frontend and backend To-Do app</h4>
            </li>

            <li>
                <h3>Landing Page</h3>
                <h4>Landing page for business ads currently running</h4>
            </li>

            <li>
                <h3>Expense-Tracker</h3>
                <h4>Expense tracker site with complete login using email and Google</h4>
            </li>
        </ul>
    </div>

</div>
    )
    
};
export default Contact;