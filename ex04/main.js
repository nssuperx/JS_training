function changeColorClass1(bgcolor){
    var class1Elements = document.getElementsByClassName("class1");
    for(var i = 0; i < class1Elements.length; i++){
        class1Elements.item(i).style.backgroundColor = bgcolor;
    }
}

function changeColorClass2(bgcolor){
    var class1Elements = document.getElementsByClassName("class1");
    var class2Elements = [];
    
    for(var i = 0; i < class1Elements.length; i++){
        class2Elements.push(class1Elements.item(i).getElementsByClassName("class2"));
    }
    
    console.log(class2Elements[0]);
    console.log(class2Elements);

    for(var i = 0; i < class2Elements.length; i++){
        for(var j = 0; j < class2Elements[i].length; j++){
            class2Elements[i].item(j).style.backgroundColor = bgcolor;
        }
    }
}

function changeColorClass3(bgcolor){
    var class1Elements = document.getElementsByClassName("class1");
    var class2Elements = [];
    var class3Elements = [];
    
    for(var i = 0; i < class1Elements.length; i++){
        class2Elements.push(class1Elements.item(i).getElementsByClassName("class2"));
    }
    
    for(var i = 0; i < class2Elements.length; i++){
        for(var j = 0; j < class2Elements[i].length; j++){
            class3Elements.push(class2Elements[i].item(j).getElementsByClassName("class3"));
        }
    }
    console.log(class2Elements.length);
    console.log(class2Elements[0].length);
    console.log(class2Elements[1].length);
    console.log(class3Elements);

    for(var i = 0; i < class3Elements.length; i++){
        for(var j = 0; j < class3Elements[i].length; j++){
            class3Elements[i].item(j).style.backgroundColor = bgcolor;
        }
    }
}
