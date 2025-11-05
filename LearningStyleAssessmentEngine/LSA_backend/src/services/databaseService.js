/**
 * In-Memory Database Service
 *
 * This is a mock database service that stores assessment results in memory.
 * The data will persist as long as the server is running. This allows for
 * full application testing without requiring an external database setup.
 * In a production environment, this module would be replaced with a connection
 * to a real database (e.g., MongoDB, PostgreSQL).
 */

// Use a simple array to act as our in-memory "database"
const resultsCollection = [];

/**
 * Saves a new assessment result to the in-memory store.
 * @param {Object} resultData - The complete assessment result object.
 * @returns {Promise<Object>} A promise that resolves with the saved data.
 */
const saveResult = async (resultData) => {
    try {
        // In a real DB, this would be an async operation. We simulate it with Promise.resolve.
        console.log('DATABASE_SERVICE: Saving result for user:', resultData.userId);
        
        // Assign a unique ID, similar to how a database would
        const newId = resultsCollection.length + 1;
        const recordToSave = { id: newId, ...resultData };
        
        resultsCollection.push(recordToSave);
        
        console.log('DATABASE_SERVICE: Result saved successfully. Total records:', resultsCollection.length);
        return Promise.resolve(recordToSave);
    } catch (error) {
        console.error('DATABASE_SERVICE: Error saving result:', error);
        return Promise.reject(error);
    }
};

/**
 * Retrieves a single result by its ID.
 * @param {string|number} id - The ID of the result to retrieve.
 * @returns {Promise<Object|null>} A promise that resolves with the found result or null.
 */
const getResultById = async (id) => {
    try {
        console.log(`DATABASE_SERVICE: Searching for result with ID: ${id}`);
        const result = resultsCollection.find(r => r.id == id);
        return Promise.resolve(result || null);
    } catch (error) {
        console.error('DATABASE_SERVICE: Error finding result:', error);
        return Promise.reject(error);
    }
};

/**
 * Retrieves all results stored in memory.
 * @returns {Promise<Array>} A promise that resolves with an array of all results.
 */
const getAllResults = async () => {
    try {
        console.log('DATABASE_SERVICE: Retrieving all results.');
        return Promise.resolve(resultsCollection);
    } catch (error) {
        console.error('DATABASE_SERVICE: Error retrieving all results:', error);
        return Promise.reject(error);
    }
};

module.exports = {
    saveResult,
    getResultById,
    getAllResults
};