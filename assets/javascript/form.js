// ENUMS
const DISPLAY_MODE_LIGHT = "light";
const DISPLAY_MODE_DARK = "dark";

// DEPENDENCIES (ELEMENTS)
const bodyEl = $('body');
const sunButton = $('#display-mode-toggle');

// DATA
let displayMode = DISPLAY_MODE_LIGHT;
// FUNCTIONS

function handleSunButtonClick(event) {
    // get all elements marked with the class .toggle-display. They include
    // - the body 
    // - any element that doesn't inherit its color and background color 
    //   from the body, e.g. the button
    const toggleElements = $('.toggle-display');

    if (DISPLAY_MODE_DARK == displayMode) {
        displayMode = DISPLAY_MODE_LIGHT; // toggle the attribute on <body>
        // swap light and dark classes
        toggleElements.addClass('mode-light').removeClass('mode-dark');
    } else {
        displayMode = DISPLAY_MODE_DARK; // toggle the attribute on <body>
        // swap light and dark classes
        toggleElements.addClass('mode-dark').removeClass('mode-light');
    }
}

sunButton.on('click', handleSunButtonClick);