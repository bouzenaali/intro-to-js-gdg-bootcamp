# Storyteller Project
## Overview
The Storyteller project is a mini web application that enables users 
to create custom stories by selecting a character, a map, and a time. 
The application dynamically generates a story based on these choices and displays it on the webpage.

## Building the Project
1. **Objects** 
```javascript
   const characters = {
  hero: "Hero",
  wizard: "Wizard",
  witch: "Witch",
  goblin: "Goblin"
};
```

2.**Event Handling**: we use event listeners to respond to user actions, such as clicking the `Generate Story` button
```javascript
document.getElementById("generate").addEventListener("click", generateStory);
```
3. **DOM Manipulation**
```javascript
function displayStory() {
  document.getElementById("story").innerHTML = story;
}
// Here, we use the innerHTML property to update the content of the paragraph element
// with the ID story to display the generated story.
```

4. **Generating and Displaying the Story**
```javascript
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

  // Construct the story based on choices
  story = `Our ${characters[selectedCharacter]} finds themselves in the ${maps[selectedMap]} at ${times[selectedTime]}.`;

  displayStory();
}
```

## Conclusion
If you have any questions or encounter difficulties understanding any aspect of this project, 
please feel free to reach out. I'm here to help you understand and learn. **Happy coding!**
