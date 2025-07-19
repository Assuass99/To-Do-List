const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Dark mode functionality
function toggleDarkMode() {
    const container = document.querySelector('.container');
    container.classList.toggle('dark-mode');
    
    // Update button icon
    if (container.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '☀️';
    } else {
        darkModeToggle.innerHTML = '🌙';
    }
    
    // Save dark mode preference
    localStorage.setItem('darkMode', container.classList.contains('dark-mode'));
}

// Load dark mode preference on page load
function loadDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.querySelector('.container').classList.add('dark-mode');
        darkModeToggle.innerHTML = '☀️';
    }
}

// Add event listener for dark mode toggle
darkModeToggle.addEventListener('click', toggleDarkMode);

// Load dark mode preference when page loads
loadDarkModePreference();

// Add event listener for Enter key
inputBox.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask(){
    if(inputBox.value === ''){
        // Removed alert since it's not user-friendly
        return; // Just return without doing anything
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();