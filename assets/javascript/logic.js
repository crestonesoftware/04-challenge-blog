// ENUMS
// const DISPLAY_MODE_LIGHT = "light";
// const DISPLAY_MODE_DARK = "dark";

// DEPENDENCIES (ELEMENTS)
const bodyEl        = $('body');
const sunButton     = $('#display-mode-toggle');

// DATA
// let displayMode = COMMON.DISPLAY_MODE_LIGHT;

const COMMON = {
    DISPLAY_MODE_LIGHT: "light",
    DISPLAY_MODE_DARK: "dark",
    ENTRIES_IN_LOCAL_STORAGE: "blogEntries",

    fetchBLogEntries: function() {
        const blogEntries = JSON.parse(localStorage.getItem(this.ENTRIES_IN_LOCAL_STORAGE));
        if (!blogEntries)
            return [];
        console.log(blogEntries);
        console.log(`blogEntries length ${blogEntries.length}`);
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
    
        if (COMMON.DISPLAY_MODE_DARK == displayMode) {
            displayMode = COMMON.DISPLAY_MODE_LIGHT; // toggle the attribute on <body>
            // swap light and dark classes
            toggleElements.addClass('mode-light').removeClass('mode-dark');
        } else {
            displayMode = COMMON.DISPLAY_MODE_DARK; // toggle the attribute on <body>
            // swap light and dark classes
            toggleElements.addClass('mode-dark').removeClass('mode-light');
        }
    }
}

let displayMode = COMMON.DISPLAY_MODE_LIGHT;