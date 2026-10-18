// ========================================
// SMITH OLAGO - PERSONAL PORTFOLIO
// JAVASCRIPT FUNCTIONALITY
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // 1. WELCOME MESSAGE
    console.log("Welcome to Smith Olago's Portfolio!");

    // 2. HIGHLIGHT THE ACTIVE NAVIGATION LINK
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });
    });

    // 3. SMOOTH SCROLLING
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.length > 1) {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // 4. ANIMATE CARDS WHEN THEY ENTER THE SCREEN
    const cards = document.querySelectorAll(".card");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observerInstance) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");

                        observerInstance.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        cards.forEach(function (card) {
            card.classList.add("reveal");

            observer.observe(card);
        });
    }

    // 5. UPDATE THE FOOTER YEAR AUTOMATICALLY
    const footer = document.querySelector("footer");

    if (footer) {
        const footerParagraph = footer.querySelector("p");

        if (footerParagraph) {
            footerParagraph.innerHTML =
                "&copy; " + new Date().getFullYear() +
                " Smith Olago. All Rights Reserved.";
        }
    }

    // 6. BACK-TO-TOP BUTTON
    const backToTop = document.createElement("button");

    backToTop.textContent = "↑";
    backToTop.setAttribute("aria-label", "Back to top");
    backToTop.title = "Back to top";

    backToTop.style.position = "fixed";
    backToTop.style.bottom = "25px";
    backToTop.style.right = "25px";
    backToTop.style.width = "48px";
    backToTop.style.height = "48px";
    backToTop.style.border = "none";
    backToTop.style.borderRadius = "50%";
    backToTop.style.background = "#6d28d9";
    backToTop.style.color = "#ffffff";
    backToTop.style.fontSize = "25px";
    backToTop.style.fontWeight = "bold";
    backToTop.style.cursor = "pointer";
    backToTop.style.display = "none";
    backToTop.style.zIndex = "1000";
    backToTop.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";

    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        backToTop.style.display =
            window.scrollY > 300 ? "block" : "none";
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    console.log("Portfolio JavaScript loaded successfully!");

});