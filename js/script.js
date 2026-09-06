// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

}


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// Simple scroll animation

const cards = document.querySelectorAll(
    ".security-card, .about-preview, .cta, .ai-box"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition = "all .7s ease";

    observer.observe(card);

});
