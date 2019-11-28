window.onload = function(){
    console.log('onloadした');
    let classElements = document.getElementsByClassName('test');
    classElements[0].innerHTML = "";
}

function addString(){
    let inputtext = document.getElementsByClassName('inputtext')[0].value;
    console.log(inputtext);
    inputtext += "<br>";
    let classElements = document.getElementsByClassName('test');
    classElements[0].innerHTML += inputtext;
}

function eraseString(){
    let classElements = document.getElementsByClassName('test');
    let editString = classElements[0].innerHTML;
    editString = editString.substring(0,editString.length - 4);
    let editString_lastidx = editString.lastIndexOf("<br>");
    if(editString_lastidx == -1){
        editString = "";
    }else{
        editString = editString.substring(0,editString_lastidx + 4);
    }
    classElements[0].innerHTML = editString;
}
