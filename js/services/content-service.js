/**
 * Content Service
 * 
 * Handles loading website content from local JSON data.
 * 
 * This service intentionally hides the data source from
 * the rest of the application.
 *
 * Current source:
 *     Local JSON files
 *
 * Future source:
 *     Supabase
 */

const CONTENT_PATH = "data/site.json";

/**
 * Load complete site configuration.
 *
 * @returns {Promise<Object>}
 */
async function getSiteContent() {
    try {
        const response = await fetch(CONTENT_PATH);

        if (!response.ok) {
            throw new Error(
                `Failed to load site content: ${response.status}`
            );
        }

        return await response.json();
    } catch (error) {
        console.error("Content service error:", error);

        throw error;
    }
}

/**
 * Get a specific navigation item list.
 *
 * @returns {Promise<Array>}
 */
async function getNavigation() {
    const site = await getSiteContent();

    return site.navigation || [];
}

/**
 * Get homepage configuration.
 *
 * @returns {Promise<Object>}
 */
async function getHomepageContent() {
    const site = await getSiteContent();

    return site.homepage || {};
}

/**
 * Get hero configuration.
 *
 * @returns {Promise<Object>}
 */
async function getHeroContent() {
    const site = await getSiteContent();

    return site.hero || {};
}

/**
 * Get website contact information.
 *
 * @returns {Promise<Object>}
 */
async function getContactInformation() {
    const site = await getSiteContent();

    return site.contact || {};
}

/**
 * Get website statistics.
 *
 * @returns {Promise<Array>}
 */
async function getStatistics() {
    const site = await getSiteContent();

    return site.statistics || [];
}