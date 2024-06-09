// DEPENDENCIES (ELEMENTS)
const bodyEl        = $('body');
const sunButton     = $('#display-mode-toggle');

// DATA
// initialized after defining COMMON
// let displayMode;

// FUNCTIONS AND ENUMS
const COMMON = {
    DISPLAY_MODE_LIGHT: "light",
    DISPLAY_MODE_DARK: "dark",
    ENTRIES_IN_LOCAL_STORAGE: "blogEntries",

    fetchBLogEntries: function() {
        const blogEntries = JSON.parse(localStorage.getItem(this.ENTRIES_IN_LOCAL_STORAGE));
        if (!blogEntries)
            return [];
        return blogEntries;
    },
    addBlogEntry: function(pUsername, pTitle, pContent) {
        const blogEntry = {
            username: pUsername,
            title: pTitle,
            content: pContent
        }
        const blogEntries = COMMON.fetchBLogEntries();
    
        blogEntries.push(blogEntry);
        localStorage.setItem(COMMON.ENTRIES_IN_LOCAL_STORAGE,JSON.stringify(blogEntries));
    },   
    handleSunButtonClick: function(event) {
        // get all elements marked with the class .toggle-display. They include
        // - the body 
        // - any element that doesn't inherit its color and background color 
        //   from the body, e.g. the button
        const toggleElements = $('.toggle-display');
    
        let displayMode = localStorage.getItem('displayMode');
        console.log(`displayMode is ${displayMode}`);
        if (!displayMode) {
            displayMode = COMMON.DISPLAY_MODE_LIGHT;
            console.log(`wasn't initialized so now it's light`);
        }

        if (COMMON.DISPLAY_MODE_DARK == displayMode) {
            displayMode = COMMON.DISPLAY_MODE_LIGHT; // toggle the attribute on <body>
            // swap light and dark classes
            toggleElements.addClass('mode-light').removeClass('mode-dark');
        } else {
            displayMode = COMMON.DISPLAY_MODE_DARK; // toggle the attribute on <body>
            // swap light and dark classes
            toggleElements.addClass('mode-dark').removeClass('mode-light');
        }
        localStorage.setItem('displayMode', displayMode);

    }
}

function fetchDisplayMode() {
    let displayMode = localStorage.getItem('displayMode');
    const toggleElements = $('.toggle-display');
    // not yet initialized - default to light mode
    if (!displayMode) {
        displayMode = COMMON.DISPLAY_MODE_LIGHT;
    }
    // set classes for the current mode. Adding and removal of classes is the opposite of the toggling done in 
    // handleSunButtonClick
    if (COMMON.DISPLAY_MODE_LIGHT === displayMode)
        toggleElements.addClass('mode-light').removeClass('mode-dark');
    else 
        toggleElements.addClass('mode-dark').removeClass('mode-light');
}

fetchDisplayMode();