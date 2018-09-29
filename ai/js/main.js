let board = [0,1,2,3,4,5,6,7,8];

let player = 'x';
let count =0;
let random = Math.floor(Math.random()*9);

const turn = function(player, position){
  if (board[position]==='x' || board[position]==='o'){
    alert ('Square taken, choose again');
    return;
  }else{
    board[position]='x';
    $(`#${position}`).text('X');
    switchPlayer();
    count++;

    if(count===9){
      alert('Draw!');
      return;
    }else{
      computersTurn();
      switchPlayer();
    }
  }
};

const switchPlayer = function(){
  if(player==='x'){
    player = 'o';
  }else{
    player = 'x';
  }
};

const computersTurn = function(){
  const winPosition = blockWin( player );  //check first for computer to win
  if( winPosition !== null ){
    // play move into winPosition
    console.log('win move:', winPosition);
    board[winPosition] = 'o';
    $(`#${winPosition}`).text('O');
    count++;
    return;
  }
  let opponent='x';
  // if(player==='x'){
  //   opponent = 'computer';
  // }else{
  //   opponent = 'human'
  // }
  console.log(opponent);
  const blocker = blockWin(opponent);
  if( blocker !== null ){
    board[blocker] = 'o';
    $(`#${blocker}`).text('O');
    count++;
    return;
  }

  let randomNumber = Math.floor(Math.random()*9);
  // if(board[4]!=='x'||board[4]!=='o'){  //if centre square not taken, take it.
  //   board[4]= 'o';
  // }


  if (board[randomNumber]==='x' || board[randomNumber]==='o'){
    computersTurn();
  }else{
    board[randomNumber] = 'o';
    $(`#${randomNumber}`).text('O');
    count++;
  }
}

const checkForMatch = function(n){
  if (board[0]===board[1] && board[1]===board[2]){
    console.log('Winner');
  }else if (board[3]===board[4] && board[4]===board[5]){
    console.log('Winner');
  }else if (board[6]===board[7] && board[7]===board[8]){
    console.log('Winner');
  }else if (board[0]===board[3] && board[3]===board[6]){
    console.log('Winner');
  }else if(board[1]===board[4] && board[4]===board[7]){
    console.log('Winner');
  }else if(board[2]===board[5] && board[5]===board[8]){
    console.log('Winner');
  }else if(board[0]===board[4] && board[4]===board[8]){
    console.log('Winner');
  }else if(board[2]===board[4] && board[4]===board[6]){
    console.log('Winner');
  }
};


let blockWin = function( playerSymbol ){

  let line = [
    [0,1,2],  //rows
    [3,4,5],
    [6,7,8],
    [0,3,6],    //columns
    [1,4,7],
    [2,5,8],
    [0,4,8],    //diagonals
    [2,4,6]
  ];

  for(let j = 0; j<line.length; j++){   //loop through line array
    let vacant;
    let lineTotal = 0;
    let currentLine = line[j];
    for(let i =0; i<line[j].length; i++){  //loop through internal array
      const position = currentLine[i];
      if (board[position] === position){   //eg check if board[0] === 0, not x or o --> freecell
        lineTotal += 1;
        vacant = board[position];
      } else if( board[position]=== playerSymbol ){   //playerSymbol is the argument passed in
        lineTotal += 2;
      }
    }  // end looping through internal array in line array
    if (lineTotal === 5){
      console.log('found 2 in a line!!!!');
      return vacant;
    }
    // console.log(j, playerSymbol, 'fail', lineTotal, currentLine);
  } //looping through line array
  return null;
};   //end of blockWin function
