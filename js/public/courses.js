/**
 * Courses page functionality.
 *
 * Temporary mock data is used during frontend development.
 * This will later be replaced with Supabase data.
 */

document.addEventListener("DOMContentLoaded", function () {
    const courseList = document.getElementById("course-list");

    if (!courseList) {
        return;
    }

    const mockCourses = [
        {
            title: "Sample Course",
            description:
                "This is placeholder course content used to test the reusable course card.",
            category: "Sample Category",
            instructor: "Sample Instructor"
        }
    ];

    courseList.innerHTML = "";

    mockCourses.forEach(function (course) {
        const courseCard = createCourseCard(course);
        courseList.appendChild(courseCard);
    });

    console.log("Courses page loaded successfully.");
});