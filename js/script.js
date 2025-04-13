/* For moving the anchor element through all the buttons.
*/
// Get the current page URL
let currentPage = window.location.href;

// Get all the anchor elements inside the nav
const navLinks = document.querySelectorAll('nav a');

// Loop through each anchor element
navLinks.forEach(link => {
    // Check if the href of the link matches the current page URL
    if (link.href === currentPage) {
        // Add the 'active' class to the parent h3 element to highlight the button
        link.parentElement.classList.add('active');
    }
});

const myButton = document.getElementById('myButton');
myButton.onclick = function() {
};

