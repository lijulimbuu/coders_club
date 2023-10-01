// JavaScript for handling the search functionality
document.getElementById('searchButton').addEventListener('click', function () {
    const searchTerm = document.getElementById('searchInput').value;
    const searchResults = document.getElementById('searchResults');

    // Perform your search logic here
    // You can update the searchResults element with the search results
    // For this example, let's display a simple message.
    searchResults.innerHTML = `You searched for: ${searchTerm}`;
});





// javascript for comment section
// Get references to HTML elements
const commentInput = document.getElementById("comment-input");
const addCommentButton = document.getElementById("add-comment-button");
const commentsList = document.getElementById("comments-list");

// Function to add a new comment temporarily
function addTemporaryComment() {
    const commentText = commentInput.value;

    if (commentText.trim() === "") {
        alert("Please enter a comment.");
        return;
    }

    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.textContent = commentText;

    commentsList.appendChild(commentElement);

    // Clear the input field
    commentInput.value = "";

    // Automatically delete the comment after 3 seconds
    setTimeout(() => {
        commentElement.remove();
    }, 5000);
}

// Add a temporary comment when the button is clicked
addCommentButton.addEventListener("click", addTemporaryComment);

// Prevent the textarea from being edited while a comment is pending deletion
addCommentButton.addEventListener("mousedown", () => {
    commentInput.disabled = true;
    setTimeout(() => {
        commentInput.disabled = false;
    }, 3000);
});
