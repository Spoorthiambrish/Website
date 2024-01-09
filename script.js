function storeUsername() {
    // Store the username in local storage
    var usernameInput = document.getElementById("username");
    var username = usernameInput.value.trim();

    if (username !== "") {
        localStorage.setItem("username", username);
        // Redirect to home.html after storing the username
        window.location.href = "home.html";
        return false; // Prevent form submission
    } else {
        // Handle empty username case (you can display an error message)
        alert("Please enter a valid username.");
        return false; // Prevent form submission
    }
}


