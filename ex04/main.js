function changeColorClass1(){
    var class1Elements = document.getElementsByClassName("class1");
    for(var i = 0; i < class1Elements.length; i++){
        class1Elements.item(i).style.backgroundColor = "red";
    }
}

function changeColorClass2(){
    var class1Elements = document.getElementsByClassName("class1");
    //var class2Elements = class1Elements.item(0).getElementsByClassName("class2");
    var class2Elements = [];
    
    for(var i = 0; i < class1Elements.length; i++){
        class2Elements.push(class1Elements.item(i).getElementsByClassName("class2"));
    }
    

    console.log(typeof class2Elements);
    //console.log(typeof class2Elements.item(0));
    console.log(class2Elements.length);

    for(var i = 0; i < class2Elements.length; i++){
        class2Elements.item(i).style.backgroundColor = "blue";
        /*
        for(var j = 0; j < class2Elements.item(i).length; j++){
            class2Elements.item(i).item(j).style.backgroundColor = "blue";
        }
        */
    }
}

function changeColorClass3(){
    
}

function changeColorWhiteClass1(){
    var class1Elements = document.getElementsByClassName("class1");
    for(var i = 0; i < class1Elements.length; i++){
        class1Elements.item(i).style.backgroundColor = "white";
    }
}

function changeColorWhiteClass2(){
    
}

function changeColorWhiteClass3(){
    
}