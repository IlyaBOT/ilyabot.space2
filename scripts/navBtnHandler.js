
/***************************************************/
// Basic navbar-buttons handler for redirections    //
// Made by IlyaBOT: github.com/IlyaBOT              //
// Date: 10.10.2024                                 //
// Version: 1.0                                     //
/***************************************************/
function goToUrl(url){ // Redirects to the specified URL
    console.log(`Going to: ${url}...`);
    setTimeout(function() {window.location.href = url;}, 170); // Wait 170ms and redirect to the specified URL.
};

function owoWTF() { // OwO' What's this?..
    console.log(`YOU'VE BEEN RICKROLLED`); // YOU'VE BEEN RICKROLLED
    setTimeout(function(){
        window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
    }, 170); // Wait 170ms ang open Rickroll video on YouTube.
}