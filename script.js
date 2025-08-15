document.getElementById("register-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Campos do formulário
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    // Mensagens de erro
    const errors = document.querySelectorAll(".error");
    errors.forEach(error => error.style.display = "none"); // Oculta todas

    let valid = true;

    // Validação username
    if (username.value.trim() === "") {
        username.nextElementSibling.style.display = "block";
        valid = false;
    }

    // Validação email
    if (email.value.trim() === "") {
        email.nextElementSibling.style.display = "block";
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        email.nextElementSibling.textContent = "Email invalido";
        email.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        email.nextElementSibling.textContent = "Email necessario";
    }

    // Validação password
    if (password.value.trim() === "") {
        password.nextElementSibling.style.display = "block";
        valid = false;
    }

    // Validação confirm password
    if (confirmPassword.value.trim() === "") {
        confirmPassword.nextElementSibling.style.display = "block";
        valid = false;
    } else if (confirmPassword.value !== password.value) {
        confirmPassword.nextElementSibling.textContent = "Passwords do not match";
        confirmPassword.nextElementSibling.style.display = "block";
        valid = false;
    } else {
        confirmPassword.nextElementSibling.textContent = "Confirm Password is required";
    }

    // Se tudo válido
    if (valid) {
        alert("Registrado com sucesso!");
        document.getElementById("register-form").reset();
    }
});
