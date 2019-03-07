function move(e){
  if(isRed){
    if (hasBluePiece(e.target.thisID)) {
      kill(e.target.thisID, bluePieces);
      kill(e.target.thisID, fire_bluePieces);
    }
    fire_redPieces[e.target.hasPiece].position = e.target.thisID;
    if (redPieces[e.target.hasPiece].tribe === "Pawn") {
      fire_redPieces[e.target.hasPiece].isFirst = false;
    }
  }else{
    if (hasRedPiece(e.target.thisID)) {
      kill(e.target.thisID, redPieces);
      kill(e.target.thisID, fire_redPieces);
    }
    fire_bluePieces[e.target.hasPiece].position = e.target.thisID;
    if (bluePieces[e.target.hasPiece].tribe === "Pawn") {
      fire_bluePieces[e.target.hasPiece].isFirst = false;
    }

  }
  isRed = !isRed;
  registrer_moviment();
}
