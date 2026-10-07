document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       Current Year
       ========================================= */

    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    /* =========================================
       Mobile Navigation
       ========================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.getElementById("main-navigation");

    if (!menuToggle || !navigation) {
        console.error("Mobile navigation elements not found.");
        return;
    }

    menuToggle.addEventListener("click", function () {

        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "false" : "true"
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Open navigation menu"
                : "Close navigation menu"
        );

        menuToggle.classList.toggle(
            "is-open",
            !isOpen
        );

        navigation.classList.toggle(
            "is-open",
            !isOpen
        );
    });


    /* =========================================
       Close Menu After Navigation
       ========================================= */

    const links = navigation.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.classList.remove("is-open");

            navigation.classList.remove("is-open");
        });

    });

    console.log("Navigation JavaScript loaded successfully.");

});