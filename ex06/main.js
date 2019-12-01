//タイマー機能
var startTime = 0;
var diffTime = 0;

//setIntervalで使用
var intervalID;
var intervalFlag = false;

/*スタートボタン
* 0:スタート（初期状態）
* 1:停止（動作中）
* 2:再開（停止中）
*/
var startButtonState = 0;

/*ラップボタン
* 0:ラップ（初期状態）
* 1:リセット（タイマー停止中）
*/
var lapButtonState = 0;

//ボタンの状態で管理するよりタイマーの状態で管理したほうがすっきりするくね??

const intervalTime = 1000 / 60; //60fps

function startButtonDown(){
    if(startButtonState == 0){
        startButtonState = 1;
        document.getElementById("startButton").innerHTML = "停止";
        startTimer();
    }else if(startButtonState == 1){
        startButtonState = 2;
        lapButtonState = 1;
        document.getElementById("startButton").innerHTML = "再開";
        document.getElementById("lapButton").innerHTML = "リセット";
    }else{
        startButtonState = 1;
        lapButtonState = 0;
        document.getElementById("startButton").innerHTML = "停止";
        document.getElementById("lapButton").innerHTML = "ラップ";
    }
}

function lapButtonDown(){
    if(lapButtonState == 0 && startButtonState == 1){
        document.getElementById("lapTime").innerHTML += diffTime.toString() + "<br>";
    }else{
        startButtonState = 0;
        lapButtonState = 0;
        document.getElementById("startButton").innerHTML = "スタート";
        document.getElementById("lapButton").innerHTML = "ラップ";
        document.getElementById("lapTime").innerHTML = "";
    }
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
    diffTime = nowTime - startTime;
    timerText.innerHTML = diffTime.toString();
}

function stopTimer(){
    startTime = 0;
    intervalFlag = false;
    clearInterval(intervalID);
}