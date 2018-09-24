let game = {
  b1:{taken:false, belongTo:0},
  b2:{taken:false, belongTo:0},
  b3:{taken:false, belongTo:0},
  b4:{taken:false, belongTo:0},
  b5:{taken:false, belongTo:0},
  b6:{taken:false, belongTo:0},
  b7:{taken:false, belongTo:0},
  b8:{taken:false, belongTo:0},
  b9:{taken:false, belongTo:0},

  checkTaken: function(squareNumber){
    if(this[squareNumber].taken===false){
      this[squareNumber].taken=true;
      this.insertImage(squareNumber);
    }
  },

  insertImage: function(squareNumber){

  }







}  //end game object


$(document).ready(function(){

  $('#box1').on('click', function(){
    game.checkTaken('b1');


  })

});
