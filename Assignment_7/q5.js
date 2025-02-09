const userInput = prompt("Enter a sentence:");
const charCount = userInput.length;
const wordCount = userInput.trim().split(/\s+/).filter(Boolean).length;
alert("Character count (including spaces): " + charCount);
alert("Word count: " + wordCount);
