window.onload = function(){
    var say = document.getElementById('sayButton');
    var erase = document.getElementById('eraseButton');
    say.addEventListener('click', sayHello, false);
    erase.addEventListener('click', eraseHello, false);
}

function sayHello(){
    var textArea = document.getElementById('textArea');
    textArea.innerHTML = "Hello world!!!!!";
}

function eraseHello(){
    var textArea = document.getElementById('textArea');
    textArea.innerHTML = "";
}
