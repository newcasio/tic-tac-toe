let endPic = "<img id='endPic' src='https://media.giphy.com/media/l0GRkpk8mcWhekrVC/giphy.gif'>"
let currentPlayer='Player 1';
let currentPosition= undefined;

let board = [0,1,2,3,4,5,6,7,8];

// const winningCombos = [
//   [0,1,2],[3,4,5],[6,7,8],
//   [0,3,6],[1,4,7],[2,5,8],
//   [0,4,8],[2,4,6]
// ];

const turn = function(position, player){
  if (board[position]==='x'||board[position]=='o'){
    alert('Square taken, please choose again');
    return;
  }
  if (currentPlayer === 'Player 1'){
    board[position]='x';
    currentPosition.append('<img src="images/xImage.png" />');
  }else{
    board[position]='o';
    currentPosition.append('<img src="images/oImage.png" />');
  }
  checkForMatch(currentPlayer);
  playerSwitch();
}

const playerSwitch = function(){
  if (currentPlayer ==='Player 1'){
    currentPlayer='Player 2';
  }else{
    currentPlayer='Player 1';
  }
};

const checkForMatch = function(n){
  if (board[0]===board[1] && board[1]===board[2]){
    alert (`Winner is ${n}`);
    endOfGame();
  }else if (board[3]===board[4] && board[4]===board[5]){
    alert (`Winner is ${n}`);
    endOfGame();
  }else if (board[6]===board[7] && board[7]===board[8]){
    alert (`Winner is ${n}`);
    endOfGame();
  }else if (board[0]===board[3] && board[3]===board[6]){
    alert (`Winner is ${n}`);
    endOfGame();
  }else if(board[1]===board[4] && board[4]===board[7]){
    alert (`Winner is ${n}`);
    endOfGame();
  }else if(board[2]===board[5] && board[5]===board[8]){
    alert (`Winner is ${n}`);
    endOfGame();
  }else if(board[0]===board[4] && board[4]===board[8]){
    alert (`Winner is ${n}`);
    endOfGame();
  }else if(board[2]===board[4] && board[4]===board[6]){
    alert (`Winner is ${n}`);
    endOfGame();
  };
};

const endOfGame = function(){
  $('#endOfGame').css('display', 'inline');
};

const resetGame = function(){
  board = [0,1,2,3,4,5,6,7,8];
  currentPlayer = 'Player 1';
  $('.square').empty();  
}
