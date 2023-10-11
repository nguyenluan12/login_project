// showpassword
let showPassword = document.getElementById('showPassword')
let inputPassword = document.getElementById('password')
showPassword.onclick = function(){
  if(inputPassword.type=='password'){
    inputPassword.type = 'text';
  }else{
    inputPassword.type = 'password';
    showPassword.classList.remove('show');
  }
}
//error email massage
 let emailInput = document.getElementById('username')
 let emailError = document.getElementById('email-error')
 emailInput.addEventListener('blur',()=>{
  const email = emailInput.value;
  console.log(email);
  const emailParttern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if(!emailParttern.test(email)){
    emailInput.classList.add('error');
    emailError.textContent= 'Nhập lại email';

  }else{
    emailInput.classList.remove('error');
    emailError.textContent='';
  }
 });