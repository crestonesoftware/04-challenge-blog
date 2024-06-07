// DEPENDENCIES (ELEMENTS)
const submitButton  = $('#form-submit');
const usernameInput = $('#username-input');
const titleInput    = $('#title-input');
const contentInput  = $('#content-input');          

// DATA

// TEST ONLY - REMOVE BEFORE RELEASE. 
function testData_blogForm() {
    usernameInput.val("Alistair McKenzie");
    titleInput.val('A solid blogging');
    contentInput.val('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium excepturi fugit illum explicabo id rem, quam ipsa quas nesciunt quidem nobis laboriosam iusto ad eius! Facere animi ex adipisci veniam!');
    
}
// TEST - REMOVE BEFORE RELEASE
testData_blogForm();

// FUNCTIONS
function handleSunButtonClick(event) {
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

function handleFormSubmit(event) {
    event.preventDefault();
    
    console.log('handleFormSubmit');
    if(!usernameInput.val() || !titleInput.val() || !contentInput.val()) {
        alert("Username, Title, and Content are all required");
        return;
    }
    COMMON.addBlogEntry(usernameInput.val(), titleInput.val(), contentInput.val());
}

sunButton.on('click', handleSunButtonClick);
submitButton.on('click', handleFormSubmit);