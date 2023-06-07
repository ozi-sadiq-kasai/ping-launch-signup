let input = document.querySelector('.input')
let error = document.querySelector('.input__error')

const displayError = ()=>{
  let email = input.value
  if(email.length === 0 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    error.style.display = 'block'
    input.style.border='1px solid red'
  }
  else{
    input.style.border='1px solid green'
    error.style.display = 'none'
  }
}

let btn = document.querySelector('.input__btn').addEventListener('click',displayError)