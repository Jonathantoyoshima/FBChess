function Pawn (name, position) {
  this.tribe = "Pawn",
  this.type  = name,
  this.isFirst=  true,
  this.position =  position,
  this.moveRule =  function() {
    movePawn(this.position, this.type, this.isFirst)
  }
}

function movePawn(pos, piece, isFirst){
  var row = Math.floor(pos/8);
  var col = Math.floor(pos%8);

  function value (row, col){
    if(
      row >= 0 &&
      row <= 7 &&
      col >= 0 &&
      col <= 7
     ){
      return row * 8 + col;
    }
  }
  if (isRed) {
    if (hasBluePiece(value(row+1, col+1))) {
      selectSquare(value(row+1, col+1), piece);
    }
    if (hasBluePiece(value(row+1, col-1))) {
      selectSquare(value(row+1, col-1), piece);
    }
    if (!hasRedPiece(value(row+1, col)) && !hasBluePiece(value(row+1, col))) {
      selectSquare(value(row+1, col), piece);
    }
    if(isFirst){
      if (!hasRedPiece(value(row+2, col)) &&
          !hasBluePiece(value(row+2, col))) {
            selectSquare(value(row+2, col), piece);
      }
    }
  }else{
    if (hasRedPiece(value(row-1, col+1))) {
      selectSquare(value(row-1, col+1), piece);
    }
    if (hasRedPiece(value(row-1, col-1))) {
      selectSquare(value(row-1, col-1), piece);
    }
    if (!hasRedPiece(value(row-1, col)) &&
        !hasBluePiece(value(row-1, col))) {
      selectSquare(value(row-1, col), piece);
    }
    if(isFirst){
      if (!hasRedPiece(value(row-2, col)) &&
          !hasBluePiece(value(row-2, col))) {
        selectSquare(value(row-2, col), piece);
      }
    }
  }
}
