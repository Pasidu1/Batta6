// Page Load Event - Alert when page loads
window.onload = function() {
    alert("Welcome to the website! 🎉");
};

// Button Click Event - Change text content
document.getElementById("change-text-button").addEventListener("click", function() {
    document.getElementById("content-to-change").innerText = "New content after button click!";
});

// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = "Back to Top";
scrollToTopButton.classList.add("back-to-top");
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll Event to Show/Hide Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Form Validation Example (Email field check)
document.querySelector('form').addEventListener('submit', function(e) {
    let email = document.querySelector('input[type="email"]').value;
    if (email === "") {
        alert("Please enter a valid email.");
        e.preventDefault(); // Prevent form submission
    }
});

// Image Change on Button Click
document.getElementById("change-image-button").addEventListener("click", function() {
    document.getElementById("image-to-change").src = "new-image.jpg";
});

// Show/Hide content on Button Click
document.getElementById("toggle-button").addEventListener("click", function() {
    var content = document.getElementById("toggle-content");
    if (content.style.display === "none") {
        content.style.display = "block"; // Show the content
    } else {
        content.style.display = "none"; // Hide the content
    }
});
