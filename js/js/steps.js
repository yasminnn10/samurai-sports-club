
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const section = document.getElementById("joining-steps-section");

    if (!section) return;

    section.classList.remove("p-4", "bg-brand-dark");
    section.classList.add("p-4", "p-lg-5", "bg-dark", "border", "border-secondary", "rounded-4");

    const heading = document.getElementById("steps-heading");

    if (heading) {
        heading.classList.remove("h3");
        heading.classList.add("fw-bold", "mb-4");
        heading.textContent = "START YOUR JOURNEY";
    }

    const steps = [
        {
            number: "01",
            title: "BOOK YOUR FREE TRIAL",
            description: "Complete the online registration form and choose your preferred dojo."
        },
        {
            number: "02",
            title: "MEET OUR TEAM",
            description: "Our team will contact you to confirm your first training session."
        },
        {
            number: "03",
            title: "STEP INTO THE DOJO",
            description: "Arrive 10 minutes early in comfortable sportswear and get ready to train."
        }
    ];

    const list = document.getElementById("steps-list");

    if (!list) return;

    list.replaceChildren();
    list.classList.remove("text-white", "ps-3", "mb-0");
    list.classList.add("list-unstyled", "row", "g-4", "mb-0");

    steps.forEach(step => {
        const column = document.createElement("li");
        column.classList.add("col-12", "col-md-4");

        const card = document.createElement("div");
        card.classList.add("h-100", "p-3", "rounded-3", "border", "border-secondary");

        const number = document.createElement("div");
        number.classList.add("display-5", "fw-bold", "text-danger", "mb-3");
        number.textContent = step.number;

        const title = document.createElement("h3");
        title.classList.add("h5", "fw-bold", "text-white", "mb-2");
        title.textContent = step.title;

        const description = document.createElement("p");
        description.classList.add("text-muted", "mb-0");
        description.textContent = step.description;

        card.append(number, title, description);
        column.append(card);
        list.append(column);
    });
});
