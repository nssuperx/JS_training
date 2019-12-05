function addHello(){
    var parent = document.getElementById('parent');     //親要素を取得
    var hello = document.createElement('div');          //divタグの子要素を作成
    var helloNum = parent.getElementsByClassName('hello').length;       //親要素の中にある指定したクラス名を持つ子要素の数をとってくる
    hello.className = "hello";                          //クラス名を指定
    hello.innerHTML = helloNum.toString() + "個目の子要素hello";         //文字列を代入
    parent.appendChild(hello);                          //親要素の一番後ろに新しく作った子要素を追加
}

function eraseHello(){
    var parent = document.getElementById('parent');     //親要素を取得
    parent.removeChild(parent.lastElementChild);        //指定した子要素を削除，ここでは一番後ろの子要素
}

function changeHello(){
    var parent = document.getElementById('parent');     //親要素を取得

}
