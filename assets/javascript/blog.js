// DEPEPENDENCIES
const blogEntryContainer = $('#blog-entry-container');

// FUNCTIONS
function loadBlogEntries() {
    console.log("this happened on load");
    const blogEntries = COMMON.fetchBLogEntries();
    for (const entry of blogEntries) {
        const blogEntryElement = composeBlogEntryElement(entry);
        blogEntryContainer.append(blogEntryElement);
    }
}

function composeBlogEntryElement(entry) {
    // const newEntryElement = $(`<h1>${entry.title}</h1>`);
    const newEntryElement = $(`
    <div class="blog-entry">
        <h4>${entry.title}</h4>
        <div class="blog-entry-horizontal-line"></div>
        <p class="blog-content mb-half-em">${entry.content}</p>
        <p class="blog-username mb-half-em">Posted by: <span>${entry.username}</span></p>
    </div>
    `);
 
    return newEntryElement;
 }

// USER INTERACTIONS
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
sunButton.on('click', COMMON.handleSunButtonClick);
loadBlogEntries();