const container = document.querySelector('.container');
const signupButton = document.querySelector('.signup-section header');
const loginButton = document.querySelector('.login-section header');

const signuoButtonInfo = document.querySelector('.signup-section header');


const signupButtonData = document.querySelector('.btnSign');
const loginButtonData = document.querySelector('.btnLog');

loginButton.addEventListener('click', () => {
    container.classList.add('active');
});

signupButton.addEventListener('click', () => {
    container.classList.remove('active');
});

loginButtonData.addEventListener('click', () => {
    // Prevent default form submission if necessary (assuming a login form inside the login section)
    console.log("Si")
    event.preventDefault(); // Uncomment this line if there's a form
  
    // Send AJAX request for login
    $.ajax({
      url: '/login', // Replace with your actual login route
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        // Retrieve email and password values here
        email: $('#login-email').val(),
        password: $('#login-password').val()
      }),
      success: function(response) {
        alert(response.message);
        // Handle successful login response (e.g., redirect to another page)
      },
      error: function(xhr, status, error) {
        console.error(error);
        alert("Login failed. Please check your credentials."); // Or display a more user-friendly error message
      }
    });
  });

  signupButtonData.addEventListener('click', () => {
    console.log("rin rin")
    // Prevent default form submission if necessary (assuming a signup form inside the signup section)
    event.preventDefault(); // Uncomment this line if there's a form
    // Retrieve signup data (name, email, password) here
    const name = $('#signup-name').val();
    const email = $('#signup-email').val();
    const password = $('#signup-password').val();
    console.log(name, email, password);
    // Send AJAX request for signup
    $.ajax({
      url: '/signup', // Replace with your actual signup route
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        name: name,
        email: email,
        password: password
      }),
      success: function(response) {
        alert(response.message);
        // Handle successful signup response (e.g., redirect to another page)
      },
      error: function(xhr, status, error) {
        console.error(error);
        alert("Signup failed. Please check your information."); // Or display a more user-friendly error message
      }
    });
  });


$(document).ready(function() {
    $('#signup-form').on('submit', function(event) {
        event.preventDefault();
        let name = $('#signup-name').val();
        let email = $('#signup-email').val();
        let password = $('#signup-password').val();

        console.log("Signup form submitted");
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Password: " + password);

        $.ajax({
            url: '/signup',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                name: name,
                email: email,
                password: password
            }),
            success: function(response) {
                alert(response.message);
            },
            error: function(xhr, status, error) {
                console.error(error);
            }
        });
    });

    $('#login-form').on('submit', function(event) {
        event.preventDefault();
        let email = $('#login-email').val();
        let password = $('#login-password').val();

        console.log("Login form submitted");
        console.log("Email: " + email);
        console.log("Password: " + password);

        $.ajax({
            url: '/login',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                email: email,
                password: password
            }),
            success: function(response) {
                alert(response.message);
            },
            error: function(xhr, status, error) {
                console.error(error);
            }
        });
    });
});