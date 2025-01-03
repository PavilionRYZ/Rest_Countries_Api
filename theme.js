const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeLabel = document.getElementById("theme-label");

// Check and apply saved theme or system preference
function applyInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme || (systemPrefersDark ? "dark" : "light");
    setTheme(theme);
}

// Set theme and save to localStorage
function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    updateToggleUI(theme);
}

// Update the toggle button UI
function updateToggleUI(theme) {
    if (theme === "dark") {
        themeIcon.classList.replace("fa-moon", "fa-sun");
        themeLabel.textContent = "Light Mode";
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
        themeLabel.textContent = "Dark Mode";
    }
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
});

// Apply the initial theme on load
applyInitialTheme();
