document.addEventListener("DOMContentLoaded", function() {
    // Get all tab links
    const tabLinks = document.querySelectorAll('.nav-link');

    // Get all tab panes
    const tabPanes = document.querySelectorAll('.tab-pane');

    // Function to handle tab click
    function handleTabClick(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Remove 'active' class from all tab links and panes
        tabLinks.forEach(link => link.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Add 'active' class to the clicked tab link
        this.classList.add('active');

        // Get the target tab pane
        const targetPaneId = this.getAttribute('href').substring(1);
        const targetPane = document.getElementById(targetPaneId);

        // Add 'active' class to the target tab pane
        targetPane.classList.add('active');
    }

    // Add click event listener to each tab link
    tabLinks.forEach(link => link.addEventListener('click', handleTabClick));

    // Handle button click
    const button = document.querySelector('#button-savechange');
    if (button) {
        button.addEventListener('click', function(event) {
            // Prevent default form submission
            event.preventDefault();

            // Your button click functionality here
            console.log('Save change button clicked');
            // For example, you can perform form validation or AJAX request here
        });
    }
});
