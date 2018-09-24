let player1 = [];
let player2 = [];

let currentPlayer=1;

let board = [0,1,2,3,4,5,6,7,8];

const winningCombos = [
  ['012'],['345'],['678'],
  ['036'],['147'],['258'],
  ['048'],['246']
];

//first turn
const turn = function(position, player){
  console.log('running turn');
  board.splice(position,1,null);
  if (position===null){
    alert('Square taken, please choose again');
    return;
  }
  if (currentPlayer === 1){
    player1.push(position);
  }else{
    player2.push(position);
  };
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
