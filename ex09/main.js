window.onload = function(){
    var say = document.getElementById('sayButton');
    var erase = document.getElementById('eraseButton');
    //ページ読み込み時に、イベントが発生したときにどの関数を呼び出すかを設定している。
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
