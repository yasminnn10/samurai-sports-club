
"use strict";

$(document).ready(function () {

    const $table = $("#pricing-table");
    const $tableBody = $("#pricing-table-body");
    const $links = $("a[href]");

    $tableBody.find("tr").filter(":first").addClass("table-active");
    $tableBody.find("tr").filter(":last").attr("title", "Last training program");

    $("input:checked").each(function () {
        $(this).prop("disabled", false);
    });

    $links.not(".navbar-brand").each(function () {
        $(this).attr("title", $(this).text().trim());
    });

    $table.find("tbody").children("tr").each(function () {
        $(this).find("td").first().addClass("fw-bold");
        $(this).children("td").last().attr("data-price-cell", "true");
    });

    $("#pricing-title")
        .text($("#pricing-title").text())
        .addClass("text-danger")
        .attr("data-original-title", "SAMURAI Training Programs");

    $tableBody.on("click", "tr", function () {
        $(this).toggleClass("table-active");
        $(this).closest("tbody").siblings("thead").toggleClass("table-secondary");
        $(this).parent().addClass("table-group");
    });

    $tableBody.on("dblclick", "tr", function () {
        $(this).fadeOut(300, function () {
            $(this).fadeIn(300);
        });
    });

    const programs = [
        { name: "Junior Group", description: "Karate training for children." },
        { name: "Senior Group", description: "Training for older students." },
        { name: "Trial Lesson", description: "A free first visit." }
    ];

    const $programList = $("<ul>")
        .addClass("list-group mt-3")
        .attr("id", "jquery-program-list");

    programs.forEach(function (program) {
        const $item = $("<li>")
            .addClass("list-group-item")
            .text(program.name + " — " + program.description);

        $programList.append($item);
    });

    if ($("#jquery-program-list").length === 0 && $table.length > 0) {
        $table.after($programList);
    }

    $programList.on("click", "li", function () {
        $(this).toggleClass("active");
    });

    $("#services-alert-container").hide().fadeIn(500);

    $("#faq-section").hide().slideDown(400, function () {
        $(this).addClass("faq-ready");
    });

    $programList.on("dblclick", "li", function () {
        $(this).fadeOut(300, function () {
            $(this).fadeIn(300);
        });
    });

    const pageTitle = $("#pricing-title").text();

    $("#pricing-title").attr("data-original-title", pageTitle);

    const branchValue = $("#user-branch").val();

    if (branchValue !== undefined) {
        $("#user-branch").prop("disabled", false);
    }

    $("#jquery-program-list")
        .hide()
        .fadeIn(500)
        .addClass("jquery-list-ready");
});
