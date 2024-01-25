function saveData() {
    const email = document.getElementById('email').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const password = document.getElementById('password').value;
  
    if (email && firstName && lastName && password) {
      const userData = {
        email,
        firstName,
        lastName,
        password
      };
      localStorage.setItem('userData', JSON.stringify(userData));

      window.location.href = 'login.html';
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  }
  
  function checkLogin() {
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData && loginEmail === storedUserData.email && loginPassword === storedUserData.password) {  
      alert('ok')
    } else {
      alert('Неправильные данные. Пожалуйста, проверьте введенные данные.');
    }
  }