'use strict'
const btnSubmit = document.querySelector('button[type="submit"]')

class Person {
  constructor(firstName, lastName, nickName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
    this.email = email;
  }
}

function collectPropsFromForm(event) {
  event.preventDefault();
  const collectionProps = Array.from(
    document.querySelectorAll('#outer-input-container input[type="text"]')); 
  const lastName = document.querySelector('input[name="lastName"]')
  const arrValues = collectionProps.map((item) => item.value);
  const person = new Person(...arrValues)

  localStorage.setItem(`${lastName.value}`, JSON.stringify(person));
  console.log(collectionProps)
  console.log(arrValues)
}

const emailInput = document.querySelector('input[name="email"]');
let errorElement;


function validateEmail() {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!reg.test(emailInput.value)) {
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.style.color = 'red';
            errorElement.style.border = '2px solid red';
            errorElement.textContent = 'You entered an invalid email';
            emailInput.insertAdjacentElement('afterend', errorElement);
        }
    } else {
        if (errorElement) {
            errorElement.remove();
            errorElement = null;
        }
    }
}

emailInput.addEventListener('input', validateEmail);

btnSubmit.addEventListener('click', collectPropsFromForm)
