// dom elements

const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

//showtime
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //set am or pm
  const ampm = hour >= 12 ? "PM" : "AM";

  //12 hour format
  hour = hour % 12 || 12;

  //ouotpupt time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${ampm}`;

  setTimeout(showTime, 1000);
}

//add padded zero in prefix
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

//update background  and greeting on time
function setBG() {
  let hour = new Date().getHours();

  if (hour < 12) {
    //morning
    document.body.style.backgroundImage = "url('../img/morning.jpg')";
    greeting.textContent = "Good morning";
  } else if (hour < 16) {
    //afternoon
    document.body.style.backgroundImage = "url('../img/noon.jpg')";
    greeting.textContent = "Good afternoon";
    document.body.style.color = "white";
  } else {
    //evening
    document.body.style.backgroundImage = "url('../img/evening.jpg')";
    greeting.textContent = "Good evening";
    document.body.style.color = "white";
  }
}

//get name
function getName() {
  if (localStorage.getItem("nameofuser") === null) {
    name.textContent = "[Enter name]";
  } else {
    name.textContent = localStorage.getItem("nameofuser");
  }
}

//setName
function setName(event) {
    if (event.type === 'keypress') {
        //make sure enter if press
        if (event.which == 13 || event.keyCode ==13) {
            localStorage.setItem('nameofuser', event.target.innerText);
            name.blur();

        }
    } else {
        localStorage.setItem('nameofuser', event.target.innerText);
    }

}

//get focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

//setFocus
function setFocus(event) {
    if (event.type === 'keypress') {
        //make sure enter if press
        if (event.which == 13 || event.keyCode ==13) {
            localStorage.setItem('focus', event.target.innerText);
            focus.blur();

        }
    } else {
        localStorage.setItem('focus', event.target.innerText);
    }

}

//
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

//
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);



//run it
showTime();
setBG();
getName();
getFocus();
