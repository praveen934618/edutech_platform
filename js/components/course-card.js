/**
 * Reusable Course Card Component
 *
 * Renders modern, bold course cards matching the project's color palette
 * (clean white/warm surface, dark orange flame, purple score badge,
 * instructor avatar, level pill, and interactive bookmark button).
 *
 * All data is supplied dynamically from courses.json.
 */

function createCourseCard(course) {
  const article = document.createElement("article");
  article.className = "course-card";
  article.dataset.courseId = course.id || "";

  const courseId = course.id || "";
  const title = course.title || "Untitled Course";
  const level = course.level || "Beginner";
  const image = course.image || "assets/images/courses/python.jpg";

  // Instructor
  const instructor = course.instructor || {};
  const instructorName = instructor.name || "Instructor";
  const instructorAvatar = instructor.avatar || "assets/images/instructors/alex.jpg";

  // Stats (Flame, Clock, Score)
  const stats = course.stats || {};
  const flameVal = stats.flameValue || "550";
  const flameLbl = stats.flameLabel || "XP";
  const durationVal = stats.durationValue || (course.duration ? course.duration.replace(/[^0-9]/g, "") : "25");
  const durationLbl = stats.durationLabel || "modules";
  const scoreVal = stats.scoreValue || "+3";
  const scoreLbl = stats.scoreLabel || "score";

  const priceFormatted = formatCoursePrice(course.price, course.currency);

  article.innerHTML = `
    <!-- Top Visual with Level Badge & Bookmark -->
    <div class="course-card__media">
      <img
        class="course-card__image"
        src="${escapeCourseCardText(image)}"
        alt="${escapeCourseCardText(title)}"
        loading="lazy"
        onerror="this.style.display='none'; this.parentElement.classList.add('course-card__media--fallback');"
      >
      <div class="course-card__overlay" aria-hidden="true"></div>

      <!-- Top-left Level Pill -->
      <span class="course-card__level-badge">
        ${escapeCourseCardText(level)}
      </span>

      <!-- Top-right Bookmark Button -->
      <button
        type="button"
        class="course-card__bookmark-btn"
        aria-label="Bookmark course"
        title="Bookmark ${escapeCourseCardText(title)}"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>

    <!-- Card Body Content -->
    <div class="course-card__body">
      <!-- Title -->
      <h3 class="course-card__title">
        <a href="course-detail.html?id=${encodeURIComponent(courseId)}" class="course-card__title-link">
          ${escapeCourseCardText(title)}
        </a>
      </h3>

      <!-- Instructor Info -->
      <div class="course-card__instructor">
        <img
          class="course-card__avatar"
          src="${escapeCourseCardText(instructorAvatar)}"
          alt="${escapeCourseCardText(instructorName)}"
          loading="lazy"
          onerror="this.style.display='none';"
        >
        <span class="course-card__instructor-name">
          ${escapeCourseCardText(instructorName)}
        </span>
      </div>

      <!-- 3 Stats Row (Flame, Clock, Score) -->
      <div class="course-card__stats" aria-label="Course metrics">
        <!-- Flame Metric (Dark Orange #ea580c) -->
        <div class="course-stat course-stat--flame" title="Learning XP">
          <div class="course-stat__icon-row">
            <svg class="course-stat__icon course-stat__icon--flame" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 23c-4.97 0-9-3.8-9-8.5 0-3.35 2.1-6.75 4.6-9.1.5-.47 1.3-.22 1.45.43.3 1.35 1.15 2.67 2.25 3.37.5.32 1.15-.05 1.15-.65 0-2.3 1.1-4.7 2.85-6.35.45-.42 1.2-.17 1.3.43.5 3 2.5 5.5 4.4 7.6C21.75 12 21 14.5 21 14.5c0 4.7-4.03 8.5-9 8.5z"/>
            </svg>
            <span class="course-stat__val">${escapeCourseCardText(flameVal)}</span>
          </div>
          <span class="course-stat__label">${escapeCourseCardText(flameLbl)}</span>
        </div>

        <!-- Duration Metric (Clock Icon) -->
        <div class="course-stat course-stat--duration" title="Course Duration">
          <div class="course-stat__icon-row">
            <svg class="course-stat__icon course-stat__icon--clock" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span class="course-stat__val">${escapeCourseCardText(durationVal)}</span>
          </div>
          <span class="course-stat__label">${escapeCourseCardText(durationLbl)}</span>
        </div>

        <!-- Score Metric (Purple Badge Icon) -->
        <div class="course-stat course-stat--score" title="Career Credits">
          <div class="course-stat__icon-row">
            <span class="course-stat__plus-badge" aria-hidden="true">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </span>
            <span class="course-stat__val">${escapeCourseCardText(scoreVal)}</span>
          </div>
          <span class="course-stat__label">${escapeCourseCardText(scoreLbl)}</span>
        </div>
      </div>

      <!-- Action Footer with Price & Enroll Button -->
      <div class="course-card__footer">
        <span class="course-card__price">${escapeCourseCardText(priceFormatted)}</span>
        <a href="course-detail.html?id=${encodeURIComponent(courseId)}" class="course-card__btn">
          <span>Details</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </div>
  `;

  // Wire up Bookmark button toggle
  const bookmarkBtn = article.querySelector(".course-card__bookmark-btn");
  if (bookmarkBtn) {
    bookmarkBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const isSaved = bookmarkBtn.classList.toggle("is-saved");
      const svg = bookmarkBtn.querySelector("svg");
      if (isSaved) {
        svg.setAttribute("fill", "#ea580c");
        svg.setAttribute("stroke", "#ea580c");
        bookmarkBtn.setAttribute("aria-label", "Remove bookmark");
      } else {
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke", "currentColor");
        bookmarkBtn.setAttribute("aria-label", "Bookmark course");
      }
    });
  }

  return article;
}

/**
 * Format course price.
 */
function formatCoursePrice(price, currency) {
  if (price === undefined || price === null) {
    return "Contact us";
  }

  if (currency === "INR") {
    return `₹${Number(price).toLocaleString("en-IN")}`;
  }

  return `${currency || ""} ${price}`;
}

/**
 * Prevent course data from being interpreted as HTML.
 */
function escapeCourseCardText(value) {
  const element = document.createElement("div");
  element.textContent = String(value);
  return element.innerHTML;
}
