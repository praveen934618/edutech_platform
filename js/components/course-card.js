/**
 * Reusable course card component.
 *
 * This component only handles presentation.
 * Course data will eventually come from Supabase.
 */

function createCourseCard(course) {
  const article = document.createElement("article");

  article.className = "card course-card";

  const title = course.title || "Untitled Course";
  const description = course.description || "Course description coming soon.";
  const category = course.category || "Course";
  const instructor = course.instructor || "Instructor information coming soon.";

  article.innerHTML = `
        <div class="course-card__content">

            <p class="eyebrow">
                ${escapeCourseCardText(category)}
            </p>

            <h3 class="course-card__title">
                ${escapeCourseCardText(title)}
            </h3>

            <p class="course-card__description">
                ${escapeCourseCardText(description)}
            </p>

            <p class="course-card__instructor">
                ${escapeCourseCardText(instructor)}
            </p>

            <a
                class="button button--primary"
                href="course-detail.html"
            >
                View Course
            </a>

        </div>
    `;

  return article;
}

/**
 * Prevent course data from being interpreted as HTML.
 */
function escapeCourseCardText(value) {
  const element = document.createElement("div");
  element.textContent = String(value);
  return element.innerHTML;
}
