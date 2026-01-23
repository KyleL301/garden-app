/**
 * Gardening Advice Application
 *
 * This script generates gardening advice based on the
 * current season and plant type. The code is structured
 * using functions to keep logic readable and reusable.
 */

// Hardcoded values used for demonstration purposes
// TODO: Replace these with user input in a future update
let season = "summer";
let plantType = "flower";

// Variable that stores the final gardening advice
let advice = "";

/**
 * Returns gardening advice based on the season.
 *
 * @param {string} season - The current season
 * @returns {string} Advice related to the season
 */
function getSeasonAdvice(season) {
  if (season === "summer") {
    return "Water your plants regularly and provide some shade.\n";
  } else if (season === "winter") {
    return "Protect your plants from frost with covers.\n";
  } else {
    return "No advice available for this season.\n";
  }
}

/**
 * Returns gardening advice based on the plant type.
 *
 * @param {string} plantType - The type of plant
 * @returns {string} Advice related to the plant type
 */
function getPlantTypeAdvice(plantType) {
  if (plantType === "flower") {
    return "Use fertiliser to encourage blooms.";
  } else if (plantType === "vegetable") {
    return "Keep an eye out for pests!";
  } else {
    return "No advice available for this type of plant.";
  }
}

// Combine advice from both season and plant type
advice += getSeasonAdvice(season);
advice += getPlantTypeAdvice(plantType);

// Output the final advice
console.log(advice);

// TODO: Future improvements
// - Replace hardcoded values with user input
// - Store advice in an object for easier expansion
// - Suggest plants that thrive in a selected season
