window.turn = 0;
window.movecount = 0;
window.boardarray = new Array();
window.AI = false;

function checkWinner(row, col, rows, cols){                               //check if last move caused a four in a row/ a win
  if(checkHorizontal(row, col, rows, cols) == true || checkVertical(row, col, rows, cols) == true || checkDiagonal(row, col, rows, cols) == true){
    var turn = window.turn + 1;
    setTimeout(function() {
      alert("Congratulations! Winner: Player "+turn);
      window.location.href = "start.html";
    }, 500);
  }
}

function checkVertical(row, col, rows, cols){
  var win = false;

  //check 3 before
  if((row - 3) > 0){
    for(var x = (row - 3); x <= row; x++){
      if(boardarray[x][col] != window.turn){
        win = false;
        break;
      }
      win = true;
    }

    if(win == true){
      return true;
    }
  }

  //check 3 after
  if((row + 3) <= rows){
    for(var x = row; x <= (row + 3); x++){
      if(boardarray[x][col] != window.turn){
        win = false;
        break;
      }
      win = true;
    }

    if(win == true){
      return true;
    }
  }

  //check 2 left 1 right
  if((row + 1) <= rows && (row - 2) > 0){
    for(var x = (row - 2); x <= (row + 1); x++){
      if(boardarray[x][col] != window.turn){
        win = false;
        break;
      }
      win = true;
    }

    if(win == true){
      return true;
    }
  }

  //check 1 left 2 right
  if((row - 1) <= rows && (row + 2) > 0){
    for(var x = (row - 1); x <= (row + 2); x++){
      if(boardarray[x][col] != window.turn){
        win = false;
        break;
      }
      win = true;
    }

    if(win == true){
      return true;
    }
  }


}

function checkHorizontal(row, col, rows, cols){
  var win = false;

  //check 3 before
  if((col - 3) > 0){
    for(var x = (col - 3); x <= col; x++){
      if(boardarray[row][x] != window.turn){
        win = false;
        break;
      }
      win = true;
    }

    if(win == true){
      return true;
    }
  }

  //check 3 after
  if((col + 3) <= cols){
    for(var x = col; x <= (col + 3); x++){
      if(boardarray[row][x] != window.turn){
        win = false;
        break;
      }
      win = true;
    }

    if(win == true){
      return true;
    }
  }

  //check 2 left 1 right
  if((col + 1) <= cols && (col - 2) > 0){
    for(var x = (col - 2); x <= (col + 1); x++){
      if(boardarray[row][x] != window.turn){
        win = false;
        break;
      }
      win = true;
    }

    if(win == true){
      return true;
    }
  }

  //check 1 left 2 right
  if((col - 1) <= cols && (col + 2) > 0){
    for(var x = (col - 1); x <= (col + 2); x++){
      if(boardarray[row][x] != window.turn){
        win = false;
        break;
      }
      win = true;
    }

    if(win == true){
      return true;
    }
  }


}

function checkDiagonal(row, col, rows, cols){
  var win = false;

  //check 3 before; right-left upward
  if((col - 3) > 0 && (row - 3) > 0){
    var rowcount = row - 3;
    for(var x = (col - 3); x <= col; x++){
      if(boardarray[rowcount][x] != window.turn){
        win = false;
        break;
      }
      win = true;
      rowcount++;
    }

    if(win == true){
      return true;
    }
  }

  //check 3 before; right-left downward
  if((col - 3) > 0 && (row + 3) <= rows){

    var rowcount = row + 3;
    for(var x = (col - 3); x <= col; x++){
      if(boardarray[rowcount][x] != window.turn){
        win = false;
        break;
      }
      win = true;
      rowcount--;
    }

    if(win == true){
      return true;
    }
  }

  //check 3 after; right-left upward
  if((col + 3) <= cols && (row - 3) > 0){
    var rowcount = row;
    for(var x = col; x <= (col + 3); x++){
      if(boardarray[rowcount][x] != window.turn){
        win = false;
        break;
      }
      rowcount--;
      win = true;
    }

    if(win == true){
      return true;
    }
  }

  //check 3 after; right-left downward
  if((col + 3) <= cols && (row + 3) <= rows){
    var rowcount = row;
    for(var x = col; x <= (col + 3); x++){
      if(boardarray[rowcount][x] != window.turn){
        win = false;
        break;
      }
      rowcount++;
      win = true;
    }

    if(win == true){
      return true;
    }
  }

  //check 2 left 1 right; right-left upwards
  if(((col + 1) <= cols && (col - 2) > 0) && ((row + 1) <= rows && (row - 2) > 0)){
    var rowcount = row - 2;
    for(var x = (col - 2); x <= (col + 1); x++){
      if(boardarray[rowcount][x] != window.turn){
        win = false;
        break;
      }
      rowcount++;
      win = true;
    }

    if(win == true){
      return true;
    }
  }

  //check 2 left 1 right; right-left downwards
  if(((col + 1) <= cols && (col - 2) > 0) && ((row + 2) <= rows && (row - 1) > 0)){
    var rowcount = row + 2;
    for(var x = (col - 2); x <= (col + 1); x++){
      if(boardarray[rowcount][x] != window.turn){
        win = false;
        break;
      }
      rowcount--;
      win = true;
    }

    if(win == true){
      return true;
    }
  }

  //check 1 left 2 right; right-left upwards
  if(((col - 1) <= cols && (col + 2) > 0) && ((row - 1) > 0 && (row + 2) <= rows)){
    var rowcount = row - 1;
    for(var x = (col - 1); x <= (col + 2); x++){
      if(boardarray[row][x] != window.turn){
        win = false;
        break;
      }
      rowcount ++;
      win = true;
    }

    if(win == true){
      return true;
    }
  }

  //check 1 left 2 right; right-left downwards
  if(((col - 1) <= cols && (col + 2) > 0) && ((row - 2) > 0 && (row + 1) <= rows)){
    var rowcount = row + 1;
    for(var x = (col - 1); x <= (col + 2); x++){
      if(boardarray[row][x] != window.turn){
        win = false;
        break;
      }
      rowcount --;
      win = true;
    }

    if(win == true){
      return true;
    }
  }


}

function gameOver(){                                              //if all cells are filled
  setTimeout(function() {
    alert("Draw! No one wins!");
    window.location.href = "start.html";
  }, 500);
}

function drop(col, rows, cols){                                       //drop for both non ai and ai
    var row = droporig(col, rows, cols);
    if(window.AI == "true"){
      dropAI(row, col, rows, cols);
    }

}

function dropAI(row, col, rows, cols){                                //drop AI randomly depending on last move of player
  setTimeout(function () {
  if (row == 1){
    if(col + 1 <= cols){
      droporig((col+1), rows, cols);
    }
    else{
      droporig((col-1), rows, cols)
    }
  }
  else{
    droporig(col, rows, cols);
  }
  }, 1500);
}

function droporig(col, rows, cols){                                   //drop circle/checker inside cell
    var endrange = col * cols;
    var beginrange = (endrange - rows) + 1;
    var target = endrange;
    var content = document.getElementById(target).textContent;
    var filled = document.getElementById(target).getAttribute("data-filled");

    //check from bottom if filled and find first unfilled cell in column
    while((filled == "yes") && (target >= beginrange)){
      target--;
      content = document.getElementById(target).textContent;
      filled = document.getElementById(target).getAttribute("data-filled");
    }

    //found unfilled cell (target) and make sure it is within begin range
    if(target >= beginrange){

      var oldcircle = document.getElementById(target).childNodes[0];
      var circlenode = document.createElement("DIV");
      var row = target % rows;
      if(row == 0){
        row = rows;
      }
      circlenode.setAttribute("class", "circle2");
      circlenode.style.backgroundColor = getChecker();
      document.getElementById(target).replaceChild(circlenode, oldcircle);
      document.getElementById(target).setAttribute("data-filled", "yes");

      window.boardarray[row][col] = window.turn;

      //check if last move caused a win
      checkWinner(row, col, rows, cols);

      //change turn and increment move counter
      window.turn = (window.turn + 1) % 2;
      if(window.AI == "true" && window.turn == 1){
        document.getElementById("compturn").innerHTML = "Turn: Computer";
      }
      else{
        document.getElementById("compturn").innerHTML = "Turn: Player <span id='turn'>1</span>";
        document.getElementById("turn").innerHTML = window.turn + 1;
      }
      window.movecount++;

      //if all cells are filled game over
      if(window.movecount == rows * cols){
        gameOver();
      }

    }

    return row;

}

function getChecker(){                                  //get checker color of current player
  if(window.turn == 0){
    return "#EA5C6A";
  }
  else{
    return "#FEEA41";
  }
}

function setup(){                                       //set up number of rows and cols
  var rows = getVariables("rows");
  var cols = getVariables("cols");
  window.AI = getVariables("AI");

  //first set up insert/drop buttons
  var rownode = document.createElement("TR");
  for(var x = 0; x < cols; x++){
    var colnode = document.createElement("TD");
    var buttonnode = document.createElement("BUTTON");
    buttonnode.setAttribute("onclick", "drop("+(x+1)+", "+rows+", "+cols+")");
    var inode = document.createElement("I");
    inode.setAttribute("class", "fa fa-arrow-down");
    inode.setAttribute("aria-hidden", "true");
    buttonnode.appendChild(inode);
    colnode.appendChild(buttonnode);
    rownode.appendChild(colnode);
  }
  document.getElementById("mytable").appendChild(rownode);


  for(var x = 0; x < rows; x++){
      window.boardarray[x] = new Array();
      window.boardarray[x+1] = new Array();             //initialize board represented by 2D array
      var rownode = document.createElement("TR");
      rownode.setAttribute("id", "row"+x);
      // colnode.setAttribute("onclick", "drop(1, 7, 7)");
      document.getElementById("mytable").appendChild(rownode);

      for(var y = 0; y < cols; y++){
        window.boardarray[x][y] = null;
        window.boardarray[x+1][y+1] = -1;               //initialize board represented by 2D array
        var colnode = document.createElement("TD");
        colnode.setAttribute("id", (x+1)+(cols*y));
        colnode.setAttribute("data-filled", "no");
        var circlenode = document.createElement("DIV");
        circlenode.setAttribute("class", "circle");
        colnode.appendChild(circlenode);
        document.getElementById("row"+x).appendChild(colnode);

      }
  }
}

function getVariables(variable)                         //get GET variables from url
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i = 0; i < vars.length; i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){
                 return pair[1];
               }
       }
       return(false);
}
