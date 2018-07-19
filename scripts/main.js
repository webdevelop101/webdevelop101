var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (!mySrc === 'images/ayanfe.png') {
     myImage.setAttribute('src','images/2.png');
    } else {
      myImage.setAttribute ('src','images/1.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Type in Ayanfe');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'I believe in You, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
