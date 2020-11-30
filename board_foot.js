// Created By: Jacob Bonner
// Created On: November 2020
// This program will tell the user the height of a board-foot
//   based on the length and width entered by the user.

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

// This function will find the height of a board-foot based
//   on the length and width entered by the user.
function findBoardFoot(length, width) {
  // Assigning and specifying the volume of a board-foot
  const VOLUME = 144;

  // Calculating the height of the board
  const height = VOLUME / (length * width);

  // Returning the height of the board
  return height; 
}

try {
  // Input for the length of the board
  const lengthInput = prompt("Enter the length of the board: ");
  console.log();

  // Input for the width of the board
  const widthInput = prompt("Enter the width of the board: ");
  console.log();

  // Ensuring the length and width variables are numbers
  const userLength = Number(lengthInput, 10);
  const userWidth = Number(widthInput, 10);

  // Process
  if (isNaN(userLength) == true || isNaN(userWidth) == true) {
    // Output if errors are detected
    console.log("ERROR: Invalid Input");
  } else {
    const heightOfBoard = findBoardFoot(userLength, userWidth);
    // Output if no errors detected
    console.log("The height of the board in one board-foot is", 
                heightOfBoard, "inches.");
  }

} catch (err) {
  console.log("ERROR: Invalid Input");
}
