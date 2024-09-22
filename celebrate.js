document.getElementById('showPassword').addEventListener('click', function() {
  const passwordField = document.getElementById('password');
  if (passwordField.type === 'password') {
      passwordField.type = 'text';
      this.innerText = 'Hide';
  } else {
      passwordField.type = 'password';
      this.innerText = 'Show';
  }
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();


  document.getElementById('imageZoom').classList.add('zoomed');
});
