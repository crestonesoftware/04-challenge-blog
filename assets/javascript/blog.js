// DEPEPENDENCIES
const blogEntryContainer = $('#blog-entry-container');

// FUNCTIONS
function loadBlogEntries() {
    console.log("this happened on load");
    const blogEntries = COMMON.fetchBLogEntries();
    for (const entry of blogEntries) {
        
        //const blogEntryElement = composeBlogEntryElement(entry);
        const blogEntryElement = composeBlogEntryElement(entry);
        blogEntryContainer.append(blogEntryElement);
    }
}

function composeBlogEntryElement(entry) {
    // const newEntryElement = $(`<h1>${entry.title}</h1>`);
    const newEntryElement = $(`
    <div class="blog-entry">
        <h4>${entry.title}</h4>
        <div></div>
        <p class="blog-content mb-half-em">${entry.content}</p>
        <p class="blog-username mb-half-em">Posted by: <span>${entry.username}</span></p>
    </div>
    `);
    // <div class="blog-entry">
    //     <h4>Blog Title</h4>
        // <div></div>
        // <p class="blog-content mb-half-em">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nesciunt sapiente neque dolores! Adipisci illo maiores placeat explicabo? Optio aliquid quam at maiores commodi vero. Enim, ducimus. Laborum, tempore quo!</p>
        // <p class="blog-username mb-half-em">Posted by: <span>username</span></p>
    // </div>


    return newEntryElement;
    // 
    // <div></div>
    // <p class="blog-content mb-half-em">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia nesciunt sapiente neque dolores! Adipisci illo maiores placeat explicabo? Optio aliquid quam at maiores commodi vero. Enim, ducimus. Laborum, tempore quo!</p>
    // <p class="blog-username mb-half-em">Posted by: <span>username</span></p>
    // ');

}

function blogEntryElement(element) {

}

// USER INTERACTIONS
function handleSunButtonClick(event) {
    console.log('asdsad');
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
loadBlogEntries();