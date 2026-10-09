/**
 * Course Detail Page Controller
 *
 * Reads course ID from URL, loads course through course service,
 * and renders full dynamic details (image, stats, instructor, skills, curriculum)
 * from data/courses.json.
 */

document.addEventListener("DOMContentLoaded", initializeCourseDetailPage);

async function initializeCourseDetailPage() {
  const courseId = getCourseIdFromUrl();

  if (!courseId) {
    renderCourseNotFound();
    return;
  }

  try {
    const course = await getCourseById(courseId);

    if (!course) {
      renderCourseNotFound();
      return;
    }

    renderCourseDetails(course);
    console.log("Course loaded successfully:", course.title);
  } catch (error) {
    console.error("Unable to load course:", error);
    renderCourseError();
  }
}

/**
 * Get course ID from URL.
 * Example: course-detail.html?id=python-programming
 */
function getCourseIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

/**
 * Render complete course information.
 *
 * @param {Object} course
 */
function renderCourseDetails(course) {
  const courseCategory = document.getElementById("course-category");
  const courseLevelBadge = document.getElementById("course-level-badge");
  const courseTitle = document.getElementById("course-title");
  const courseDescription = document.getElementById("course-description");
  const courseImage = document.getElementById("course-image");
  const coursePrice = document.getElementById("course-price");

  const courseInstructor = document.getElementById("course-instructor");
  const courseInstructorRole = document.getElementById("course-instructor-role");
  const courseInstructorAvatar = document.getElementById("course-instructor-avatar");

  const courseFlameVal = document.getElementById("course-flame-val");
  const courseDurationVal = document.getElementById("course-duration-val");
  const courseScoreVal = document.getElementById("course-score-val");

  const courseSkills = document.getElementById("course-skills");
  const courseCurriculum = document.getElementById("course-curriculum");
  const enrollButton = document.getElementById("course-enroll-button");

  // Document Title
  if (course.title) {
    document.title = `${course.title} | Edutech`;
  }

  // Category & Level
  if (courseCategory) {
    courseCategory.textContent = course.category || "Course Track";
  }

  if (courseLevelBadge) {
    courseLevelBadge.textContent = course.level || "Beginner";
  }

  // Title & Description
  if (courseTitle) {
    courseTitle.textContent = course.title || "Course Title";
  }

  if (courseDescription) {
    courseDescription.textContent = course.description || course.shortDescription || "";
  }

  // Stats Metrics
  const stats = course.stats || {};
  if (courseFlameVal) {
    courseFlameVal.textContent = stats.flameValue || "550";
  }
  if (courseDurationVal) {
    courseDurationVal.textContent = course.duration || "8 Weeks";
  }
  if (courseScoreVal) {
    courseScoreVal.textContent = stats.scoreValue || "+3";
  }

  // Price & Enroll CTA
  if (coursePrice) {
    coursePrice.textContent = formatDetailPrice(course.price, course.currency);
  }

  if (enrollButton) {
    enrollButton.href = `register.html?course=${encodeURIComponent(course.id)}`;
  }

  // Course Media Banner
  if (courseImage && course.image) {
    courseImage.src = course.image;
    courseImage.alt = course.title || "Course banner";
    courseImage.onerror = function () {
      this.src = "assets/images/courses/python.jpg";
    };
  }

  // Instructor
  const instructor = course.instructor || {};
  if (courseInstructor) {
    courseInstructor.textContent = instructor.name || (typeof course.instructor === "string" ? course.instructor : "Expert Instructor");
  }

  if (courseInstructorRole) {
    courseInstructorRole.textContent = instructor.role || "Lead Track Instructor";
  }

  if (courseInstructorAvatar && instructor.avatar) {
    courseInstructorAvatar.src = instructor.avatar;
    courseInstructorAvatar.alt = instructor.name || "Instructor";
    courseInstructorAvatar.onerror = function () {
      this.src = "assets/images/instructors/alex.jpg";
    };
  }

  // Skills Pills
  if (courseSkills) {
    courseSkills.innerHTML = "";
    const skillsList = Array.isArray(course.skills) ? course.skills : ["Practical Projects", "Code Reviews", "Industry Labs"];
    skillsList.forEach(function (skill) {
      const span = document.createElement("span");
      span.className = "course-skill-pill";
      span.textContent = skill;
      courseSkills.appendChild(span);
    });
  }

  // Curriculum Modules
  renderCourseCurriculum(courseCurriculum, course.modules);
}

/**
 * Format currency price
 */
function formatDetailPrice(price, currency = "INR") {
  if (price === 0 || price === "0") {
    return "Free";
  }
  if (!price) {
    return "₹4,999";
  }
  const symbol = currency === "INR" ? "₹" : "$";
  return `${symbol}${Number(price).toLocaleString()}`;
}

/**
 * Render course modules and lessons.
 *
 * @param {HTMLElement} container
 * @param {Array} modules
 */
function renderCourseCurriculum(container, modules) {
  if (!container) return;

  container.innerHTML = "";

  if (!Array.isArray(modules) || modules.length === 0) {
    container.innerHTML = `
      <div class="state state--empty">
        <h3>Curriculum coming soon</h3>
        <p>Course modules and lessons will be available soon.</p>
      </div>
    `;
    return;
  }

  modules.forEach(function (module, index) {
    if (typeof createCourseModule === "function") {
      const moduleElement = createCourseModule(module, index);
      container.appendChild(moduleElement);
    }
  });
}

/**
 * Render course-not-found state.
 */
function renderCourseNotFound() {
  const main = document.querySelector("main");
  if (!main) return;

  main.innerHTML = `
    <section class="content-section">
      <div class="container">
        <div class="state state--empty">
          <h1>Course Not Found</h1>
          <p>The course track you are looking for does not exist or has been moved.</p>
          <a href="courses.html" class="button button--primary">Browse All Courses</a>
        </div>
      </div>
    </section>
  `;
}

/**
 * Render loading/data error state.
 */
function renderCourseError() {
  const main = document.querySelector("main");
  if (!main) return;

  main.innerHTML = `
    <section class="content-section">
      <div class="container">
        <div class="state state--error">
          <h1>Unable to Load Course</h1>
          <p>Please refresh the page or return to the courses catalogue.</p>
          <a href="courses.html" class="button button--primary">Back to Courses</a>
        </div>
      </div>
    </section>
  `;
}
