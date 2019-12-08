function addHello(){
    var parent = document.getElementById('parent');     //親要素を取得
    var hello = document.createElement('div');          //divタグの子要素を作成
    var helloNum = parent.getElementsByClassName('hello').length;       //親要素の中にある指定したクラス名を持つ子要素の数をとってくる
    hello.className = "hello";                          //クラス名を指定
    hello.innerHTML = helloNum.toString() + "個目の子要素hello,world!!!";         //文字列を代入
    parent.appendChild(hello);                          //親要素の一番後ろに新しく作った子要素を追加
}

function eraseHello(){
    var parent = document.getElementById('parent');     //親要素を取得
    console.log(parent.lastElementChild);               //子要素がどんな値になってるのか確認した
    if(parent.lastElementChild != null){                //子要素があるかないか確認，nullじゃなかったら（要素があったら）実行
        parent.removeChild(parent.lastElementChild);    //指定した子要素を削除，ここでは一番後ろの子要素
    }
}

function changeHello(){
    var parent = document.getElementById('parent');             //親要素を取得
    var helloChilds = parent.getElementsByClassName('hello');   //子要素群を取得
    for(var h of helloChilds){                                  //子要素それぞれ繰り返し
        var beforeString = h.innerHTML;                         //置き換え前の文字列をとっとく
        if(h.innerHTML.indexOf('hello') == -1){                 //ローマ字のhelloが見つからなかったら
            h.innerHTML = beforeString.replace('はろーわーるど','hello,world');         //置き換え前はひらがなのはずなのでローマ字に
        }else{
            h.innerHTML = beforeString.replace('hello,world','はろーわーるど');         //置き換え前はローマ字のはずなのでひらがなに
        }
    }
}
