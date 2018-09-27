
let currentPlayer = undefined;
let currentPosition= undefined;

turnCount = 0;

let player1ScoreDisplay = 0;
$('#player1Score').text(player1ScoreDisplay);

let player2ScoreDisplay = 0;
$('#player2Score').text(player2ScoreDisplay);

let board = [0,1,2,3,4,5,6,7,8];

const turn = function(position, player){
  // if (board[position]==='x'||board[position]=='o'){
  //   alert('Square taken, please choose again');
  //   return;
  // }
  if (currentPlayer === $('#name1').val()){
    board[position]='x';
  }else{
    board[position]='o';
  }
  turnCount++;
  checkForMatch(currentPlayer);
  playerSwitch();
}

const playerSwitch = function(){
  if (currentPlayer === $('#name1').val()){
    currentPlayer = $('#name2').val();
    $('#leftSelect').css('visibility', 'hidden');
    $('#rightSelect').css('visibility', 'visible');
  }else{
    currentPlayer = $('#name1').val();
    $('#leftSelect').css('visibility', 'visible');
    $('#rightSelect').css('visibility', 'hidden');
  }
};

const checkForMatch = function(n){
  if (board[0]===board[1] && board[1]===board[2]){
    gameWin(n);
    addWinnerScore(n);
    return
  }else if (board[3]===board[4] && board[4]===board[5]){
    gameWin(n);
    addWinnerScore(n);
    return
  }else if (board[6]===board[7] && board[7]===board[8]){
    gameWin(n);
    addWinnerScore(n);
    return
  }else if (board[0]===board[3] && board[3]===board[6]){
    gameWin(n);
    addWinnerScore(n);
    return
  }else if(board[1]===board[4] && board[4]===board[7]){
    gameWin(n);
    addWinnerScore(n);
    return
  }else if(board[2]===board[5] && board[5]===board[8]){
    gameWin(n);
    addWinnerScore(n);
    return
  }else if(board[0]===board[4] && board[4]===board[8]){
    gameWin(n);
    addWinnerScore(n);
    return
  }else if(board[2]===board[4] && board[4]===board[6]){
    gameWin(n);
    addWinnerScore(n);
    return;
  };
  if(turnCount===9){
    gameDraw();
  }
};

const gameWin = function(name){
  $('#placeWinnersName').text(`${name}`);
  $('#winWindow').fadeIn("slow");
}

const gameDraw = function(){
  $('#drawWindow').fadeIn("slow");
}

const resetGame = function(){
  board = [0,1,2,3,4,5,6,7,8];
  $('.square').empty();
  turnCount=0;
}

const addWinnerScore = function(n){
  if (n===$('#name1')){
    player1ScoreDisplay++;
    $('#player1Score').text(player1ScoreDisplay);
  }else{
    player2ScoreDisplay++;
    $('#player2Score').text(player2ScoreDisplay);
  }
}
