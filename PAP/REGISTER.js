document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Retrieve stored users from LocalStorage
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the username already exists
        if (storedUsers.some(user => user.username === username)) {
            alert('Username already exists');
        } else {
            // Add new user to the list
            storedUsers.push({ username, password });
            localStorage.setItem('users', JSON.stringify(storedUsers));
            alert('Registration successful');
            window.location.href = 'LOGIN.html';
        }
    });
});

function refreshPage() {
    window.location.reload();
}