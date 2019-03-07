function cornersT (value) { return value - 8 < 0; }
function cornersB (value) { return value + 8 >= Squares.length; }
function cornersL (value) { return value % 8 == 0; }
function cornersR (value) { return (value + 1) % 8 == 0; }
function hasRedPiece (value) {
  for (var piece in fire_redPieces) {
    if (fire_redPieces.hasOwnProperty(piece)) {
      if(fire_redPieces[piece].position == value){
        return true;
      };
    }
  }
  return false;
}
function hasBluePiece (value) {
  for (var piece in fire_bluePieces) {
    if (fire_bluePieces.hasOwnProperty(piece)) {
      if (fire_bluePieces[piece].position == value){
        return true;
      };
    }
  }
  return false;
}
