function cornersT (value) { return value - 8 < 0; }
function cornersB (value) { return value + 8 >= Squares.length; }
function cornersL (value) { return value % 8 == 0; }
function cornersR (value) { return (value + 1) % 8 == 0; }
function hasRedPiece (value) {
  for (var piece in redPieces) {
    if (redPieces.hasOwnProperty(piece)) {
      if(redPieces[piece].position == value){
        return true;
      };
    }
  }
  return false;
}
function hasBluePiece (value) {
  for (var piece in bluePieces) {
    if (bluePieces.hasOwnProperty(piece)) {
      if (bluePieces[piece].position == value){
        return true;
      };
    }
  }
  return false;
}
