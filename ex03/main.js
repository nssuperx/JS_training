var helloCount = 0;
function addHello(){
    helloCount += 1;
    drawHello();
}

function eraseHello(){
    helloCount -= 1;
    if(helloCount < 0){
        helloCount = 0;
    }
    drawHello();
}

function drawHello(){
    var classElements = document.getElementsByClassName('test');
    classElements[0].innerHTML = "";
    for(var i = 0; i < helloCount; i++){
        classElements[0].innerHTML += "Hello world!!!!!!<br>";
    }
}
