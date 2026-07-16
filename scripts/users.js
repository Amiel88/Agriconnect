const form = document.getElementById("registerForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("fullNames").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const type = document.getElementById("userType").value;

    if (name === "" || email === "" || password === "" || type === "") {
        alert("Please fill in all required fields.");
    } else {
        alert("Registration Successful!");
        window.location.href = "user-dashboard.html";
    }

});