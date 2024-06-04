// ENUMS
const DISPLAY_MODE_LIGHT = "light";
const DISPLAY_MODE_DARK = "dark";

// DEPENDENCIES (ELEMENTS)
const bodyEl = $('body');
const sunButton = $('#display-mode-toggle');

// DATA

// FUNCTIONS

function handleSunButtonClick(event) {
    // <body> stores the display mode
    const displayMode = bodyEl.data('display_mode');
    // get all elements marked with the class .toggle-display. They include
    // - the body 
    // - any element that doesn't inherit its color and background color 
    //   from the body, e.g. the button
    const toggleElements = $('.toggle-display');

    if (DISPLAY_MODE_DARK == displayMode) {
        bodyEl.data('display_mode','light'); // toggle the attribute on <body>
        // swap light and dark classes
        toggleElements.addClass('mode-light').removeClass('mode-dark');
    } else {
        bodyEl.data('display_mode','dark'); // toggle the attribute on <body>
        // swap light and dark classes
        toggleElements.addClass('mode-dark').removeClass('mode-light');
    }
}

sunButton.on('click', handleSunButtonClick);