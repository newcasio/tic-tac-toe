let board = [0,1,2,3,4,5,6,7,8];

let player = 'human';
let count =0;
let random = Math.floor(Math.random()*9);

const turn = function(player, position){
  if (board[position]==='x' || board[position]==='o'){
    alert ('Square taken, choose again');
    return;
  }else{
    board[position]='x';
    count++;
    if(count===9){
      alert('Draw!');
      return;
    }else{
      computersTurn();
    }
  }
};

const switchPlayer = function(){
  if(player==='human'){
    player = 'computer';
  }else{
    player = 'human'
  }
};

const computersTurn = function(){
  let randomNumber = Math.floor(Math.random()*9);
  if (board[randomNumber]==='x' || board[randomNumber]==='o'){
    computersTurn();
  }else{
    board[randomNumber] = 'o';
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
