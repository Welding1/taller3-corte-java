document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var terms = document.getElementById('terms');

    var valid = true;

    // Check if passwords match
    if (password !== confirm_password) {
        document.getElementById('password_error').textContent = "Contraseña incorrecta";
        valid = false;
    } else {
        document.getElementById('password_error').textContent = "";
    }

    // Check if gender is selected
    if (!gender) {
        document.getElementById('gender_error').textContent = "seleccione el genero";
        valid = false;
    } else {
        document.getElementById('gender_error').textContent = "";
    }

    // Check if terms are accepted
    if (!terms.checked) {
        document.getElementById('terms_error').textContent = "Acepte terminos y condiciones";
        valid = false;
    } else {
        document.getElementById('terms_error').textContent = "";
    }

    // If all data is valid, submit the form
    if (valid) {
        event.target.submit();
    }
});
    