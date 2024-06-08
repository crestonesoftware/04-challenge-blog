// ENUMS
const DISPLAY_MODE_LIGHT = "light";
const DISPLAY_MODE_DARK = "dark";

// DEPENDENCIES (ELEMENTS)
const bodyEl        = $('body');
const sunButton     = $('#display-mode-toggle');

// DATA
let displayMode = DISPLAY_MODE_LIGHT;
const ENTRIES_IN_LOCAL_STORAGE = "blogEntries";

const COMMON = {
    DISPLAY_MODE_LIGHT: "light",
    DISPLAY_MODE_DARK: "dark",
    ENTRIES_IN_LOCAL_STORAGE: "blogEntries",

    fetchBLogEntries: function() {
        const blogEntries = JSON.parse(localStorage.getItem(ENTRIES_IN_LOCAL_STORAGE));
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
    }
    
}
function wwfetchBLogEntries() {
    const blogEntries = JSON.parse(localStorage.getItem(ENTRIES_IN_LOCAL_STORAGE));
    console.log(blogEntries);
    return blogEntries;
}


