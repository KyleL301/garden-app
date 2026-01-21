// Hardcoded values for the season and plant type
// TODO: Replace these with prompt() to allow user interaction.
let season = "summer";
let plantType = "flower";

// Variable to hold gardening advice
let advice = "";

/**
 * Returns gardening advice based on the season.
 * @param {string} season - The current season
 * @returns {string} Advice related to the season
 */
function getSeasonAdvice(season) {
  if (season === "summer") {
    return "Water your plants regularly and provide some shade.\n";
  } else if (season === "winter") {
    return "Protect your plants from frost with covers.\n";
  } else {
    return "No advice for this season.\n";
  }
}

/**
 * Returns gardening advice based on the plant type.
 * @param {string} plantType - The type of plant
 * @returns {string} Advice related to the plant type
 */
function getPlantTypeAdvice(plantType) {
  if (plantType === "flower") {
    return "Use fertiliser to encourage blooms.";
  } else if (plantType === "vegetable") {
    return "Keep an eye out for pests!";
  } else {
    return "No advice for this type of plant.";
  }
}

// Build the advice using the refactored functions
advice += getSeasonAdvice(season);
advice += getPlantTypeAdvice(plantType);

// Log the generated advice to the console
console.log(advice);

// TODO: Examples of possible features to add:
// - Replace hardcoded values with user input
// - Store advice in an object for multiple plants and seasons
// - Suggest plants that thrive in the given season
