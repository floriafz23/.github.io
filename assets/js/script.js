function showFirstProject() {
    // Get all projects into an array
    const projects = Array.from(document.getElementsByClassName('project'));

    // Sort projects by date - recent first
    projects.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return dateB - dateA;
    });

    // Hide all projects initially
    for (let i = 0; i < projects.length; i++) {
        projects[i].style.display = 'none';
    }

    // Display only the first project
    if (projects.length > 0) {
        projects[0].style.display = 'block';
    }
    
}

function showBlankProject() {
    // Get all projects into an array
    const blank_project = document.getElementById('blank_project');

    // Display blank project
    if (blank_project) {
        blank_project.style.display = 'block';
    }
    
}

function showRemainingProjects(){
    const projects = document.getElementsByClassName('project');

    for (let i = 0; i < projects.length; i++) {
        projects[i].style.display = 'block'
    } 

    // Hide the "Load More" button after all projects are shown
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
}

// // Run the function when the DOM is fully loaded to show blank project
// document.addEventListener('DOMContentLoaded', function() {
//     showBlankProject();
//   });


// Add event listener for "Load More" button
document.addEventListener('DOMContentLoaded', function() {
    showFirstProject();

    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', showRemainingProjects);
    }
});