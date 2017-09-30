function randomArrange(){
    var max = 9;
    var random = [];
    for(var i = 0; i < max; i++){
        var temp = Math.floor(Math.random()*max) + 1;
        if(random.indexOf(temp) == -1){
            random.push(temp);
        }
        else
         i--;
    }


    var currentId, newId;
    for(var j = 1; j <= 9; j++){
        currentId = "img-".concat(j);
        newId = "img-".concat(random[j-1]);
        
        document.getElementById(currentId).id = newId;
    }
}



function scanner() {
    var img;
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            img = puzzleMatrix.rows[i].cells[j];
            if(img.id == "img-1"){
                posX = i;
                posY = j;
            } 

        }
        
    }
    
}

function userInput(e)
{
    var keycode, temp;
    if (window.event)
        keycode = window.event.keyCode;
    else if (e)
        keycode = e.which;

    if(keycode == 37 && posY > 0){
        temp = puzzleMatrix.rows[posX].cells[posY].id;
        puzzleMatrix.rows[posX].cells[posY].id = puzzleMatrix.rows[posX].cells[posY - 1].id;
        puzzleMatrix.rows[posX].cells[posY - 1].id = temp; 
        posY = posY - 1;
    }
    else if (keycode == 38 && posX > 0){
        temp = puzzleMatrix.rows[posX].cells[posY].id;
        puzzleMatrix.rows[posX].cells[posY].id = puzzleMatrix.rows[posX - 1].cells[posY].id;
        puzzleMatrix.rows[posX - 1].cells[posY].id = temp;
        posX = posX - 1;
    }
    else if(keycode == 39 && posY < 3){
        temp = puzzleMatrix.rows[posX].cells[posY].id;
        puzzleMatrix.rows[posX].cells[posY].id = puzzleMatrix.rows[posX].cells[posY + 1].id;
        puzzleMatrix.rows[posX].cells[posY + 1].id = temp; 
        posY = posY + 1;   
    }
    else if (keycode == 40 && posX < 3){
        temp = puzzleMatrix.rows[posX].cells[posY].id;
        puzzleMatrix.rows[posX].cells[posY].id = puzzleMatrix.rows[posX + 1].cells[posY].id;
        puzzleMatrix.rows[posX + 1].cells[posY].id = temp;
        posX = posX + 1;
    }

    /*
    switch(keycode){
        case 37: if(posY > 0){
            temp = puzzleMatrix.rows[posX].cells[posY].id;
            puzzleMatrix.rows[posX].cells[posY].id = puzzleMatrix.rows[posX].cells[posY - 1].id;
            puzzleMatrix.rows[posX].cells[posY - 1].id = temp; 
            posY = posY - 1;
        }
        case 38: if(posX > 0){
            temp = puzzleMatrix.rows[posX].cells[posY].id;
            puzzleMatrix.rows[posX].cells[posY].id = puzzleMatrix.rows[posX - 1].cells[posY].id;
            puzzleMatrix.rows[posX - 1].cells[posY].id = temp; 
            posX = posX - 1;
        }
        case 39: if(posY < 3){
            temp = puzzleMatrix.rows[posX].cells[posY].id;
            puzzleMatrix.rows[posX].cells[posY].id = puzzleMatrix.rows[posX].cells[posY + 1].id;
            puzzleMatrix.rows[posX].cells[posY + 1].id = temp; 
            posY = posY + 1;
        }
        case 40: if(posX < 3){
            temp = puzzleMatrix.rows[posX].cells[posY].id;
            puzzleMatrix.rows[posX].cells[posY].id = puzzleMatrix.rows[posX + 1].cells[posY].id;
            puzzleMatrix.rows[posX + 1].cells[posY].id = temp; 
            posX = posX + 1;
        }   
    }
    */
    
}
