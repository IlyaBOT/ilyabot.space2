/****************************************/
// Basic Sound System for button events //
// Made by IlyaBOT: github.com/IlyaBOT  //
// Date: 10.10.2024                     //
// Version: 1.0                         //
/****************************************/

document.addEventListener('DOMContentLoaded', function() { // Wait for the DOM Content to be fully loaded
    const buttons = document.querySelectorAll('.navbarBtn'); // Get all buttons
    const soundDelay = 170; // Delay in milliseconds between each sound
    let playFlag = true; // Flag to track whether or not to play the sound

    if (buttons.length > 0) {
        // Hover sound
        buttons.forEach((button, index) => { // For each button
            //console.log(`Button ${index} initialized`); // Log the initialized button numbers [DEBUG ONLY]
            button.addEventListener('mouseover', function() { // When the mouse hovers over the button
                if (playFlag) {
                    console.log(`Button ${index} hovered`); // Log the hovered button numbers
                    audio = new Audio('assets/sounds/vybor-rezhima.mp3'); // Create a new audio object
                    audio.volume = 0.35; // Set the volume to 35%
                    audio.play(); // Play the audio

                    playFlag = false; // Set the flag to false
                    setTimeout(() => { // Set a timeout to set the flag back to true
                        playFlag = true;
                    }, soundDelay);
                };
            });
        });

        // Click sound
        buttons.forEach((button, index) => { // For each button
            //console.log(`Button ${index} initialized`); // Log the initialized button numbers [DEBUG ONLY]
            button.addEventListener('click', function() { // When the button is clicked
                if (playFlag) {
                    console.log(`Button ${index} clicked`); // Log the hovered button numbers
                    audio = new Audio('assets/sounds/blip-half-life.mp3'); // Create a new audio object
                    audio.volume = 0.5; // Set the volume to 50%
                    audio.play(); // Play the audio

                    playFlag = false; // Set the flag to false
                    setTimeout(() => { // Set a timeout to set the flag back to true
                        playFlag = true;
                    }, soundDelay);
                };
            });
        });
    } else { // If buttons not found, then log an error.
        console.error("Buttons not found");
    }
});