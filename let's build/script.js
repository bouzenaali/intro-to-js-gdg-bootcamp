// Define character options
const characters = {
  hero: "Hero",
  wizard: "Wizard",
  witch: "Witch",
  goblin: "Goblin"
};

// Define map options
const maps = {
  beach: "Beach",
  forest: "Forest",
  mountain: "Mountain",
  castle: "Castle"
};

// Define time options
const times = {
  day: "Day",
  night: "Night"
};

// Create an empty string for the story
let story = "";

// Function to display the story
function displayStory() {
  document.getElementById("story").innerHTML = story;
}

// Function to generate the story based on choices
function generateStory() {
  const selectedCharacter = document.getElementById("character").value;
  const selectedMap = document.getElementById("map").value;
  const selectedTime = document.getElementById("time").value;

  // Check if all selections are made
  if (!selectedCharacter || !selectedMap || !selectedTime) {
      story = "Please choose all options to generate your story!";
      displayStory();
      return;
  }

  // the story based on choices
  story = `Our ${characters[selectedCharacter]} finds themself in the ${maps[selectedMap]} at ${times[selectedTime]}.`;


  displayStory();
}

// event listener to generate button
document.getElementById("generate").addEventListener("click", generateStory);
