let player1 = [];
let player2 = [];

let currentPlayer=1;
let currentPosition= undefined;

let board = [0,1,2,3,4,5,6,7,8];

const winningCombos = [
  ['012'],['345'],['678'],
  ['036'],['147'],['258'],
  ['048'],['246']
];

const turn = function(position, player){
  if (board[position]===null){
    console.log('this is null');
    alert('Square taken, please choose again');
    return;
  }
  board.splice(position,1,null);
  if (currentPlayer === 1){
    player1.push(position);
    console.log('player1 push');
    currentPosition.append('<img src="images/xImage.png" />');
  }else{
    player2.push(position);
    console.log('player2 push');
    currentPosition.append('<img src="images/oImage.png" />');
  }
  checkForMatch();
  playerSwitch();
}

const playerSwitch = function(){
  if (currentPlayer ===1){
    currentPlayer=2;
  }else{
    currentPlayer=1;
  }
};

const checkForMatch = function(){
  let player1CheckArray = player1.sort().join('');
  let player2CheckArray = player2.sort().join('');
  if (currentPlayer === 1){
    for (let i =0; i<winningCombos.length; i++){
      if(player1CheckArray.includes(winningCombos[i])){
        alert('Player 1 wins');
      }
    }
  }else{
    for (let i =0; i<winningCombos.length; i++){
      if(player2CheckArray.includes(winningCombos[i])){
        alert ('Player 2 wins');
        }
    }
  }
}
