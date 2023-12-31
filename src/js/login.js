const loginFormEl = document.querySelector('form#loginForm');

const checkIfserLoggedIn = () => {
    const userObj = JSON.parse(localStorage.getItem('user'))
    if (userObj) {
        window.location.replace('/src/dashboard.html')
    }
}

//checkIfserLoggedIn();



const handleLoginForm = (e) => {
  e.preventDefault()


  const formData = new FormData(loginFormEl);
  //const loginE  = Object.fromEntries(formData);




  const { email, password } = Object.fromEntries(formData);



  loginUser(email, password)
    .then((user) => {
      localStorage.setItem('user', JSON.stringify(user))
      window.location.replace('/src/dashboard.html')
    })
    .catch(({errorCode}) => {
      if (errorCode === 'auth/user-not-found'){
        alert("Username/Password doesn't exist")
      }
    })


  loginFormEl.reset();

}

loginFormEl.addEventListener('submit', handleLoginForm);

