function render() {
  remove();
  for (var i = 0; i < Squares.length; i++) {
    Squares[i].innerHTML = i;
    Squares[i].thisID = i;
    Squares[i].classList.remove('select');
    Squares[i].classList.remove('red');
    Squares[i].classList.remove('blue');
    for (var piece in redPieces) {
      if (redPieces.hasOwnProperty(piece)) {
        if (redPieces[piece].position == i) {
          Squares[i].innerHTML = piece;
          Squares[i].classList.add(redPieces.color);
          Squares[i].hasPiece = piece;
          if ( isRed ) {
            Squares[i].addEventListener('click', select);
          }
        }
      }
    }

    for (var piece in bluePieces) {
      if (bluePieces.hasOwnProperty(piece)) {
        if (bluePieces[piece].position == i) {
          Squares[i].innerHTML = piece;
          Squares[i].classList.add(bluePieces.color);
          Squares[i].hasPiece = piece;
          if ( !isRed ) {
            Squares[i].addEventListener('click', select);
          }
        }
      }
    }
  }
}

function remove() {
  var div, i;
  div = document.querySelectorAll('.select');
  for (i = 0; i < div.length; i++) {
    div[i].removeEventListener('click', select);
    div[i].removeEventListener('click', move);
  }
  div = document.querySelectorAll('.red');
  for (i = 0; i < div.length; i++) {
    div[i].removeEventListener('click', select);
    div[i].removeEventListener('click', move);
  }
  div = document.querySelectorAll('.blue');
  for (i = 0; i < div.length; i++) {
    div[i].removeEventListener('click', select);
    div[i].removeEventListener('click', move);
  }
}

render();
