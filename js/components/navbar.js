/**
 * =========================================================================
 * REUSABLE SITE NAVIGATION COMPONENT
 * =========================================================================
 * 
 * Styled with modern developer platform aesthetics (clean typography matching
 * the brand logo font, warm light active pill (#fbf5ee), dual-column mega
 * dropdown for Courses, responsive search bar with Ctrl+K shortcut, mobile
 * drawer with accordions and animated hamburger toggle, and interactive
 * "Book a demo" modal).
 * 
 * TO CUSTOMIZE NAVBAR ITEMS:
 * Simply edit the `NAVBAR_CONFIG` object below.
 * =========================================================================
 */

const NAVBAR_CONFIG = {
    // Brand Logo
    brand: {
        badge: "E",
        text: "Edutech",
        href: "index.html"
    },

    // Search Bar Configuration
    search: {
        enabled: true,
        placeholder: "Search courses...",
        action: "courses.html"
    },

    // Main Navigation Links (Desktop & Mobile Drawer)
    // Note: Easily add, edit or remove items from this array!
    navLinks: [
        {
            title: "Home",
            href: "index.html"
        },
        {
            title: "Courses",
            href: "courses.html",
            isDropdown: true,
            dropdownType: "mega", // 2-column mega dropdown matching reference design
            columns: [
                {
                    sectionTitle: "CAREER TRACKS",
                    items: [
                        {
                            title: "Full-Stack Web Engineering",
                            desc: "HTML, CSS, modern JavaScript, React & backend APIs",
                            href: "course-detail.html?id=full-stack-development",
                            icon: "code"
                        },
                        {
                            title: "Python Programming & Automation",
                            desc: "OOP, script automation, data pipelines & DB integration",
                            href: "course-detail.html?id=python-programming",
                            icon: "python"
                        },
                        {
                            title: "Data Analytics & Intelligence",
                            desc: "Data analysis, SQL, visualization dashboards & ML basics",
                            href: "course-detail.html?id=data-analytics",
                            icon: "database"
                        },
                        {
                            title: "Cloud & DevOps Architecture",
                            desc: "Docker, Kubernetes, CI/CD pipelines & scalable architectures",
                            href: "course-detail.html?id=cloud-devops",
                            icon: "cloud"
                        },
                        {
                            title: "Cyber Security & Ethical Defense",
                            desc: "Network protection, ethical hacking & vulnerability defense",
                            href: "course-detail.html?id=cyber-security",
                            icon: "shield"
                        }
                    ]
                },
                {
                    sectionTitle: "EXPLORE & LEARNING TOOLS",
                    items: [
                        {
                            title: "Browse All Courses",
                            desc: "View our full catalog of 25+ expert-led technology tracks",
                            href: "courses.html",
                            badge: { text: "ALL", color: "orange" }
                        },
                        {
                            title: "Interactive Sandbox",
                            desc: "In-browser live coding sandboxes with instant output preview",
                            href: "courses.html",
                            badge: { text: "S", color: "orange" }
                        },
                        {
                            title: "Practice Labs",
                            desc: "Hands-on projects and guided technical exercises",
                            href: "courses.html",
                            badge: { text: "P", color: "green" }
                        },
                        {
                            title: "Student Portal",
                            desc: "Track enrolled courses, assignment progress and grades",
                            href: "login.html",
                            badge: { text: "D", color: "blue" }
                        }
                    ]
                }
            ]
        },
        {
            title: "Pricing",
            href: "pricing.html"
        },
        {
            title: "About",
            href: "about.html"
        },
        {
            title: "Contact",
            href: "contact.html"
        }
    ],

    // Right Action Buttons (Desktop & Mobile Drawer Footer)
    actions: {
        login: {
            title: "Log in",
            href: "login.html"
        },
        register: {
            title: "Register",
            href: "register.html"
        },
        demoBtn: {
            title: "Book a demo",
            type: "modal" // "modal" opens interactive popup dialog; "link" navigates to href
        }
    }
};

/**
 * Clean SVG icons dictionary for dropdown items.
 */
function getNavIconSvg(name) {
    switch (name) {
        case "code":
            return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
        case "python":
            return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m7 8 4 4-4 4"/><path d="M13 16h4"/></svg>`;
        case "database":
            return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>`;
        case "cloud":
            return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`;
        case "ai":
            return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="8" x="2" y="3" rx="2"/><rect width="8" height="8" x="14" y="3" rx="2"/><rect width="8" height="8" x="8" y="13" rx="2"/><path d="M6 11v2a2 2 0 0 0 2 2h4M18 11v2a2 2 0 0 1-2 2h-4"/></svg>`;
        case "shield":
            return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`;
        default:
            return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6z"/></svg>`;
    }
}

/**
 * Builds HTML for a single dropdown item card.
 */
function renderDropdownItemHTML(item) {
    let iconHTML = "";
    if (item.badge) {
        const colorClass = `dropdown-item__icon--${item.badge.color || 'orange'}`;
        iconHTML = `<div class="dropdown-item__icon dropdown-item__icon--badge ${colorClass}" aria-hidden="true">${item.badge.text}</div>`;
    } else {
        iconHTML = `<div class="dropdown-item__icon dropdown-item__icon--svg" aria-hidden="true">${getNavIconSvg(item.icon)}</div>`;
    }

    return `
        <li>
            <a href="${item.href}" class="dropdown-item">
                ${iconHTML}
                <div class="dropdown-item__content">
                    <div class="dropdown-item__title">${item.title}</div>
                    <div class="dropdown-item__desc">${item.desc}</div>
                </div>
            </a>
        </li>
    `;
}

/**
 * Builds the Desktop navigation list HTML.
 */
function buildDesktopNavHTML(config) {
    return config.navLinks.map((link, index) => {
        if (!link.isDropdown) {
            return `
                <li class="nav-item">
                    <a href="${link.href}" class="nav-link">${link.title}</a>
                </li>
            `;
        }

        const dropdownId = `dropdown-menu-${index}`;
        const triggerId = `trigger-menu-${index}`;
        const dropdownMenuClass = link.dropdownType === "mega"
            ? "dropdown-menu dropdown-menu--mega"
            : "dropdown-menu dropdown-menu--solutions";

        const columnsHTML = link.columns.map((col, colIndex) => {
            const isDivider = colIndex < link.columns.length - 1 ? "dropdown-col--divider" : "";
            const itemsHTML = col.items.map(item => renderDropdownItemHTML(item)).join("");
            return `
                <div class="dropdown-col ${isDivider}">
                    <div class="dropdown-section-title">${col.sectionTitle}</div>
                    <ul class="dropdown-items-list">
                        ${itemsHTML}
                    </ul>
                </div>
            `;
        }).join("");

        return `
            <li class="nav-item has-dropdown" data-dropdown="${index}">
                <button
                    class="nav-trigger"
                    type="button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    aria-controls="${dropdownId}"
                    id="${triggerId}"
                >
                    <span>${link.title}</span>
                    <svg class="dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div
                    class="${dropdownMenuClass}"
                    id="${dropdownId}"
                    role="region"
                    aria-labelledby="${triggerId}"
                >
                    <div class="dropdown-mega-grid">
                        ${columnsHTML}
                    </div>
                </div>
            </li>
        `;
    }).join("");
}

/**
 * Builds the Mobile drawer accordion HTML.
 */
function buildMobileNavHTML(config) {
    return config.navLinks.map((link, index) => {
        if (!link.isDropdown) {
            return `
                <li>
                    <a href="${link.href}" class="mobile-nav__link">${link.title}</a>
                </li>
            `;
        }

        const panelId = `mobile-panel-${index}`;
        const sectionsHTML = link.columns.map((col, colIndex) => {
            const marginTop = colIndex > 0 ? 'style="margin-top: 14px;"' : '';
            const itemsHTML = col.items.map(item => renderDropdownItemHTML(item)).join("");
            return `
                <div class="dropdown-section-title" ${marginTop}>${col.sectionTitle}</div>
                <ul class="dropdown-items-list">
                    ${itemsHTML}
                </ul>
            `;
        }).join("");

        return `
            <li>
                <button
                    class="mobile-nav__accordion-btn"
                    type="button"
                    aria-expanded="false"
                    aria-controls="${panelId}"
                >
                    <span>${link.title}</span>
                    <svg class="mobile-nav__accordion-chevron" width="12" height="8" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div class="mobile-nav__accordion-panel" id="${panelId}">
                    ${sectionsHTML}
                </div>
            </li>
        `;
    }).join("");
}

/**
 * Main render function.
 */
function renderNavbar() {
    const navbarContainer = document.getElementById("site-navbar");
    if (!navbarContainer) return;

    const desktopNavItems = buildDesktopNavHTML(NAVBAR_CONFIG);
    const mobileNavItems = buildMobileNavHTML(NAVBAR_CONFIG);

    navbarContainer.innerHTML = `
        <header class="site-header" id="site-header">
            <div class="site-header__container">

                <!-- Left: Brand Logo & Desktop Search -->
                <div class="site-header__left">
                    <a class="site-logo" href="${NAVBAR_CONFIG.brand.href}" aria-label="${NAVBAR_CONFIG.brand.text} Homepage">
                        <span class="site-logo__badge" aria-hidden="true">${NAVBAR_CONFIG.brand.badge}</span>
                        <span class="site-logo__text">${NAVBAR_CONFIG.brand.text}</span>
                    </a>

                    <!-- Search Bar in Navbar -->
                    <form class="nav-search" id="desktop-search-form" action="${NAVBAR_CONFIG.search.action}" method="GET" role="search">
                        <svg class="nav-search__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.35-4.35"/>
                        </svg>
                        <input
                            class="nav-search__input"
                            id="desktop-search-input"
                            type="search"
                            name="search"
                            placeholder="${NAVBAR_CONFIG.search.placeholder}"
                            aria-label="Search courses"
                            autocomplete="off"
                        >
                        <kbd class="nav-search__shortcut" title="Press Ctrl+K to search">Ctrl K</kbd>
                    </form>
                </div>

                <!-- Center: Desktop Navigation -->
                <nav class="nav-desktop" aria-label="Main Navigation">
                    <ul class="nav-desktop__list" role="menubar">
                        ${desktopNavItems}
                    </ul>
                </nav>

                <!-- Right: Desktop Actions & Mobile Menu Toggle -->
                <div class="site-header__right">
                    <div class="nav-actions">
                        <a href="${NAVBAR_CONFIG.actions.login.href}" class="nav-actions__link">${NAVBAR_CONFIG.actions.login.title}</a>
                        <a href="${NAVBAR_CONFIG.actions.register.href}" class="nav-actions__link">${NAVBAR_CONFIG.actions.register.title}</a>
                        <button type="button" class="nav-btn-demo" id="nav-demo-btn">${NAVBAR_CONFIG.actions.demoBtn.title}</button>
                    </div>

                    <!-- Mobile Menu Hamburger Button -->
                    <button
                        class="menu-toggle"
                        type="button"
                        aria-label="Open navigation menu"
                        aria-expanded="false"
                        aria-controls="mobile-navigation"
                        id="mobile-menu-toggle"
                    >
                        <span class="menu-toggle__line"></span>
                        <span class="menu-toggle__line"></span>
                        <span class="menu-toggle__line"></span>
                    </button>
                </div>

            </div>
        </header>

        <!-- Mobile Drawer Backdrop -->
        <div class="mobile-nav-backdrop" id="mobile-nav-backdrop" aria-hidden="true"></div>

        <!-- Mobile Navigation Drawer -->
        <nav
            class="mobile-nav"
            id="mobile-navigation"
            aria-label="Mobile navigation"
            aria-hidden="true"
        >
            <!-- Mobile Search Bar -->
            <form class="mobile-nav__search" action="${NAVBAR_CONFIG.search.action}" method="GET" role="search">
                <svg class="nav-search__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                    class="nav-search__input"
                    type="search"
                    name="search"
                    placeholder="${NAVBAR_CONFIG.search.placeholder}"
                    aria-label="Search courses"
                >
            </form>

            <ul class="mobile-nav__list">
                ${mobileNavItems}
            </ul>

            <!-- Mobile Auth & CTA Buttons -->
            <div class="mobile-nav__footer">
                <div class="mobile-nav__auth-row">
                    <a href="${NAVBAR_CONFIG.actions.login.href}" class="mobile-nav__auth-btn">${NAVBAR_CONFIG.actions.login.title}</a>
                    <a href="${NAVBAR_CONFIG.actions.register.href}" class="mobile-nav__auth-btn">${NAVBAR_CONFIG.actions.register.title}</a>
                </div>
                <button type="button" class="mobile-nav__demo-btn" id="mobile-demo-btn">
                    ${NAVBAR_CONFIG.actions.demoBtn.title}
                </button>
            </div>
        </nav>

        <!-- Interactive "Book a demo" Modal -->
        <div class="demo-modal-overlay" id="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
            <div class="demo-modal">
                <button type="button" class="demo-modal__close" id="demo-modal-close" aria-label="Close dialog">&times;</button>
                <div id="demo-modal-form-container">
                    <h3 id="demo-modal-title" style="margin-bottom: 8px; font-size: 1.5rem; font-family: var(--font-heading);">Book a Platform Demo</h3>
                    <p style="margin-bottom: 20px; font-size: 0.875rem; color: #64748b;">
                        See live course sandboxes, interactive code environments, and learning analytics customized for your goals.
                    </p>
                    <form id="demo-form" style="display: flex; flex-direction: column; gap: 14px;">
                        <div>
                            <label for="demo-name" style="display: block; font-size: 0.8125rem; font-weight: 600; margin-bottom: 6px; font-family: var(--font-heading); color: #1e293b;">Full Name</label>
                            <input id="demo-name" type="text" required placeholder="Alex Turner" style="width: 100%; padding: 10px 14px; border: 1.5px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; font-family: var(--font-heading); outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='#ea580c'" onblur="this.style.borderColor='#e2e8f0'">
                        </div>
                        <div>
                            <label for="demo-email" style="display: block; font-size: 0.8125rem; font-weight: 600; margin-bottom: 6px; font-family: var(--font-heading); color: #1e293b;">Email Address</label>
                            <input id="demo-email" type="email" required placeholder="alex@example.com" style="width: 100%; padding: 10px 14px; border: 1.5px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; font-family: var(--font-heading); outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='#ea580c'" onblur="this.style.borderColor='#e2e8f0'">
                        </div>
                        <div>
                            <label for="demo-interest" style="display: block; font-size: 0.8125rem; font-weight: 600; margin-bottom: 6px; font-family: var(--font-heading); color: #1e293b;">Course of Interest</label>
                            <select id="demo-interest" required style="width: 100%; padding: 10px 14px; border: 1.5px solid #e2e8f0; border-radius: 8px; font-size: 0.875rem; background: #fff; font-family: var(--font-heading); outline: none; cursor: pointer;">
                                <option value="" disabled selected>Loading courses...</option>
                            </select>
                        </div>
                        <button type="submit" class="button button--primary" style="margin-top: 8px; padding: 12px 20px; border-radius: 9999px; font-family: var(--font-heading); font-weight: 700; background: linear-gradient(135deg, #ea580c 0%, #f97316 100%); color: #fff; border: none; box-shadow: 0 4px 14px rgba(234, 88, 12, 0.35); cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 6px 20px rgba(234, 88, 12, 0.45)';" onmouseout="this.style.transform='none'; this.style.boxShadow='0 4px 14px rgba(234, 88, 12, 0.35)';">
                            Confirm Demo Booking
                        </button>
                    </form>
                </div>
                <div id="demo-modal-success" style="display: none; text-align: center; padding: 20px 0;">
                    <div style="width: 52px; height: 52px; background: #ffedd5; color: #ea580c; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 1.6rem; margin-bottom: 16px; font-weight: bold;">&check;</div>
                    <h3 style="margin-bottom: 8px; font-family: var(--font-heading); color: #0f172a;">Demo Request Received</h3>
                    <p style="font-size: 0.875rem; color: #64748b; margin-bottom: 20px; line-height: 1.5;">
                        Thank you! An Edutech technical advisor will contact you within 24 hours to schedule your personalized live platform demonstration.
                    </p>
                    <button type="button" class="button button--primary" id="demo-success-done" style="border-radius: 9999px; padding: 10px 28px; font-family: var(--font-heading); background: linear-gradient(135deg, #ea580c 0%, #f97316 100%); color: #fff; border: none; font-weight: 600; cursor: pointer;">Close</button>
                </div>
            </div>
        </div>
    `;

    initializeNavbarInteractions();
}

/**
 * Initializes desktop hover/click dropdowns, mobile drawer accordions,
 * scroll shadow effects, search shortcuts, and demo modal interactions.
 */
function initializeNavbarInteractions() {
    const header = document.getElementById("site-header");
    const dropdownItems = document.querySelectorAll(".nav-item.has-dropdown");
    let closeTimeout = null;

    // --- 1. Desktop Dropdowns ---
    dropdownItems.forEach(function (item) {
        const trigger = item.querySelector(".nav-trigger");

        function openMenu() {
            if (closeTimeout) {
                clearTimeout(closeTimeout);
                closeTimeout = null;
            }

            dropdownItems.forEach(function (otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove("is-open");
                    const otherTrigger = otherItem.querySelector(".nav-trigger");
                    if (otherTrigger) {
                        otherTrigger.setAttribute("aria-expanded", "false");
                    }
                }
            });

            item.classList.add("is-open");
            if (trigger) {
                trigger.setAttribute("aria-expanded", "true");
            }
        }

        function closeMenu() {
            closeTimeout = setTimeout(function () {
                item.classList.remove("is-open");
                if (trigger) {
                    trigger.setAttribute("aria-expanded", "false");
                }
            }, 120);
        }

        item.addEventListener("mouseenter", openMenu);
        item.addEventListener("mouseleave", closeMenu);

        if (trigger) {
            trigger.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopPropagation();
                const isOpen = item.classList.contains("is-open");
                if (isOpen) {
                    item.classList.remove("is-open");
                    trigger.setAttribute("aria-expanded", "false");
                } else {
                    openMenu();
                }
            });
        }
    });

    // Close on click outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".nav-desktop")) {
            dropdownItems.forEach(function (item) {
                item.classList.remove("is-open");
                const trigger = item.querySelector(".nav-trigger");
                if (trigger) {
                    trigger.setAttribute("aria-expanded", "false");
                }
            });
        }
    });

    // Close on Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            dropdownItems.forEach(function (item) {
                item.classList.remove("is-open");
                const trigger = item.querySelector(".nav-trigger");
                if (trigger) {
                    trigger.setAttribute("aria-expanded", "false");
                }
            });
            closeMobileNav();
            closeDemoModal();
        }
    });

    // --- 2. Search Keyboard Shortcut (Ctrl+K / Cmd+K) ---
    document.addEventListener("keydown", function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
            const desktopInput = document.getElementById("desktop-search-input");
            if (desktopInput && window.innerWidth > 992) {
                event.preventDefault();
                desktopInput.focus();
                desktopInput.select();
            }
        }
    });

    // --- 3. Header Scroll Shadow Effect ---
    window.addEventListener("scroll", function () {
        if (!header) return;
        if (window.scrollY > 10) {
            header.classList.add("is-scrolled");
        } else {
            header.classList.remove("is-scrolled");
        }
    }, { passive: true });

    // --- 4. Mobile Navigation Drawer & Hamburger ---
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const mobileNav = document.getElementById("mobile-navigation");
    const mobileBackdrop = document.getElementById("mobile-nav-backdrop");

    function openMobileNav() {
        if (!menuToggle || !mobileNav || !mobileBackdrop) return;
        menuToggle.classList.add("is-open");
        menuToggle.setAttribute("aria-expanded", "true");
        mobileNav.classList.add("is-open");
        mobileNav.setAttribute("aria-hidden", "false");
        mobileBackdrop.classList.add("is-open");
        mobileBackdrop.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeMobileNav() {
        if (!menuToggle || !mobileNav || !mobileBackdrop) return;
        menuToggle.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("is-open");
        mobileNav.setAttribute("aria-hidden", "true");
        mobileBackdrop.classList.remove("is-open");
        mobileBackdrop.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            const isOpen = menuToggle.classList.contains("is-open");
            if (isOpen) {
                closeMobileNav();
            } else {
                openMobileNav();
            }
        });
    }

    if (mobileBackdrop) {
        mobileBackdrop.addEventListener("click", closeMobileNav);
    }

    // Mobile accordions
    const accordionButtons = document.querySelectorAll(".mobile-nav__accordion-btn");
    accordionButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const isExpanded = btn.getAttribute("aria-expanded") === "true";
            const panelId = btn.getAttribute("aria-controls");
            const panel = document.getElementById(panelId);

            btn.setAttribute("aria-expanded", isExpanded ? "false" : "true");
            btn.classList.toggle("is-expanded", !isExpanded);

            if (panel) {
                panel.classList.toggle("is-open", !isExpanded);
            }
        });
    });

    if (mobileNav) {
        const mobileLinks = mobileNav.querySelectorAll("a");
        mobileLinks.forEach(function (link) {
            link.addEventListener("click", closeMobileNav);
        });
    }

    // --- 5. Book a Demo Modal ---
    const demoModal = document.getElementById("demo-modal");
    const demoModalClose = document.getElementById("demo-modal-close");
    const demoForm = document.getElementById("demo-form");
    const demoFormContainer = document.getElementById("demo-modal-form-container");
    const demoSuccessContainer = document.getElementById("demo-modal-success");
    const demoSuccessDone = document.getElementById("demo-success-done");
    const desktopDemoBtn = document.getElementById("nav-demo-btn");
    const mobileDemoBtn = document.getElementById("mobile-demo-btn");

    const demoInterestSelect = document.getElementById("demo-interest");

    // Populate demo modal courses dropdown from data/courses.json
    function populateDemoCourses() {
        if (!demoInterestSelect) return;
        fetch("data/courses.json")
            .then(function (res) { return res.json(); })
            .then(function (courses) {
                if (Array.isArray(courses) && courses.length > 0) {
                    demoInterestSelect.innerHTML = `<option value="" disabled selected>Select a program to demo...</option>`;
                    courses.forEach(function (c) {
                        const opt = document.createElement("option");
                        opt.value = c.id;
                        opt.textContent = `${c.title} (${c.duration || '8 Weeks'})`;
                        demoInterestSelect.appendChild(opt);
                    });
                    const allOpt = document.createElement("option");
                    allOpt.value = "all-platform";
                    allOpt.textContent = "Full Platform Overview (All Courses)";
                    demoInterestSelect.appendChild(allOpt);
                }
            })
            .catch(function (err) {
                console.warn("Could not load courses for demo dropdown, using default options:", err);
                if (demoInterestSelect) {
                    demoInterestSelect.innerHTML = `
                        <option value="full-stack-development">Full-Stack Web Engineering</option>
                        <option value="python-programming">Python Programming & Automation</option>
                        <option value="data-analytics">Data Analytics & Intelligence</option>
                        <option value="cloud-devops">Cloud & DevOps Architecture</option>
                        <option value="cyber-security">Cyber Security & Ethical Defense</option>
                        <option value="all-platform">Full Platform Overview</option>
                    `;
                }
            });
    }
    populateDemoCourses();

    function openDemoModal() {
        if (!demoModal) return;
        demoModal.classList.add("is-active");
        if (demoInterestSelect && demoInterestSelect.options.length <= 1) {
            populateDemoCourses();
        }
        if (demoFormContainer && demoSuccessContainer) {
            demoFormContainer.style.display = "block";
            demoSuccessContainer.style.display = "none";
        }
        closeMobileNav();
    }

    function closeDemoModal() {
        if (!demoModal) return;
        demoModal.classList.remove("is-active");
    }

    if (desktopDemoBtn) {
        desktopDemoBtn.addEventListener("click", openDemoModal);
    }

    if (mobileDemoBtn) {
        mobileDemoBtn.addEventListener("click", openDemoModal);
    }

    if (demoModalClose) {
        demoModalClose.addEventListener("click", closeDemoModal);
    }

    if (demoSuccessDone) {
        demoSuccessDone.addEventListener("click", closeDemoModal);
    }

    if (demoModal) {
        demoModal.addEventListener("click", function (event) {
            if (event.target === demoModal) {
                closeDemoModal();
            }
        });
    }

    if (demoForm) {
        demoForm.addEventListener("submit", function (event) {
            event.preventDefault();
            if (demoFormContainer && demoSuccessContainer) {
                demoFormContainer.style.display = "none";
                demoSuccessContainer.style.display = "block";
            }
        });
    }
}

// Render immediately if DOM is ready, or on DOMContentLoaded
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderNavbar);
} else {
    renderNavbar();
}