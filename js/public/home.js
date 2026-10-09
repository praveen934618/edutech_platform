/**
 * Homepage Controller
 *
 * Loads homepage content from the content and course services.
 */

document.addEventListener("DOMContentLoaded", initializeHomePage);

async function initializeHomePage() {
  try {
    const site = await getSiteContent();
    const hero = await getHeroContent();
    const homepage = await getHomepageContent();
    const statistics = await getStatistics();
    const featuredCourses = await getFeaturedCourses();

    renderPageMetadata(site);
    renderHero(hero);
    renderHomepageContent(homepage);
    renderStatistics(statistics);
    renderFeaturedCourses(featuredCourses);
  } catch (error) {
    console.error("Unable to initialize homepage:", error);
  }
}

/**
 * Render SEO metadata.
 */
function renderPageMetadata(site) {
  if (site.seo) {
    document.title = site.seo.title;

    const description = document.getElementById("meta-description");

    if (description) {
      description.setAttribute("content", site.seo.description || "");
    }
  }
}

/**
 * Render hero section.
 */
function renderHero(hero) {
  if (!hero) return;

  const eyebrow = document.getElementById("hero-eyebrow");
  const title = document.getElementById("hero-title");
  const description = document.getElementById("hero-description");
  const primaryButton = document.getElementById("hero-primary-button");
  const secondaryButton = document.getElementById("hero-secondary-button");

  if (eyebrow && hero.eyebrow) {
    const badgeText = eyebrow.querySelector(".hero-badge__text");
    if (badgeText) {
      badgeText.textContent = hero.eyebrow;
    } else {
      eyebrow.textContent = hero.eyebrow;
    }
  }

  if (title && hero.title) {
    title.innerHTML = hero.title;
  }

  if (description && hero.description) {
    description.textContent = hero.description;
  }

  if (primaryButton && hero.primaryButton) {
    const btnText = primaryButton.querySelector(".hero-btn__text");
    if (btnText) {
      btnText.textContent = hero.primaryButton.label;
    } else {
      primaryButton.textContent = hero.primaryButton.label;
    }

    if (hero.primaryButton.url) {
      primaryButton.href = hero.primaryButton.url;
    }
  }

  if (secondaryButton && hero.secondaryButton) {
    const btnText = secondaryButton.querySelector(".hero-btn__text");
    if (btnText) {
      btnText.textContent = hero.secondaryButton.label;
    } else {
      secondaryButton.textContent = hero.secondaryButton.label;
    }

    if (hero.secondaryButton.url) {
      secondaryButton.href = hero.secondaryButton.url;
    }
  }
}

/**
 * Render homepage sections.
 */
function renderHomepageContent(homepage) {
  const featuredTitle = document.getElementById("featured-courses-title");

  const featuredDescription = document.getElementById(
    "featured-courses-description",
  );

  const whyTitle = document.getElementById("why-choose-title");

  const whyDescription = document.getElementById("why-choose-description");

  const ctaTitle = document.getElementById("cta-title");

  const ctaDescription = document.getElementById("cta-description");

  const ctaButton = document.getElementById("cta-button");

  if (featuredTitle) {
    featuredTitle.textContent = homepage.featuredCoursesTitle || "";
  }

  if (featuredDescription) {
    featuredDescription.textContent = homepage.featuredCoursesDescription || "";
  }

  if (whyTitle) {
    whyTitle.textContent = homepage.whyChooseUsTitle || "";
  }

  if (whyDescription) {
    whyDescription.textContent = homepage.whyChooseUsDescription || "";
  }

  if (ctaTitle) {
    ctaTitle.textContent = homepage.ctaTitle || "";
  }

  if (ctaDescription) {
    ctaDescription.textContent = homepage.ctaDescription || "";
  }

  if (ctaButton) {
    ctaButton.textContent = homepage.ctaButtonLabel || "";

    ctaButton.href = homepage.ctaButtonUrl || "courses.html";
  }
}

/**
 * Render statistics.
 */
function renderStatistics(statistics) {
  const container = document.getElementById("statistics-container");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  statistics.forEach(function (statistic) {
    const article = document.createElement("article");
    article.className = "stat-card";

    article.innerHTML = `
      <div class="stat-card__number">
        ${escapeHTML(statistic.value)}
      </div>
      <div class="stat-card__label">
        ${escapeHTML(statistic.label)}
      </div>
    `;

    container.appendChild(article);
  });
}

/**
 * Render featured courses.
 */
function renderFeaturedCourses(courses) {
  const container = document.getElementById("featured-courses");

  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (!courses.length) {
    container.innerHTML = `
      <div class="state">
        <h3 class="state__title">
          Courses Coming Soon
        </h3>
        <p class="state__message">
          New courses will be available soon.
        </p>
      </div>
    `;
    return;
  }

  courses.forEach(function (course) {
    const card = createCourseCard(course);
    container.appendChild(card);
  });

  setupCoursesCarousel(container);
}

/**
 * Interactive Side-by-Side Carousel Controller
 *
 * Handles:
 * 1. Desktop side-by-side active card highlight & scale
 * 2. Next / Prev navigation button clicks with smooth slide & highlight
 * 3. Card click to center and highlight
 * 4. Horizontal scroll center-detection
 * 5. Mobile vertical rolling stack interaction
 */
function setupCoursesCarousel(container) {
  const cards = Array.from(container.querySelectorAll(".course-card"));
  if (cards.length === 0) return;

  const prevBtn = document.getElementById("carousel-prev-btn");
  const nextBtn = document.getElementById("carousel-next-btn");

  let activeIndex = 0;

  function setActiveCard(index, shouldScroll = true) {
    if (index < 0) index = 0;
    if (index >= cards.length) index = cards.length - 1;

    activeIndex = index;

    cards.forEach((card, i) => {
      if (i === activeIndex) {
        card.classList.add("is-active");
        card.setAttribute("aria-current", "true");
      } else {
        card.classList.remove("is-active");
        card.removeAttribute("aria-current");
      }
    });

    if (shouldScroll) {
      cards[activeIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }

  // Activate first card on load
  setActiveCard(0, false);

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const nextIndex = (activeIndex + 1) % cards.length;
      setActiveCard(nextIndex, true);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const prevIndex = (activeIndex - 1 + cards.length) % cards.length;
      setActiveCard(prevIndex, true);
    });
  }

  // Click on card to activate and center
  cards.forEach((card, i) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".course-card__bookmark-btn") || e.target.closest(".course-card__btn")) {
        return;
      }
      setActiveCard(i, true);
    });
  });

  // Desktop horizontal scroll detection
  let scrollDebounce;
  container.addEventListener("scroll", () => {
    clearTimeout(scrollDebounce);
    scrollDebounce = setTimeout(() => {
      if (window.innerWidth <= 768) return;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestIndex = activeIndex;
      let minDistance = Infinity;

      cards.forEach((card, idx) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveCard(closestIndex, false);
      }
    }, 60);
  }, { passive: true });

  // Mobile Rolling Stacking Effect on vertical scroll
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      if (window.innerWidth > 768) return;
      entries.forEach((entry) => {
        const card = entry.target;
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          card.classList.add("is-active");
        }
      });
    }, { threshold: [0.3, 0.6] });

    cards.forEach((card) => observer.observe(card));
  }
}

/**
 * Basic HTML escaping helper.
 */
function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
