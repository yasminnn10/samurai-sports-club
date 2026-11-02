"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const messageContainer = document.getElementById("home-js-message-container");

    if (messageContainer) {
        const message = document.createElement("p");

        message.textContent = "Welcome to SAMURAI Sports Club! Start your karate journey today.";
        message.classList.add("text-danger", "fw-bold");

        messageContainer.append(message);
    }
});