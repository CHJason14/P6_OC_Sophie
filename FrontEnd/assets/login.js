const token = 0;
var email=document.getElementById('email');
var pwd=document.getElementById('pwd');

var form=document.getElementById('form-login')

form.addEventListener('submit', (e) => {
 e.preventDefault()

email = email.value;
pwd = pwd.value;
const connect = {
  "email": email,
  "password": pwd,
};
console.log(test);

fetch('http://localhost:5678/api/users/login', {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method: "POST",
  body : JSON.stringify(connect),
})
  .then((res) => {
  return res.json();
  console.log(res);
  })
  .catch((err) => console.log(err));;

})