function Rook (name, position) {
  this.tribe = "King",
  this.type  = name,
  this.isFirst =  true,
  this.position =  position,
  this.moveRule =  function() {
    moveRo(this.position, this.type)
  }
}

function moveRo(pos, piece){
  var i, max;
  var row = Math.floor(pos/8);
  var col = Math.floor(pos%8);

  for (i = pos+8; i < Squares.length; i+=8) {
    if(selectSquare(i, piece)){
      break;
    };
  }
  for (i = pos - 8; i >= 0; i-=8) {
    if(selectSquare(i, piece)){
      break;
    };
  }
  for (i = pos - 1; i >= row * 8; i--) {
    if(selectSquare(i, piece)){
      break;
    };
  }
  for (i = pos + 1; i <= (row * 8) + 7; i++) {
    if(selectSquare(i, piece)){
      break;
    };
  };
};
