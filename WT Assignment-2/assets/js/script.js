function redirectToSignin() {
    window.location.href = 'landing.html';
}

document.querySelector(".toggle-password").addEventListener("click", function() {
    let passwordField = document.getElementById("password");
    let icon = this.querySelector("i");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
});

function handleSignUp(event) {
    event.preventDefault();
    window.location.href = 'landing.html';
}
