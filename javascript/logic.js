console.log("nu zitten we in de logic!");


function clicked_button(event){
    console.log('clicked button');
    var div = document.getElementById("result");
    
    div.innerHTML = "hallo vanuit button"
}
function hover_button(event){
    console.log("nu ga ik met de muis ..");
   
}
button = document.getElementById("start")
//clicked_button(1);//
button.onclick = clicked_button
console.dir(button);