/**
 * Course detail page functionality.
 *
 * Temporary mock data is used during frontend development.
 * This will later be replaced with Supabase data.
 */

document.addEventListener("DOMContentLoaded", function () {
  const course = {
    title: "Sample Course",
    category: "Sample Category",
    description:
      "This is placeholder course content used to test the course detail page.",
    instructor: "Sample Instructor",
    level: "Beginner",
    duration: "Coming soon",

    modules: [
      {
        title: "Module 1: Getting Started",
        lessons: [
          "Introduction",
          "Understanding the basics",
          "Setting up your learning environment",
        ],
      },
      {
        title: "Module 2: Core Concepts",
        lessons: ["Core concept 1", "Core concept 2", "Practical examples"],
      },
    ],
  };

  const courseCategory = document.getElementById("course-category");

  const courseTitle = document.getElementById("course-title");

  const courseDescription = document.getElementById("course-description");

  const courseInstructor = document.getElementById("course-instructor");

  const courseLevel = document.getElementById("course-level");

  const courseDuration = document.getElementById("course-duration");

  const courseCurriculum = document.getElementById("course-curriculum");

  if (courseCategory) {
    courseCategory.textContent = course.category;
  }

  if (courseTitle) {
    courseTitle.textContent = course.title;
  }

  if (courseDescription) {
    courseDescription.textContent = course.description;
  }

  if (courseInstructor) {
    courseInstructor.textContent = course.instructor;
  }

  if (courseLevel) {
    courseLevel.textContent = course.level;
  }

  if (courseDuration) {
    courseDuration.textContent = course.duration;
  }

  if (courseCurriculum) {
    courseCurriculum.innerHTML = "";

    course.modules.forEach(function (module) {
      const moduleElement = createCourseModule(module);

      courseCurriculum.appendChild(moduleElement);
    });
  }

  console.log("Course detail page loaded successfully.");
});
