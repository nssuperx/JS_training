//タイマー機能
var startTime = 0;
var diffTime = 0;
var pauseTime = 0;
var nowTime = 0;

//setIntervalで使用
var intervalID;
var intervalFlag = false;

/*タイマーの状態
* 0:停止中
* 1:動作中
* 2:一時停止中
*/
var timerState = 0;


const intervalTime = 1000 / 60; //60fps

function startButtonDown(){
    if(timerState == 0){
        timerState = 1;
        document.getElementById("startButton").innerHTML = "停止";
        startTimer();
    }else if(timerState == 1){
        timerState = 2;
        document.getElementById("startButton").innerHTML = "再開";
        document.getElementById("lapButton").innerHTML = "リセット";
        stopTimer();
    }else{
        timerState = 1;
        document.getElementById("startButton").innerHTML = "停止";
        document.getElementById("lapButton").innerHTML = "ラップ";
        startTimer();
    }
}

function lapButtonDown(){
    if(timerState == 1){
        document.getElementById("lapTime").innerHTML += diffTime.toString() + "<br>";
    }else if(timerState == 2){
        document.getElementById("startButton").innerHTML = "スタート";
        document.getElementById("lapButton").innerHTML = "ラップ";
        document.getElementById("timerText").innerHTML = "0";
        document.getElementById("lapTime").innerHTML = "";
        timerState == 0;
        resetTimer();
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
    nowTime = Date.now();
    diffTime = nowTime - startTime + pauseTime;
    //ここから計算用変数
    let ms = Math.floor(diffTime % 1000);
    let m = Math.floor(diffTime / 1000 % 60);
    let s = Math.floor(diffTime / 1000 / 60 % 60);
    let h = Math.floor(diffTime / 1000 / 60 / 60 % 60);
    timerText.innerHTML = h.toString() + ":" + s.toString() + ":" + m.toString() + "." + ms.toString();
}

function stopTimer(){
    pauseTime = diffTime;
    console.log(pauseTime);
    intervalFlag = false;
    clearInterval(intervalID);
}

function resetTimer(){
    startTime = 0;
    diffTime = 0;
    pauseTime = 0
    nowTime = 0;
}