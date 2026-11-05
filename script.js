// ===============================
// Anu PetCare & Veterinary Cleaning
// script.js
// ===============================

// Welcome Message
window.onload = function () {
    console.log("Welcome to Anu PetCare & Veterinary Cleaning!");
};

// -------------------------------
// Smooth Scrolling
// -------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// -------------------------------
// Contact Form Validation
// -------------------------------
const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.querySelector('input[type="text"]').value.trim();
        const email = document.querySelector('input[type="email"]').value.trim();
        const message = document.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please fill in all required fields.");

            return;
        }

        alert("Thank you, " + name + "!\n\nYour message has been sent successfully.");

        form.reset();

    });

}

// -------------------------------
// Scroll To Top Button
// -------------------------------

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px 16px";
topButton.style.fontSize = "18px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#0088cc";
topButton.style.color = "white";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 5px 10px rgba(0,0,0,.2)";

document.body.appendChild(topButton);

window.addEventListener("scroll", function () {

    if (window.scrollY > 200) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// -------------------------------
// Navigation Highlight
// -------------------------------

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    if (link.href === window.location.href) {

        link.style.color = "#FFD700";
        link.style.fontWeight = "bold";

    }

});

// ===============================
// End of Script
// ===============================