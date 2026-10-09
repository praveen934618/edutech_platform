/**
 * Reusable course module component.
 *
 * Displays a styled curriculum module card with lesson rows, icons, and status badges.
 */

function createCourseModule(module, moduleIndex = 0) {
  const article = document.createElement("article");
  article.className = "course-module-card";

  const title = module.title || "Untitled Module";
  const lessons = Array.isArray(module.lessons) ? module.lessons : [];
  const padIndex = String(moduleIndex + 1).padStart(2, "0");

  const lessonTypes = ["Hands-on Lab", "Guided Project", "Architecture Deep Dive", "Practical Exercise"];

  article.innerHTML = `
    <div class="course-module__header">
      <div class="course-module__header-left">
        <span class="course-module__num-badge" aria-label="Module ${moduleIndex + 1}">${padIndex}</span>
        <h3 class="course-module__title-text">
          ${escapeCourseModuleText(title)}
        </h3>
      </div>
      <div class="course-module__meta-pill">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
          <path d="M6 6h10"></path>
          <path d="M6 10h10"></path>
        </svg>
        <span>${lessons.length} ${lessons.length === 1 ? "Lesson" : "Lessons"}</span>
      </div>
    </div>

    <div class="course-module__lessons-list">
      ${
        lessons.length > 0
          ? lessons
              .map(function (lesson, index) {
                const tagType = lessonTypes[index % lessonTypes.length];
                return `
                  <div class="course-module__lesson-row">
                    <div class="course-module__lesson-left">
                      <span class="course-module__lesson-icon" aria-hidden="true">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </span>
                      <span class="course-module__lesson-name">
                        ${escapeCourseModuleText(lesson)}
                      </span>
                    </div>
                    <span class="course-module__lesson-type">
                      ${tagType}
                    </span>
                  </div>
                `;
              })
              .join("")
          : `
              <p style="color: #94a3b8; font-size: 0.875rem; padding: 10px 0;">
                Curriculum syllabus loading...
              </p>
            `
      }
    </div>
  `;

  return article;
}

/**
 * Prevent course module data from being interpreted as HTML.
 */
function escapeCourseModuleText(value) {
  const element = document.createElement("div");
  element.textContent = String(value);
  return element.innerHTML;
}
