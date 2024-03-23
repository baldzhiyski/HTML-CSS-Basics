// Select all elements with the class 'panel' and store them in the panels variable
const panels = document.querySelectorAll('.panel');

// Add a click event listener to each panel
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // Remove the 'active' class from all panels
        removeActiveClasses();
        // Add the 'active' class to the clicked panel
        panel.classList.add('active');
    });
});

// Function to remove the 'active' class from all panels
function removeActiveClasses() {
    // Iterate over each panel
    panels.forEach((panel) => {
        // Remove the 'active' class
        panel.classList.remove('active');
    });
}
