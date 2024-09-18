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

showFirstProject();