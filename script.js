function showHome() {
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('aboutUsContainer').style.display = 'none';
    document.getElementById('productsContainer').style.display = 'none';
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('widgetContainer').style.display = 'none';
    document.getElementById('storiesContainer').style.display = 'none';

}

function showLogin() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('aboutUsContainer').style.display = 'none';
    document.getElementById('productsContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
    document.getElementById('widgetContainer').style.display = 'none';
    document.getElementById('storiesContainer').style.display = 'none';

}

function showSignup() {
    // document.getElementById('homePage').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('aboutUsContainer').style.display = 'none';
    document.getElementById('productsContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
    document.getElementById('widgetContainer').style.display = 'none';
    document.getElementById('storiesContainer').style.display = 'none';

}

function showAboutUs() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('productsContainer').style.display = 'none';
    document.getElementById('aboutUsContainer').style.display = 'block';
    document.getElementById('widgetContainer').style.display = 'none';
    document.getElementById('storiesContainer').style.display = 'none';

}

function showProducts() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('aboutUsContainer').style.display = 'none';
    document.getElementById('productsContainer').style.display = 'block';
    document.getElementById('widgetContainer').style.display = 'none';
    document.getElementById('storiesContainer').style.display = 'none';

}

function showStories() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('aboutUsContainer').style.display = 'none';
    document.getElementById('productsContainer').style.display = 'none';
    document.getElementById('storiesContainer').style.display = 'block';
    document.getElementById('widgetContainer').style.display = 'none';
}

function showWidgets() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'none';
    document.getElementById('aboutUsContainer').style.display = 'none';
    document.getElementById('productsContainer').style.display = 'none';
    document.getElementById('storiesContainer').style.display = 'none';
    document.getElementById('widgetContainer').style.display = 'block';
}

// Add this at the end of your JavaScript file to listen for clicks on the "Stories" link
document.querySelector('a[href="#stories"]').addEventListener('click', showStories);

// Function to validate email format
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to validate password criteria
function validatePassword(password) {
    // Password criteria: At least 8 characters including at least one uppercase letter, one lowercase letter, one number, and one special character
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}

// Function to validate if passwords match
function validatePasswordMatch() {
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('passwordError').textContent = 'Passwords do not match';
        return false;
    } else {
        document.getElementById('passwordError').textContent = '';
        return true;
    }
}

// Real-time feedback for password match validation
document.getElementById('signupPassword').addEventListener('input', validatePasswordMatch);
document.getElementById('confirmPassword').addEventListener('input', validatePasswordMatch);

// Function to validate signup form
function validateSignupForm() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!validatePassword(password)) {
        alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return false;
    }

    if (!validatePasswordMatch()) {
        return false;
    }

    // Additional custom validations if needed

    return true; // Form submission allowed
}

document.getElementById('signupEmail').addEventListener('input', function() {
    const email = this.value;
    const emailError = document.getElementById('emailError');

    if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
    } else {
        emailError.textContent = '';
    }
});

