
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
    return;
  }else if (board[3]===board[4] && board[4]===board[5]){
    gameWin(n);
    addWinnerScore(n);
    return;
  }else if (board[6]===board[7] && board[7]===board[8]){
    gameWin(n);
    addWinnerScore(n);
    return;
  }else if (board[0]===board[3] && board[3]===board[6]){
    gameWin(n);
    addWinnerScore(n);
    return;
  }else if(board[1]===board[4] && board[4]===board[7]){
    gameWin(n);
    addWinnerScore(n);
    return;
  }else if(board[2]===board[5] && board[5]===board[8]){
    gameWin(n);
    addWinnerScore(n);
    return;
  }else if(board[0]===board[4] && board[4]===board[8]){
    gameWin(n);
    addWinnerScore(n);
    return;
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
  setTimeout(function(){
    // var msg = new SpeechSynthesisUtterance(`${name} is a weener`);
    // window.speechSynthesis.speak(msg);
    var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[9]; // Note: some voices don't support altering params
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 1; // 0.1 to 10
msg.pitch = 2; //0 to 2
msg.text = 'Hello World';
msg.lang = 'en-US';

msg.onend = function(e) {
  console.log('Finished in ' + event.elapsedTime + ' seconds.');
};

speechSynthesis.speak(msg);
  },1000)
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
  if (n === $('#name1').val()){
    player1ScoreDisplay++;
    $('#player1Score').text(player1ScoreDisplay);
  }else{
    player2ScoreDisplay++;
    $('#player2Score').text(player2ScoreDisplay);
  }
}
