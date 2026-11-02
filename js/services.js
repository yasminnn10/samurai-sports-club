
"use strict";

const trainingPrograms = [
    {
        id: 1,
        name: "Junior Group",
        age: "Ages 4–10",
        days: "Mon, Wed, Fri",
        time: "19:00 – 20:00",
        price: 20000,
        type: "children"
    },
    {
        id: 2,
        name: "Senior Group",
        age: "Ages 10+",
        days: "Mon, Wed, Fri",
        time: "20:00 – 21:15",
        price: 20000,
        type: "adults"
    },
    {
        id: 3,
        name: "Trial Lesson",
        age: "First Visit",
        days: "Any Scheduled Day",
        time: "Flexible",
        price: 0,
        type: "trial"
    },
    {
        id: 4,
        name: "Private Training",
        age: "All Ages",
        days: "By Appointment",
        time: "Flexible",
        price: 10000,
        type: "individual"
    },
    {
        id: 5,
        name: "Weekend Training",
        age: "All Ages",
        days: "Saturday",
        time: "12:00 – 13:30",
        price: 15000,
        type: "group"
    },
    {
        id: 6,
        name: "Advanced Karate",
        age: "Experienced Students",
        days: "Tue, Thu, Sat",
        time: "18:00 – 19:30",
        price: 25000,
        type: "advanced"
    }
];

function getProgramPrice(program) {
    return program.price === 0
        ? "FREE"
        : `${program.price.toLocaleString()} KZT`;
}

function getProgramsByType(type) {
    if (type === "all") {
        return trainingPrograms;
    }

    return trainingPrograms.filter(program => program.type === type);
}

function calculateAveragePrice(programs) {
    const paidPrograms = programs.filter(program => program.price > 0);

    if (paidPrograms.length === 0) {
        return 0;
    }

    const total = paidPrograms.reduce(
        (sum, program) => sum + program.price,
        0
    );

    return Math.round(total / paidPrograms.length);
}

function createProgramRow(program) {
    const row = document.createElement("tr");
    row.classList.add("align-middle");

    const nameCell = document.createElement("td");
    const name = document.createElement("strong");
    name.classList.add("text-white");
    name.textContent = program.name;

    const age = document.createElement("small");
    age.classList.add("d-block", "text-muted", "mt-1");
    age.textContent = program.age;

    nameCell.append(name, age);

    const daysCell = document.createElement("td");
    daysCell.textContent = program.days;

    const timeCell = document.createElement("td");
    timeCell.textContent = program.time;

    const priceCell = document.createElement("td");
    priceCell.classList.add("fw-bold");

    const priceBadge = document.createElement("span");
    priceBadge.classList.add(
        "badge",
        "rounded-pill",
        "fs-6",
        "px-3",
        "py-2"
    );

    if (program.price === 0) {
        priceBadge.classList.add("bg-success");
    } else {
        priceBadge.classList.add("bg-danger");
    }

    priceBadge.textContent = getProgramPrice(program);
    priceCell.append(priceBadge);

    row.append(nameCell, daysCell, timeCell, priceCell);

    return row;
}

function renderPrograms(programs) {
    const tableBody = document.getElementById("pricing-table-body");
    const alertContainer = document.getElementById("services-alert-container");

    if (!tableBody || !alertContainer) {
        return;
    }

    tableBody.replaceChildren();

    if (programs.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");

        cell.colSpan = 4;
        cell.classList.add("text-center", "text-muted", "py-5");
        cell.textContent = "No training programs found.";

        row.append(cell);
        tableBody.append(row);

        alertContainer.textContent = "No results. Try another search or category.";
        return;
    }

    alertContainer.textContent =
        `${programs.length} training programs available.`;

    programs.forEach(program => {
        tableBody.append(createProgramRow(program));
    });
}

function createReferenceNumber() {
    return "SAM-" + Math.floor(Math.random() * 90000 + 10000);
}

function searchPrograms(programs, searchText) {
    const query = searchText.trim().toLowerCase();

    if (query === "") {
        return programs;
    }

    return programs.filter(program =>
        program.name.toLowerCase().includes(query) ||
        program.age.toLowerCase().includes(query) ||
        program.days.toLowerCase().includes(query)
    );
}

function sortProgramsByPrice(programs, order) {
    const sortedPrograms = [...programs];

    sortedPrograms.sort((first, second) => {
        return order === "high"
            ? second.price - first.price
            : first.price - second.price;
    });

    return sortedPrograms;
}

document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("pricing-table");
    const tableBody = document.getElementById("pricing-table-body");
    const alertContainer = document.getElementById("services-alert-container");

    if (!table || !tableBody || !alertContainer) {
        return;
    }

    table.classList.add("table-hover");
    table.classList.remove("table-striped");

    const controls = document.createElement("div");
    controls.classList.add(
        "row",
        "g-3",
        "align-items-center",
        "mb-4",
        "p-3",
        "bg-dark",
        "border",
        "border-secondary",
        "rounded-4"
    );

    const searchColumn = document.createElement("div");
    searchColumn.classList.add("col-12", "col-lg-5");

    const categoryColumn = document.createElement("div");
    categoryColumn.classList.add("col-12", "col-md-5", "col-lg-3");

    const sortColumn = document.createElement("div");
    sortColumn.classList.add("col-12", "col-md-7", "col-lg-3");

    const buttonColumn = document.createElement("div");
    buttonColumn.classList.add("col-12", "col-lg-1");

    const searchInput = document.createElement("input");
    searchInput.type = "search";
    searchInput.placeholder = "Search programs...";
    searchInput.classList.add("form-control", "py-2");
    searchInput.setAttribute("aria-label", "Search training programs");

    const categorySelect = document.createElement("select");
    categorySelect.classList.add("form-select", "py-2");
    categorySelect.setAttribute("aria-label", "Choose program category");

    const categories = [
        { value: "all", label: "All programs" },
        { value: "children", label: "Children" },
        { value: "adults", label: "Adults" },
        { value: "trial", label: "Trial lesson" },
        { value: "individual", label: "Individual" },
        { value: "group", label: "Group" },
        { value: "advanced", label: "Advanced" }
    ];

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category.value;
        option.textContent = category.label;
        categorySelect.append(option);
    });

    const sortSelect = document.createElement("select");
    sortSelect.classList.add("form-select", "py-2");
    sortSelect.setAttribute("aria-label", "Sort programs by price");

    const sortOptions = [
        { value: "default", label: "Default order" },
        { value: "low", label: "Price: low to high" },
        { value: "high", label: "Price: high to low" }
    ];

    sortOptions.forEach(item => {
        const option = document.createElement("option");
        option.value = item.value;
        option.textContent = item.label;
        sortSelect.append(option);
    });

    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.textContent = "Reset";
    resetButton.classList.add("btn", "btn-outline-danger", "w-100");

    searchColumn.append(searchInput);
    categoryColumn.append(categorySelect);
    sortColumn.append(sortSelect);
    buttonColumn.append(resetButton);

    controls.append(
        searchColumn,
        categoryColumn,
        sortColumn,
        buttonColumn
    );

    table.before(controls);

    alertContainer.classList.add("text-muted", "small", "mb-3");

    function updatePrograms() {
        let filteredPrograms = getProgramsByType(categorySelect.value);

        filteredPrograms = searchPrograms(
            filteredPrograms,
            searchInput.value
        );

        if (sortSelect.value !== "default") {
            filteredPrograms = sortProgramsByPrice(
                filteredPrograms,
                sortSelect.value
            );
        }

        renderPrograms(filteredPrograms);
    }

    searchInput.addEventListener("input", updatePrograms);
    categorySelect.addEventListener("change", updatePrograms);
    sortSelect.addEventListener("change", updatePrograms);

    resetButton.addEventListener("click", () => {
        searchInput.value = "";
        categorySelect.value = "all";
        sortSelect.value = "default";
        updatePrograms();
    });

    const averagePrice = calculateAveragePrice(trainingPrograms);

    alertContainer.textContent =
        `${trainingPrograms.length} programs available. Average paid price: ${averagePrice.toLocaleString()} KZT.`;

    renderPrograms(trainingPrograms);

    console.log("Example reference:", createReferenceNumber());
});
