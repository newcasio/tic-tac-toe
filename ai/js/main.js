let board = [0,1,2,3,4,5,6,7,8];

let player = 'human';
let count =0;
let random = Math.floor(Math.random()*9);

const turn = function(player, position){
  if (board[position]==='x' || board[position]==='o'){
    alert ('Square taken, choose again');
    return;
  }else{
    if (player ==='human'){
      board[position]='x';
      count++;
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


const draw = function(){
  if (count ===9){
    alert('Draw');
    return;
  }
}
