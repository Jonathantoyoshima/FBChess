function move(e){
  if(isRed){
    if (hasBluePiece(e.target.thisID)) {
      kill(e.target.thisID, bluePieces);
    }
    redPieces[e.target.hasPiece].position = e.target.thisID;
    if (redPieces[e.target.hasPiece].tribe === "Pawn") {
      redPieces[e.target.hasPiece].isFirst = false;
    }
  }else{
    if (hasRedPiece(e.target.thisID)) {
      kill(e.target.thisID, redPieces);
    }
    bluePieces[e.target.hasPiece].position = e.target.thisID;
    if (bluePieces[e.target.hasPiece].tribe === "Pawn") {
      bluePieces[e.target.hasPiece].isFirst = false;
    }

  }
  isRed = !isRed;
  render();
}
