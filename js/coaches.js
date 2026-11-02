
"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const coachCards = document.querySelectorAll("main .row .card");

    const coaches = [
        {
            name: "Sensei Azamat",
            branch: "Musrepov Dojo",
            branchValue: "musrepov",
            rank: "3rd Dan Black Belt",
            experience: "10+ years",
            specialization: "Youth physical conditioning and sparring tactics",
            groupPrice: "20,000 KZT per month",
            individualPrice: "10,000 KZT per lesson",
            schedule: "Monday, Wednesday, Friday",
            time: "19:00–20:00",
            available: "5 places"
        },
        {
            name: "Sensei Ruslan",
            branch: "Kudaiberdyuly Dojo",
            branchValue: "kudaiberdyuly",
            rank: "2nd Dan Black Belt",
            experience: "8 years",
            specialization: "Kata and competition training",
            groupPrice: "20,000 KZT per month",
            individualPrice: "10,000 KZT per lesson",
            schedule: "Monday, Wednesday, Friday",
            time: "20:00–21:15",
            available: "3 places"
        },
        {
            name: "Sensei Timur",
            branch: "Mangilik El Dojo",
            branchValue: "mangal",
            rank: "2nd Dan Black Belt",
            experience: "6 years",
            specialization: "Children's karate training, ages 4–10",
            groupPrice: "15,000 KZT per month",
            individualPrice: "10,000 KZT per lesson",
            schedule: "Tuesday, Thursday, Saturday",
            time: "18:00–19:30",
            available: "4 places"
        }
    ];

    function createElement(tag, className, text) {
        const element = document.createElement(tag);
        element.className = className;

        if (text) {
            element.textContent = text;
        }

        return element;
    }

    function showCoachModal(coach) {
        const existingModal = document.getElementById("coachDetailsModal");

        if (existingModal) {
            const oldInstance = bootstrap.Modal.getInstance(existingModal);
            if (oldInstance) oldInstance.dispose();
            existingModal.remove();
        }

        const modal = createElement("div", "modal fade");
        modal.id = "coachDetailsModal";
        modal.tabIndex = -1;
        modal.setAttribute("aria-labelledby", "coachDetailsTitle");
        modal.setAttribute("aria-hidden", "true");

        const dialog = createElement("div", "modal-dialog modal-dialog-centered");
        const content = createElement("div", "modal-content bg-dark text-white border-secondary");

        const header = createElement("div", "modal-header border-secondary");
        const title = createElement("h5", "modal-title text-danger fw-bold", coach.name);
        title.id = "coachDetailsTitle";

        const close = createElement("button", "btn-close btn-close-white");
        close.type = "button";
        close.setAttribute("data-bs-dismiss", "modal");
        close.setAttribute("aria-label", "Close");

        const body = createElement("div", "modal-body");

        const details = [
            ["Branch", coach.branch],
            ["Rank", coach.rank],
            ["Experience", coach.experience],
            ["Specialization", coach.specialization],
            ["Group training", coach.groupPrice],
            ["Individual training", coach.individualPrice],
            ["Schedule", coach.schedule],
            ["Training time", coach.time],
            ["Available places", coach.available]
        ];

        details.forEach(function (detail) {
            const paragraph = createElement("p", "mb-3");
            const label = createElement("strong", "text-danger", detail[0] + ": ");
            const value = document.createTextNode(detail[1]);

            paragraph.append(label, value);
            body.append(paragraph);
        });

        const note = createElement(
            "p",
            "small text-muted mt-3",
            "Schedule, prices and available places are demonstration information and should be confirmed with the club."
        );

        body.append(note);

        const footer = createElement("div", "modal-footer border-secondary");

        const bookingLink = createElement("a", "btn btn-danger", "Book a Trial");

        bookingLink.href = "order.html?branch=" +
            coach.branchValue +
            "&coach=" +
            encodeURIComponent(coach.name);

        const closeButton = createElement("button", "btn btn-outline-light", "Close");
        closeButton.type = "button";
        closeButton.setAttribute("data-bs-dismiss", "modal");

        footer.append(bookingLink, closeButton);
        header.append(title, close);
        content.append(header, body, footer);
        dialog.append(content);
        modal.append(dialog);
        document.body.append(modal);

        const modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();

        modal.addEventListener("hidden.bs.modal", function () {
            modalInstance.dispose();
            modal.remove();
        }, { once: true });
    }

    coachCards.forEach(function (card, index) {
        const coach = coaches[index];

        if (!coach) return;

        const cardBody = card.querySelector(".card-body");

        if (!cardBody) return;

        const button = createElement(
            "button",
            "btn btn-outline-danger mt-3",
            "More details"
        );

        button.type = "button";

        button.addEventListener("click", function () {
            showCoachModal(coach);
        });

        cardBody.append(button);
    });
});
