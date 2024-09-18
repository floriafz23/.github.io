function showBlankProject() {
    // Get all projects into an array
    const blank_project = document.getElementById('blank_project');

    // Display blank project
    if (blank_project) {
        blank_project.style.display = 'block';
    }
    
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    showBlankProject();
  });