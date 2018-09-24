let playerNumber = 'o';
let currentImage = '<img src="images/oImage.png" />';
let currentTarget;

let boxes ={
  box1: {taken: false, owner: 11},
  box2: {taken: false, owner: 12},
  box3: {taken: false, owner: 13},
  box4: {taken: false, owner: 14},
  box5: {taken: false, owner: 15},
  box6: {taken: false, owner: 16},
  box7: {taken: false, owner: 17},
  box8: {taken: false, owner: 18},
  box9: {taken: false, owner: 19},
}

const boxCheck = function(boxNumber, playerNumber){
  if(boxes[boxNumber].taken === true){
    alert('Box taken, please choose again.');
  }else{
    boxes[boxNumber].taken = true;
    boxes[boxNumber].owner = playerNumber;
    currentTarget.append(currentImage);
    console.log('checkForMatches');
    checkForMatches();
    console.log('after check');
    switchPlayer();
    console.log('after switch');
  }
};

const switchPlayer = function(){
  if (playerNumber==='x'){
    playerNumber = 'o';
    currentImage = '<img src="images/oImage.png" />';
  }else{
    playerNumber = 'x';
    currentImage = '<img src="images/xImage.png" />';
  }
};

const checkForMatches=function(){
  console.log('start match check');
  //top row win
  if(boxes.box1.owner === boxes.box2.owner && boxes.box2.owner===boxes.box3.owner){
    alert(`1Winner is ${boxes.box1.owner}`);
  //middle row win
  }else if(boxes.box4.owner === boxes.box5.owner && boxes.box5.owner===boxes.box6.owner){
    alert(`2Winner is ${boxes.box4.owner}`);
  //bottom row win
  }else if(boxes.box7.owner === boxes.box8.owner && boxes.box8.owner===boxes.box9.owner){
    alert(`3Winner is ${boxes.box7.owner}`);
  //1st column win
  }else if(boxes.box1.owner===boxes.box4.owner && boxes.box4.owner=== boxes.box7.owner){
    alert(`4Winner is ${boxes.box1.owner}`);
  //2nd column win
  }else if(boxes.box2.owner===boxes.box5.owner && boxes.box5.owner=== boxes.box8.owner){
    alert(`5Winner is ${boxes.box2.owner}`);
  //3rd column win
  }else if(boxes.box3.owner===boxes.box6.owner && boxes.box6.owner=== boxes.box9.owner){
    alert(`6Winner is ${boxes.box3.owner}`);
  //right diag win
  }else if(boxes.box1.owner===boxes.box5.owner && boxes.box5.owner=== boxes.box9.owner){
    alert(`7Winner is ${boxes.box1.owner}`);
  //left diag win
  }else if(boxes.box3.owner===boxes.box5.owner && boxes.box5.owner=== boxes.box7.owner){
    alert(`8Winner is ${boxes.box3.owner}`);
  }

};  //end of checkForMatches function
