/***************************************************/
// Basic border-toggle debug-button                 //
// Made by IlyaBOT: github.com/IlyaBOT              //
// Date: 09.10.2024                                 //
// Version: 1.1                                     //
/***************************************************/
let isDebugMode = false; // Debug mode flag 

function toggleDebugMode() { // Toggle debug mode function
    isDebugMode = !isDebugMode; // Switch debug mode flag

    const button = document.getElementById('debug-btn'); // Get debug button
    if (isDebugMode) {
        enableDebugMode(); // Call function enableDebugMode() to enable debug
        button.textContent = 'DEBUG'; // Change button text to DEBUG
        button.style.color = "white"; // Change button color to white
    } else {
        disableDebugMode(); // Call function disableDebugMode() to disable debug
        button.textContent = 'debug'; // hange button text to debug
        button.style.color = "#ed64f5"; // Change button color to #ed64f5 (purple)
        button.style.textShadow = "text-shadow: 0 0 10px #ff72f8c5"; // Change button text shadow (NOT WORK)
    }
}
function enableDebugMode() { // Enable debug mode function
    // Get all elements at the page
    const allElements = document.querySelectorAll('*');
    const totalElements = allElements.length;

    // Create an array of colors
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    allElements.forEach((element, index) => { // For each element
        // Get color index for the element
        const colorIndex = Math.floor((index / totalElements) * colors.length);
        element.style.border = `1px solid ${colors[colorIndex]}`; // Set border 
    });
}
function disableDebugMode() {
    // Get all elements at the page
    const allElements = document.querySelectorAll('*');
    
    allElements.forEach((element) => { // For each element
        element.style.border = ''; // Remove borders
    });
}