// Get all category buttons and project items
const categoryBtns = document.querySelectorAll('.category__btn');
const projectItems = document.querySelectorAll('.project__item');

// Add event listeners to category buttons
categoryBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        // Get the category from the clicked button
        const selectedCategory = e.target.getAttribute('data-category');

        // Remove the active class from all category buttons
        categoryBtns.forEach(btn => btn.classList.remove('active-work'));

        // Add the active class to the clicked button
        e.target.classList.add('active-work');

        // Filter projects based on the selected category
        projectItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');

            if (selectedCategory === 'all' || selectedCategory === itemCategory) {
                item.style.visibility = 'visible'; // Show the project
                item.style.position = 'relative';  // Reset any absolute positioning
            } else {
                item.style.visibility = 'hidden'; // Hide the project visually
                item.style.position = 'absolute'; // Keep the layout intact
            }
        });
    });
});