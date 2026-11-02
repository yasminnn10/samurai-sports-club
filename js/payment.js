
"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const main = document.querySelector("main");
    const pricingSection = document.getElementById("pricing");

    if (!main || !pricingSection) return;

    const programs = [
        { name: "Junior Group", price: 20000 },
        { name: "Senior Group", price: 20000 },
        { name: "Weekend Training", price: 15000 },
        { name: "Advanced Karate", price: 25000 },
        { name: "Private Training", price: 10000 }
    ];

    const section = document.createElement("section");
    section.classList.add("my-5", "p-4", "p-lg-5", "bg-dark", "text-white", "rounded-4", "border", "border-secondary");
    section.setAttribute("id", "payment-calculator");

    const heading = document.createElement("h2");
    heading.classList.add("fw-bold", "text-danger", "mb-2");
    heading.textContent = "Flexible Payment Options";

    const description = document.createElement("p");
    description.classList.add("text-muted", "mb-4");
    description.textContent = "Choose your training program and explore an estimated payment option.";

    const row = document.createElement("div");
    row.classList.add("row", "g-4");

    const formColumn = document.createElement("div");
    formColumn.classList.add("col-12", "col-lg-6");

    const resultColumn = document.createElement("div");
    resultColumn.classList.add("col-12", "col-lg-6");

    function createLabel(text) {
        const label = document.createElement("label");
        label.classList.add("form-label", "fw-semibold", "mt-2");
        label.textContent = text;
        return label;
    }

    const programSelect = document.createElement("select");
    programSelect.classList.add("form-select", "mb-3");

    programs.forEach(function (program, index) {
        const option = document.createElement("option");
        option.value = String(index);
        option.textContent = program.name + " — " + program.price.toLocaleString() + " KZT/month";
        programSelect.append(option);
    });

    const paymentSelect = document.createElement("select");
    paymentSelect.classList.add("form-select", "mb-3");

    [
        "Kaspi installment (demo)",
        "Pay at the club"
    ].forEach(function (method) {
        const option = document.createElement("option");
        option.value = method;
        option.textContent = method;
        paymentSelect.append(option);
    });

    const monthsSelect = document.createElement("select");
    monthsSelect.classList.add("form-select", "mb-3");

    [3, 6, 12].forEach(function (months) {
        const option = document.createElement("option");
        option.value = String(months);
        option.textContent = months + " months";
        monthsSelect.append(option);
    });

    const result = document.createElement("div");
    result.classList.add("p-4", "rounded-4", "border", "border-secondary", "h-100");
    result.setAttribute("aria-live", "polite");

    function calculatePayment() {
        const program = programs[Number(programSelect.value)];
        const months = Number(monthsSelect.value);
        const method = paymentSelect.value;

        result.replaceChildren();

        const label = document.createElement("p");
        label.classList.add("text-muted", "text-uppercase", "small", "fw-bold");
        label.textContent = "Your selection";

        const programName = document.createElement("h4");
        programName.classList.add("fw-bold", "mb-3");
        programName.textContent = program.name;

        const priceLabel = document.createElement("p");
        priceLabel.classList.add("text-muted", "mb-1");
        priceLabel.textContent = "Monthly program price";

        const price = document.createElement("h2");
        price.classList.add("text-danger", "fw-bold", "mb-3");
        price.textContent = program.price.toLocaleString() + " KZT";

        const methodInfo = document.createElement("p");
        methodInfo.classList.add("mb-2");
        methodInfo.textContent = "Payment method: " + method;

        const estimate = document.createElement("p");
        estimate.classList.add("mb-3");
        estimate.textContent = "Illustrative division over " + months + " months: " +
            Math.ceil(program.price / months).toLocaleString() + " KZT per month.";

        const note = document.createElement("small");
        note.classList.add("text-muted");
        note.textContent = "This is only a mathematical demonstration, not an actual Kaspi installment offer or financing approval. Real payment terms must be confirmed with the provider.";

        result.append(label, programName, priceLabel, price, methodInfo, estimate, note);
    }

    formColumn.append(
        createLabel("Training program"),
        programSelect,
        createLabel("Payment method"),
        paymentSelect,
        createLabel("Demonstration period"),
        monthsSelect
    );

    resultColumn.append(result);
    row.append(formColumn, resultColumn);

    section.append(heading, description, row);
    pricingSection.after(section);

    programSelect.addEventListener("change", calculatePayment);
    paymentSelect.addEventListener("change", calculatePayment);
    monthsSelect.addEventListener("change", calculatePayment);

    calculatePayment();
});
