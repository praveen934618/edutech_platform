/**
 * Courses Page
 *
 * Loads courses through the course service
 * and renders them using the reusable course card.
 */

document.addEventListener("DOMContentLoaded", initializeCoursesPage);

async function initializeCoursesPage() {
  const courseList = document.getElementById("course-list");

  if (!courseList) {
    return;
  }

  try {
    const courses = await getCourses();
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("search");
    const categoryQuery = urlParams.get("category");

    let filteredCourses = courses;

    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim();
      filteredCourses = filteredCourses.filter(function (course) {
        return (
          (course.title && course.title.toLowerCase().includes(q)) ||
          (course.shortDescription && course.shortDescription.toLowerCase().includes(q)) ||
          (course.description && course.description.toLowerCase().includes(q)) ||
          (course.category && course.category.toLowerCase().includes(q)) ||
          (Array.isArray(course.skills) && course.skills.some(s => s.toLowerCase().includes(q)))
        );
      });

      const heading = document.querySelector(".section-heading h2");
      if (heading) {
        heading.textContent = `Search Results for "${searchQuery}" (${filteredCourses.length})`;
      }
    } else if (categoryQuery) {
      filteredCourses = filteredCourses.filter(function (course) {
        return course.category && course.category.toLowerCase() === categoryQuery.toLowerCase();
      });

      const heading = document.querySelector(".section-heading h2");
      if (heading) {
        heading.textContent = `${categoryQuery} Courses (${filteredCourses.length})`;
      }
    }

    renderCourses(courseList, filteredCourses);

    console.log("Courses loaded successfully:", filteredCourses.length);
  } catch (error) {
    console.error("Unable to load courses:", error);

    renderCourseError(courseList);
  }
}

/**
 * Render course cards.
 *
 * @param {HTMLElement} container
 * @param {Array} courses
 */
function renderCourses(container, courses) {
  container.innerHTML = "";

  if (!Array.isArray(courses) || courses.length === 0) {
    container.innerHTML = `
            <div class="state state--empty">

                <h3>
                    No courses available
                </h3>

                <p>
                    Courses will appear here once
                    they are added to the platform.
                </p>

            </div>
        `;

    return;
  }

  courses.forEach(function (course) {
    const courseCard = createCourseCard(course);

    container.appendChild(courseCard);
  });
}

/**
 * Render loading/data error state.
 *
 * @param {HTMLElement} container
 */
function renderCourseError(container) {
  container.innerHTML = `
        <div class="state state--error">

            <h3>
                Unable to load courses
            </h3>

            <p>
                Please refresh the page and try again.
            </p>

        </div>
    `;
}
