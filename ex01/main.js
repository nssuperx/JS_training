/********************
 * document.getElementsByClassName()
 * 指定したクラス名を持った要素(element)をHTMLCollectionという配列みたいなのにまとめて持ってこれる。
 * 配列みたいにインデックス指定して使える。
 ********************/

function sayHello(){
    var classElements = document.getElementsByClassName('test');
    classElements[0].innerHTML = "Hello world!!!!!";
}

function eraseHello(){
    var classElements = document.getElementsByClassName('test');
    classElements[0].innerHTML = "";
}
