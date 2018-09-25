let $name1 = $('#name1');
let $name2 = $('#name2');

let currentPlayer= $name1;
let currentPosition= undefined;

turnCount = 0;

let player1ScoreDisplay = 0;
$('#player1Score').text(player1ScoreDisplay);

let player2ScoreDisplay = 0;
$('#player2Score').text(player2ScoreDisplay);


let endPic = "<img id='endPic' src='https://media.giphy.com/media/l0GRkpk8mcWhekrVC/giphy.gif'>"

let board = [0,1,2,3,4,5,6,7,8];

const turn = function(position, player){
  if (board[position]==='x'||board[position]=='o'){
    alert('Square taken, please choose again');
    return;
  }
  if (currentPlayer === 'Player 1'){
    board[position]='x';
    //currnetPosition.append('<img id="boom" src="images/explosion.gif" alt="">');
    currentPosition.append('<img class="oorx" src="images/xImage.png" />');
  }else{
    board[position]='o';
    //currentPosition.append('<img id="boom" src="images/explosion.gif" alt="">');
    //<img id="boom" src="images/explosion.gif" alt="">
    currentPosition.append('<img class="oorx" src="images/oImage.png" />');
  }
  turnCount++;
  checkForMatch(currentPlayer);
  playerSwitch();
}

const playerSwitch = function(){
  if (currentPlayer ==='Player 1'){
    currentPlayer='Player 2';
    $('#leftSelect').css('visibility', 'hidden');
    $('#rightSelect').css('visibility', 'visible');
  }else{
    currentPlayer='Player 1';
    $('#leftSelect').css('visibility', 'visible');
    $('#rightSelect').css('visibility', 'hidden');
  }
};

const checkForMatch = function(n){
  if (board[0]===board[1] && board[1]===board[2]){
    alert (`Winner is ${n}`);
    addWinnerScore(n);
    endOfGame();
    return
  }else if (board[3]===board[4] && board[4]===board[5]){
    alert (`Winner is ${n}`);
    addWinnerScore(n);
    endOfGame();
    return
  }else if (board[6]===board[7] && board[7]===board[8]){
    alert (`Winner is ${n}`);
    addWinnerScore(n);
    endOfGame();
    return
  }else if (board[0]===board[3] && board[3]===board[6]){
    alert (`Winner is ${n}`);
    addWinnerScore(n);
    endOfGame();
    return
  }else if(board[1]===board[4] && board[4]===board[7]){
    alert (`Winner is ${n}`);
    addWinnerScore(n);
    endOfGame();
    return
  }else if(board[2]===board[5] && board[5]===board[8]){
    alert (`Winner is ${n}`);
    addWinnerScore(n);
    endOfGame();
    return
  }else if(board[0]===board[4] && board[4]===board[8]){
    alert (`Winner is ${n}`);
    addWinnerScore(n);
    endOfGame();
    return
  }else if(board[2]===board[4] && board[4]===board[6]){
    alert (`Winner is ${n}`);
    addWinnerScore(n);
    endOfGame();
    return;
  };
  if(turnCount===9){
    console.log('check0293485720439587230985302');
    alert ("DRAW!!");
    endOfGame();
  }
};

const endOfGame = function(){
  $('#endOfGame').css('display', 'inline');
};

const resetGame = function(){
  board = [0,1,2,3,4,5,6,7,8];
  $('.square').empty();
  turnCount=0;
}

const addWinnerScore = function(n){
  if (n==='Player 1'){
    player1ScoreDisplay++;
    $('#player1Score').text(player1ScoreDisplay);
  }else{
    player2ScoreDisplay++;
    $('#player2Score').text(player2ScoreDisplay);
  }
}
