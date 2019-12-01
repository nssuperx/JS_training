//タイマー機能
var startTime;

//setIntervalで使用
var intervalID;
var intervalFlag = false;

/*スタートボタン
* 0:スタート（初期状態）
* 1:停止
* 2:再開
*/
var startButtonState = 0;

/*リセットボタン
* 0:ラップ（初期状態）
* 1:リセット
*/
var lapButtonState = 0;

const intervalTime = 1000 / 60; //60fps

function startButtonDown(){
    if(startButtonState == 0){
        startButtonState = 1;
        startTimer();
    }
}

function lapButtonDown(){

}

function startTimer(){
    if(intervalFlag){
        return;
    }else{
        intervalFlag = true;
    }
    startTime = Date.now();
    intervalID = setInterval(moveTimer, intervalTime);
}

function moveTimer(){
    let timerText = document.getElementById("timerText");
    let nowTime = Date.now();
    let diffTime = nowTime - startTime;
    timerText.innerHTML = diffTime.toString();
}

function stopTimer(){
    intervalFlag = false;
    clearInterval(intervalID);
}