/**
 * Course Service
 *
 * Handles course data independently from the UI.
 *
 * Current source:
 *     Local JSON
 *
 * Future source:
 *     Supabase
 */

const COURSES_PATH = "data/courses.json";

/**
 * Load all courses.
 *
 * @returns {Promise<Array>}
 */
async function getCourses() {
    try {
        const response = await fetch(COURSES_PATH);

        if (!response.ok) {
            throw new Error(
                `Failed to load courses: ${response.status}`
            );
        }

        return await response.json();
    } catch (error) {
        console.error("Course service error:", error);

        throw error;
    }
}

/**
 * Get only featured courses.
 *
 * @returns {Promise<Array>}
 */
async function getFeaturedCourses() {
    const courses = await getCourses();

    return courses.filter(function (course) {
        return course.featured === true;
    });
}

/**
 * Find a course by its ID.
 *
 * @param {string} courseId
 * @returns {Promise<Object|null>}
 */
async function getCourseById(courseId) {
    const courses = await getCourses();

    return (
        courses.find(function (course) {
            return course.id === courseId;
        }) || null
    );
}

/**
 * Find a course by its slug.
 *
 * @param {string} slug
 * @returns {Promise<Object|null>}
 */
async function getCourseBySlug(slug) {
    const courses = await getCourses();

    return (
        courses.find(function (course) {
            return course.slug === slug;
        }) || null
    );
}

/**
 * Get courses by category.
 *
 * @param {string} category
 * @returns {Promise<Array>}
 */
async function getCoursesByCategory(category) {
    const courses = await getCourses();

    return courses.filter(function (course) {
        return (
            course.category.toLowerCase() ===
            category.toLowerCase()
        );
    });
}