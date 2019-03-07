function Knight (name, position) {
  this.tribe = "Knight",
  this.type  = name,
  this.isFirst =  true,
  this.position =  position,
  this.moveRule =  function() {
    moveKn(this.position, this.type)
  }
}

function moveKn(pos, piece){
  var row = Math.floor(pos/8);
  var col = Math.floor(pos%8);

  function value (row, col){
    if(
      row >= 0 &&
      row <= 7 &&
      col >= 0 &&
      col <= 7
     ){
       selectSquare(row * 8 + col, piece);
    }
  }
  value(row+1, col+2);
  value(row-1, col+2);
  value(row+1, col-2);
  value(row-1, col-2);
  value(row+2, col+1);
  value(row-2, col+1);
  value(row+2, col-1);
  value(row-2, col-1);
}
