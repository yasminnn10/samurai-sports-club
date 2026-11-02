
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("pricing-table-body");

    if (tableBody) {
        tableBody.addEventListener("click", event => {
            const row = event.target.closest("tr");

            if (row && row.parentElement === tableBody) {
                row.classList.toggle("table-active");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("trial-form");

    if (!form) return;

    form.addEventListener("submit", event => {
        event.preventDefault();

        const name = document.getElementById("user-fullname").value.trim();
        const email = document.getElementById("user-email").value.trim();
        const phone = document.getElementById("user-phone").value.trim();
        const branch = document.getElementById("user-branch").value;

        const errors = [];

        if (name.length < 2) errors.push("Enter your full name.");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Enter a valid email.");
        if (!/^\+?[0-9\s()-]{7,20}$/.test(phone)) errors.push("Enter a valid phone number.");
        if (!branch) errors.push("Select a branch.");

        const alertContainer = document.getElementById("form-alert-container");
        alertContainer.replaceChildren();

        if (errors.length > 0) {
            const message = document.createElement("p");
            message.textContent = errors.join(" ");
            alertContainer.append(message);
            return;
        }

        const success = document.createElement("p");
        success.textContent = "Application submitted successfully!";
        alertContainer.append(success);

        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("pricing-table-body");

    if (!tableBody) return;

    const programs = [
        "Junior Group",
        "Senior Group",
        "Trial Lesson"
    ];

    tableBody.replaceChildren();

    programs.forEach(program => {
        const row = document.createElement("tr");
        const cell = document.createElement("td");

        cell.textContent = program;
        row.append(cell);
        tableBody.append(row);
    });
});
