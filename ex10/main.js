function addHello(){
    var parent = document.getElementById('parent');
    var hello = document.createElement('div');
    var helloNum = parent.getElementsByClassName('hello').length;
    hello.className = "hello";
    hello.innerHTML = helloNum.toString() + "個目の子要素hello";
    parent.appendChild(hello);
}

function eraseHello(){
    var parent = document.getElementById('parent');
    var helloElements = parent.getElementsByClassName('hello');
}

function drawHello(){
    var classElements = document.getElementsByClassName('test');
    classElements[0].innerHTML = "";
    for(var i = 0; i < helloCount; i++){
        classElements[0].innerHTML += "Hello world!!!!!!<br>";
    }
}
