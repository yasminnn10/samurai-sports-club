
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("schedule-details");

    if (!section) return;

    section.classList.add("g-4", "mb-5");

    const cards = [
        {
            id: "class-breakdown-card",
            title: "TRAINING PROGRAMS",
            description: "Structured karate classes for beginners and experienced students."
        },
        {
            id: "terminology-card",
            title: "KARATE KNOWLEDGE",
            description: "Learn the essential words and traditions of karate."
        },
        {
            id: "equipment-card",
            title: "TRAINING EQUIPMENT",
            description: "Discover the basic equipment used during karate practice."
        }
    ];

    cards.forEach(item => {
        const card = document.getElementById(item.id);

        if (!card) return;

        card.classList.remove("bg-brand-dark");
        card.classList.add(
            "bg-dark",
            "border",
            "border-secondary",
            "rounded-4",
            "p-4"
        );

        const heading = card.querySelector("h3");

        if (heading) {
            heading.classList.add("text-uppercase", "fw-bold");
            heading.classList.remove("text-danger");
        }

        const description = document.createElement("p");
        description.classList.add("text-muted", "small", "mt-2", "mb-0");
        description.textContent = item.description;

        if (heading) {
            heading.after(description);
        }
    });
});
