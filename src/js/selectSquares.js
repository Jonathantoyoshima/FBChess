function selectSquare(pos, piece){
  if (isRed) {
    if(hasRedPiece(pos)) {
      return true;
    }else if(hasBluePiece(pos)) {
      Squares[pos].hasPiece = piece;
      Squares[pos].addEventListener('click', move);
      return true;
    }else{
      Squares[pos].hasPiece = piece;
      Squares[pos].classList.add('select');
      Squares[pos].addEventListener('click', move);
    }
  } else {
    if(hasBluePiece(pos)) {
      return true;
    }else if(hasRedPiece(pos)) {
      Squares[pos].hasPiece = piece;
      Squares[pos].addEventListener('click', move);
      return true;
    }else{
      Squares[pos].hasPiece = piece;
      Squares[pos].classList.add('select');
      Squares[pos].addEventListener('click', move);
    }
  }
}
