let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/food-healthy-meal-dinner.jpg') {
        myImage.setAttribute ('src','images/vegetables-healthy-salad-fit.jpg');
    } else {
        myImage.setAttribute ('src','images/food-healthy-meal-dinner.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Welcome, ' + myName;
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}