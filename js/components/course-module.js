/**
 * Reusable course module component.
 *
 * Displays a module and its lessons.
 * Course data will eventually come from Supabase.
 */

function createCourseModule(module) {
  const article = document.createElement("article");

  article.className = "card course-module";

  const title = module.title || "Untitled Module";
  const lessons = Array.isArray(module.lessons) ? module.lessons : [];

  article.innerHTML = `
        <div class="course-module__content">

            <h3 class="course-module__title">
                ${escapeCourseModuleText(title)}
            </h3>

            <div class="course-module__lessons">
                ${
                  lessons.length > 0
                    ? lessons
                        .map(function (lesson, index) {
                          return `
                                    <div class="course-module__lesson">
                                        <span>
                                            ${index + 1}.
                                        </span>

                                        <span>
                                            ${escapeCourseModuleText(lesson)}
                                        </span>
                                    </div>
                                `;
                        })
                        .join("")
                    : `
                            <p>
                                Lessons coming soon.
                            </p>
                        `
                }
            </div>

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
