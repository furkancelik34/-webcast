
const passwordInput = document.getElementById('password-field');
const togglePasswordButton = document.getElementById('toggle-password');
const passwordIcon = document.getElementById('password-icon');


togglePasswordButton.addEventListener('click', () => {
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; 
        passwordIcon.classList.remove('fa-eye'); 
        passwordIcon.classList.add('fa-eye-slash'); 
    } else {
        passwordInput.type = 'password'; 
        passwordIcon.classList.remove('fa-eye-slash'); 
        passwordIcon.classList.add('fa-eye'); 
    }
});

