//タイマー機能
var startTime = 0;
var diffTime = 10000;
var pauseTime = 10000;
var nowTime = 0;

//setIntervalで使用
var intervalID;
var intervalFlag = false;
const intervalTime = 1000 / 60; //60fps

/*タイマーの状態
* 0:停止中
* 1:動作中
* 2:一時停止中
* 3:タイマー終了
*/
var timerState = 0;

//タイマーを文字列にしたやつ
var timerString = "00:00:10.000";

//アラーム音源
var audio;

window.onload = function(){
    audio = new Audio('twugo_urusai_partypeople_original_loop.mp3');
}

function startButtonDown(){
    if(timerState == 0){
        timerState = 1;
        document.getElementById("startButton").innerHTML = "停止";
        startTimer();
    }else if(timerState == 1){
        timerState = 2;
        document.getElementById("startButton").innerHTML = "再開";
        stopTimer();
    }else if(timerState == 2){
        timerState = 1;
        document.getElementById("startButton").innerHTML = "停止";
        startTimer();
    }else{
        timerState = 0;
        stopAudio();
        resetTimer();
        document.getElementById("startButton").innerHTML = "スタート";
    }
}

function resetButtonDown(){
    if(timerState == 2){
        timerString = "00:00:10.000";
        document.getElementById("startButton").innerHTML = "スタート";
        document.getElementById("timerText").innerHTML = timerString;
        timerState == 0;
        resetTimer();
    }else if(timerState == 3){
        timerState = 0;
        stopAudio();
        resetTimer();
        document.getElementById("startButton").innerHTML = "スタート";
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
    diffTime =pauseTime - (nowTime - startTime);
    makeTimerString();
    timerText.innerHTML = timerString;
    if(diffTime <= 0){
        stopTimer();
        timerState = 3;
        diffTime = 0;
        timerText.innerHTML = "00:00:00.000";
        playAudio();
    }
}

function stopTimer(){
    pauseTime = diffTime;
    console.log(pauseTime);
    intervalFlag = false;
    clearInterval(intervalID);
}

function resetTimer(){
    startTime = 0;
    diffTime = 10000;
    pauseTime = 10000;
    nowTime = 0;
    makeTimerString();
    document.getElementById("timerText").innerHTML = timerString;
}

function playAudio(){
    audio.loop = true;
    audio.play();
}

function stopAudio(){
    audio.pause();
    audio.currentTime = 0;
}

function makeTimerString(){
    let ms = Math.floor(diffTime % 1000);
    let m = Math.floor(diffTime / 1000 % 60);
    let s = Math.floor(diffTime / 60000 % 60);
    let h = Math.floor(diffTime / 1000 / 60 / 60 % 60);
    timerString = ("00" + h.toString()).slice(-2) + ":" + ("00" + s.toString()).slice(-2) + ":" + ("00" + m.toString()).slice(-2) + "." + ("000" + ms.toString()).slice(-3);
}