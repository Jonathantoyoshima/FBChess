function move(e){
  if(isRed){
    if (hasBluePiece(e.target.thisID)) {
      kill(e.target.thisID, bluePieces);
    }
    redPieces[e.target.hasPiece].position = e.target.thisID;
  }else{
    if (hasRedPiece(e.target.thisID)) {
      kill(e.target.thisID, redPieces);
    }
    bluePieces[e.target.hasPiece].position = e.target.thisID;
  }
  isRed = !isRed;
  render();
}
