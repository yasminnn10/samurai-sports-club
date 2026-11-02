
"use strict";

$(document).ready(function () {
    const form = $("#trial-form");
    const alertContainer = $("#form-alert-container");
    const branchSelect = $("#user-branch");

    const trainers = {
        musrepov: ["Sensei Azamat"],
        kudaiberdyuly: ["Sensei Ruslan"],
        mangal: ["Sensei Timur"],
        turkestan: ["Alikhan"],
        ulytau: ["Sultan"],
        abylai: ["Nurlan"],
        kabanbay: ["Daniyar"],
        tauelsizdik: ["Yernar"]
    };

    const trainerWrapper = $("<div>")
        .addClass("mb-4")
        .attr("id", "field-trainer-wrapper");

    const trainerLabel = $("<label>")
        .addClass("form-label text-white fw-semibold")
        .attr("for", "user-trainer")
        .text("Select Preferred Trainer:*");

    const trainerSelect = $("<select>")
        .attr({
            id: "user-trainer",
            name: "trainer",
            required: true
        })
        .addClass("form-select bg-dark text-white border-secondary");

    trainerWrapper.append(trainerLabel, trainerSelect);
    $("#field-branch-wrapper").after(trainerWrapper);

    const typeWrapper = $("<div>").addClass("mb-4");

    const typeLabel = $("<label>")
        .addClass("form-label text-white fw-semibold")
        .attr("for", "training-type")
        .text("Select Training Type:*");

    const typeSelect = $("<select>")
        .attr({
            id: "training-type",
            name: "trainingType",
            required: true
        })
        .addClass("form-select bg-dark text-white border-secondary");

    typeSelect.append(
        $("<option>").val("").text("Choose training type").prop("disabled", true).prop("selected", true),
        $("<option>").val("Group Training").text("Group Training"),
        $("<option>").val("Individual Training").text("Individual Training")
    );

    typeWrapper.append(typeLabel, typeSelect);
    trainerWrapper.after(typeWrapper);

    function updateTrainers(selectedTrainer) {
        const branch = branchSelect.val();
        const availableTrainers = trainers[branch] || [];

        trainerSelect.empty();

        trainerSelect.append(
            $("<option>")
                .val("")
                .text("Choose a trainer")
                .prop("disabled", true)
                .prop("selected", true)
        );

        availableTrainers.forEach(function (trainer) {
            trainerSelect.append(
                $("<option>").val(trainer).text(trainer)
            );
        });

        if (selectedTrainer && availableTrainers.includes(selectedTrainer)) {
            trainerSelect.val(selectedTrainer);
        }
    }

    branchSelect.on("change", function () {
        updateTrainers();
        clearError(trainerSelect);
    });

    const params = new URLSearchParams(window.location.search);
    const selectedBranch = params.get("branch");
    const selectedTrainer = params.get("coach");

    if (selectedBranch && trainers[selectedBranch]) {
        branchSelect.val(selectedBranch);
    }

    updateTrainers(selectedTrainer);

    form.attr("novalidate", "novalidate");

    const fields = [
        $("#user-fullname"),
        $("#user-email"),
        $("#user-phone"),
        branchSelect,
        trainerSelect,
        typeSelect
    ];

    function showError(field, message) {
        field.addClass("is-invalid");

        if (field.next(".field-error").length === 0) {
            field.after(
                $("<small>").addClass("field-error text-danger d-block")
            );
        }

        field.next(".field-error").text(message);
    }

    function clearError(field) {
        field.removeClass("is-invalid");
        field.next(".field-error").remove();
    }

    function validateForm() {
        let isValid = true;

        const name = $("#user-fullname").val().trim();
        const email = $("#user-email").val().trim();
        const phone = $("#user-phone").val().trim();

        fields.forEach(clearError);

        if (name.length < 2) {
            showError($("#user-fullname"), "Please enter at least 2 characters.");
            isValid = false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError($("#user-email"), "Please enter a valid email address.");
            isValid = false;
        }

        if (!/^\+?[0-9\s()-]{7,20}$/.test(phone)) {
            showError($("#user-phone"), "Please enter a valid phone number.");
            isValid = false;
        }

        if (!branchSelect.val()) {
            showError(branchSelect, "Please select a branch.");
            isValid = false;
        }

        if (!trainerSelect.val()) {
            showError(trainerSelect, "Please select a trainer.");
            isValid = false;
        }

        if (!typeSelect.val()) {
            showError(typeSelect, "Please select a training type.");
            isValid = false;
        }

        return isValid;
    }

    form.on("submit", function (event) {
        event.preventDefault();
        alertContainer.empty();

        if (!validateForm()) {
            form.find(".is-invalid").first().trigger("focus");
            return;
        }

        const name = $("#user-fullname").val().trim();
        const branchName = branchSelect.find("option:selected").text();
        const trainerName = trainerSelect.val();
        const trainingType = typeSelect.val();

        const applicationId = "SAM-" + Math.floor(Math.random() * 90000 + 10000);

        const successMessage = $("<div>")
            .addClass("alert alert-success")
            .append($("<h5>").text("Application submitted successfully!"))
            .append($("<p>").text("Application number: " + applicationId))
            .append($("<p>").text("Thank you, " + name + "!"))
            .append($("<p>").text("Branch: " + branchName))
            .append($("<p>").text("Trainer: " + trainerName))
            .append($("<p>").text("Training type: " + trainingType))
            .append($("<p>").text("Demo only: no real booking was created."));

        alertContainer.append(successMessage);
        successMessage.hide().fadeIn(500);

        form[0].reset();
        updateTrainers();
        fields.forEach(clearError);
    });

    form.on("input change", "input, select", function () {
        clearError($(this));
        alertContainer.empty();
    });
});
