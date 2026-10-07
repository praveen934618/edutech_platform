/**
 * Reusable site navigation component.
 * Keeps the navigation structure consistent across public pages.
 */

function renderNavbar() {
    const navbarContainer = document.getElementById("site-navbar");

    if (!navbarContainer) {
        return;
    }

    navbarContainer.innerHTML = `
        <header class="site-header">
            <div class="container">
                <nav class="site-navigation" aria-label="Main navigation">

                    <a class="site-logo" href="index.html">
                        Education Platform
                    </a>

                    <button
                        class="menu-toggle"
                        type="button"
                        aria-label="Open navigation menu"
                        aria-expanded="false"
                        aria-controls="main-navigation"
                    >
                        <span class="menu-toggle__line"></span>
                        <span class="menu-toggle__line"></span>
                        <span class="menu-toggle__line"></span>
                    </button>

                    <div
                        class="site-navigation__links"
                        id="main-navigation"
                    >
                        <a href="index.html">Home</a>
                        <a href="courses.html">Courses</a>
                        <a href="about.html">About</a>
                        <a href="contact.html">Contact</a>
                        <a href="login.html">Login</a>
                    </div>

                </nav>
            </div>
        </header>
    `;

    initializeMobileNavigation();
}

function initializeMobileNavigation() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.getElementById("main-navigation");

    if (!menuToggle || !navigation) {
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

        menuToggle.classList.toggle("is-open", !isOpen);
        navigation.classList.toggle("is-open", !isOpen);
    });

    const links = navigation.querySelectorAll("a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuToggle.classList.remove("is-open");
            navigation.classList.remove("is-open");
        });
    });
}

document.addEventListener("DOMContentLoaded", renderNavbar);