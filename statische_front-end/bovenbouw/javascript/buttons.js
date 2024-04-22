const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

button1.addEventListener("click", () => {
    document.body.classList.remove("bgc");
    document.body.classList.add("green");
});

button2.addEventListener("click", () => {
    document.body.classList.remove("bgc");
    document.body.classList.add("red");
});

button3.addEventListener("click", () => {
    document.body.classList.remove("bgc");
    document.body.classList.add("blue");
});