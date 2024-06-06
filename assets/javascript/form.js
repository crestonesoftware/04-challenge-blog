// ENUMS
const DISPLAY_MODE_LIGHT = "light";
const DISPLAY_MODE_DARK = "dark";

// DEPENDENCIES (ELEMENTS)
const bodyEl        = $('body');
const sunButton     = $('#display-mode-toggle');
const submitButton  = $('#form-submit');
const usernameInput = $('#username-input');
const titleInput    = $('#title-input');
const contentInput  = $('#content-input');          

// DATA
let displayMode = DISPLAY_MODE_LIGHT;
const blogEntries = [];
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

function handleFormSubmit(event) {
    event.preventDefault();
    
    console.log('handleFormSubmit');
    if(!usernameInput.val() || !titleInput.val() || !contentInput.val()) {
        alert("Username, Title, and Content are all required");
        return;
    }
    const blogEntry = {
        username: usernameInput.val(),
        title: titleInput.val(),
        content: contentInput.val()
    }
    blogEntries.push(blogEntry);
    localStorage.setItem('blogEntries',JSON.stringify(blogEntries));
    window.location.href = "./blog.html";

}

sunButton.on('click', handleSunButtonClick);
submitButton.on('click', handleFormSubmit);