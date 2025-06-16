function initializeDarkMode() {
    // Get the body element
    const body = document.body;
    
    // Get the stored mode from local storage
    const storedMode = localStorage.getItem('dark-mode');
    
    // Check if the system prefers dark mode
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // We assume that the system prefers light mode by default
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');

    // If the stored mode is true or the system prefers dark mode,
    // add the dark-mode class and remove the light-mode class
    if (storedMode === 'true' || (storedMode === null && systemPrefersDark)) {
        body.classList.add(storedMode ? 'dark-mode' : 'light-mode');
        body.classList.remove(storedMode ? 'light-mode' : 'dark-mode');
    }
    
    updateModeIcon();
}

// Toggle dark/light mode
function toggleDarkMode() {
    // Get the body element
    const body = document.body;
    
    // Are we in dark mode?
    const isDarkMode = body.classList.contains('dark-mode');

    // Get the current mode class name
    const currentMode = isDarkMode ? 'dark-mode' : 'light-mode';
    
    // Toggle the mode
    const switchTo = isDarkMode ? 'light-mode' : 'dark-mode';

    // Remove the current mode and add the new mode
    body.classList.remove(currentMode);
    body.classList.add(switchTo);

    // Store the new mode in local storage
    localStorage.setItem('dark-mode', !isDarkMode);

    // Update the mode icon
    updateModeIcon();
}

// Update the mode icon
function updateModeIcon() {
    // Get the body element
    const body = document.body;

    // Get the mode icon
    const modeIcon = document.querySelector('.icon-mode-switch');

    // If the mode icon is not found, throw an error
    if (!modeIcon) {
        throw new Error('Mode icon not found');
    }

    const isDarkMode = body.classList.contains('dark-mode');

    const svgFilename = isDarkMode
        ? 'lightmode.svg'
        : 'darkmode.svg';

    // Set the mode icon to the new svg filename
    modeIcon.src = `icons/${svgFilename}`;
    modeIcon.alt = 'Switch to Light Mode';
}

// Initialize dark/light mode when the page loads
initializeDarkMode();