// DEPENDENCIES (ELEMENTS)
const submitButton  = $('#form-submit');
const usernameInput = $('#username-input');
const titleInput    = $('#title-input');
const contentInput  = $('#content-input');          

// FUNCTIONS
// function handleSunButtonClick(event) {
//     // get all elements marked with the class .toggle-display. They include
//     // - the body 
//     // - any element that doesn't inherit its color and background color 
//     //   from the body, e.g. the button
//     const toggleElements = $('.toggle-display');

//     if (COMMON.DISPLAY_MODE_DARK == displayMode) {
//         displayMode = COMMON.DISPLAY_MODE_LIGHT; // toggle the attribute on <body>
//         // swap light and dark classes
//         toggleElements.addClass('mode-light').removeClass('mode-dark');
//     } else {
//         displayMode = COMMON.DISPLAY_MODE_DARK; // toggle the attribute on <body>
//         // swap light and dark classes
//         toggleElements.addClass('mode-dark').removeClass('mode-light');
//     }
// }

function handleFormSubmit(event) {
    event.preventDefault();
    // require data in all fields
    if(!usernameInput.val() || !titleInput.val() || !contentInput.val()) {
        alert("Username, Title, and Content are all required");
        return;
    }
    // store the Blog Entry, then redirect to the Blog page to see it
    COMMON.addBlogEntry(usernameInput.val(), titleInput.val(), contentInput.val());
    location.href = 'blog.html';
}

sunButton.on('click', COMMON.handleSunButtonClick);
submitButton.on('click', handleFormSubmit);