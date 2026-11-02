
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const hero = document.getElementById("hero-image-container");
    const heading = document.getElementById("hero-heading");
    const subheading = document.getElementById("hero-subheading");
    const buttons = document.getElementById("hero-action-buttons");
    const features = document.getElementById("features-section");
    const featureGrid = document.getElementById("features-grid");
    const quote = document.getElementById("coach-quote-box");

    if (hero) {
        hero.classList.add("mb-4");

        const image = hero.querySelector("img");

        if (image) {
            image.classList.add("img-fluid", "mb-3");
        }
    }

    if (heading) {
        heading.classList.add(
            "display-4",
            "fw-bold",
            "text-uppercase",
            "mb-3"
        );

        const eyebrow = document.createElement("p");
        eyebrow.textContent = "DISCIPLINE • STRENGTH • RESPECT";
        eyebrow.classList.add(
            "text-brand-red",
            "fw-bold",
            "small",
            "mb-2"
        );

        heading.before(eyebrow);
    }

    if (subheading) {
        subheading.classList.add("lead", "mb-4");
    }

    if (buttons) {
        buttons.classList.add("mb-5", "gap-3");

        buttons.querySelectorAll("a, button").forEach(button => {
            button.classList.add("btn-lg", "fw-bold");
        });
    }

    if (features) {
        features.classList.add("mt-5", "mb-5");
    }

    if (featureGrid) {
        featureGrid.classList.add("g-4");

        featureGrid.querySelectorAll(".card").forEach(card => {
            card.classList.add(
                "h-100",
                "p-3",
                "bg-dark",
                "border",
                "border-secondary",
                "rounded-4"
            );
        });
    }

    if (quote) {
        quote.classList.add(
            "p-4",
            "rounded-3",
            "border",
            "border-secondary"
        );
    }
});
