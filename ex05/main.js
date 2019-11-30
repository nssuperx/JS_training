var intervalID;
var counter = 0;
var intervalFlag = false;

function startMoveString(){
    if(intervalFlag){
        return;
    }else{
        intervalFlag = true;
    }
    var inputText = document.getElementsByClassName("inputtext")[0].value;
    if(inputText == ""){
        inputText = "文字列、動きます。"
    }
    intervalID = setInterval(moveString, 1000, inputText);
}

function moveString(inputText){
    var elements = document.getElementsByClassName("movearea");
    console.log(elements);
    elements.item(counter).innerHTML = inputText;
    elements.item((counter + elements.length - 1) % elements.length).innerHTML = " ";
    counter += 1;
    if(counter >= elements.length){
        counter = 0;
    }
}

function stopString(){
    intervalFlag = false;
    clearInterval(intervalID);
}