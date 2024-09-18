function showFirstProject() {
    // Get all projects into an array
    const projects = document.getElementsByClassName('project');

    // Hide all projects initially
    for (let i = 0; i < projects.length; i++) {
        projects[i].style.display = 'none';
    }

    // Display only the first project
    if (projects.length > 0) {
        projects[0].style.display = 'block';
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


showFirstProject();

// Add event listener for "Load More" button
document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', showRemainingProjects);
    }
});