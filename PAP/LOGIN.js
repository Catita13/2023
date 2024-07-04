document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Retrieve stored users from LocalStorage
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the user exists
        const user = storedUsers.find(user => user.username === username && user.password === password);

        if (user) {
            alert('Login successful!');
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'HOME.html'; // Redirect to HOME.html
        } else {
            alert('Invalid username or password');
        }
    });
});

function refreshPage() {
    window.location.reload();
}