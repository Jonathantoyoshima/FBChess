function select(e){
  render();
  if(isRed){
    redPieces[e.target.hasPiece].moveRule();
  }else{
    bluePieces[e.target.hasPiece].moveRule();
  }
  e.target.removeEventListener('click', select);
}
