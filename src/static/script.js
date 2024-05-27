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
    console.log("Si")
    event.preventDefault();
  
    $.ajax({
      url: '/login', 
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        email: $('#login-email').val(),
        password: $('#login-password').val()
      }),
      success: function(response) {
        alert(response.message);
      },
      error: function(xhr, status, error) {
        console.error(error);
        alert("Login failed. Please check your credentials."); 
      }
    });
  });

  signupButtonData.addEventListener('click', () => {
    console.log("rin rin")
    event.preventDefault();
    const name = $('#signup-name').val();
    const email = $('#signup-email').val();
    const password = $('#signup-password').val();
    console.log(name, email, password);
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
        alert("Signup failed. Please check your information.");
      }
    });
  });
