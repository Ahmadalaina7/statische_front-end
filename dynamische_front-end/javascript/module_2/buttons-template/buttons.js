const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const myImage = document.getElementById("myImage");
const container = document.querySelector(".container");
button1.onclick = clickt;
button2.onclick = clickt;
button3.onclick = clickt;
button1.counter = 0;
button2.counter = 0;
button3.counter = 0;

function clickt() {
  console.dir(this);
  if (this.counter === 1) {
    this.counter = 0;
  } else {
    this.counter++;
  }
  this.innerHTML = this.counter;
  backgroundimage();
}

let buttons = document.querySelectorAll('button'); // select all buttons
buttons.forEach(button => {
  button.addEventListener('click', function() {
    if(this.counter ===1){
      this.style.backgroundColor = 'red'; // change background color to red
    } else if (this.counter === 0){
      this.style.backgroundColor = 'green'; 
    }
  });
});

function backgroundimage() {
  if (button1.innerHTML == 1 && button2.innerHTML == 1 && button3.innerHTML == 1) {
    container.style.backgroundImage = "url(images/bg3.jpg)";
    myImage.src = "images/3.jpg";
  }
  else if (button1.innerHTML == 1 && button2.innerHTML == 1 && button3.innerHTML == 0 || button1.innerHTML == 0 && button2.innerHTML == 1 && button3.innerHTML == 1 || button1.innerHTML == 1 && button2.innerHTML == 0 && button3.innerHTML == 1) {
    container.style.backgroundImage = "url(images/bg2.jpg)";
    myImage.src = "images/2.jpg";
  }
  else if (button1.innerHTML == 1 && button2.innerHTML == 0 && button3.innerHTML == 0 || button1.innerHTML == 0 && button2.innerHTML == 0 && button3.innerHTML == 1 || button1.innerHTML == 0 && button2.innerHTML == 1 && button3.innerHTML == 0) {
    container.style.backgroundImage = "url(images/bg1.jpg)";
    myImage.src = "images/1.jpg";
  }
  else {
    container.style.backgroundImage = "url(images/bg0.jpg)";
    myImage.src = "images/0.jpg";
  }
}
