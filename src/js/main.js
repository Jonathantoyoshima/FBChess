var Squares = document.querySelectorAll('.Square');
var isRed = false;
var redPieces = {
  color: 'red',
  Ki: {
    type: 'Ki',
    position: 4,
    moveRule:function(){
      moveKi(this.position, this.type);
    }
  },
  Qu: {
    type: 'Qu',
    position: 3,
    moveRule:function(){
      moveQu(this.position, this.type)
    }
  },
  B1: {
    type: 'B1',
    position: 2,
    moveRule:function(){
      moveBi(this.position, this.type)
    }
  },
  B2: {
    type: 'B2',
    position: 5,
    moveRule:function(){
      moveBi(this.position, this.type)
    }
  },
  H1: {
    type: 'H1',
    position: 0,
    moveRule:function(){
      moveHo(this.position, this.type)
    }
  },
  H2: {
    type: 'H2',
    position: 7,
    moveRule:function(){
      moveHo(this.position, this.type)
    }
  },
}

var bluePieces = {
  color: 'blue',
  Ki: {
    type: 'Ki',
    position: 60,
    moveRule:function(){
      moveKi(this.position, this.type);
    }
  },
  Qu: {
    type: 'Qu',
    position: 59,
    moveRule:function(){
      moveQu(this.position, this.type)
    }
  },
  B1: {
    type: 'B1',
    position: 58,
    moveRule:function(){
      moveBi(this.position, this.type)
    }
  },
  B2: {
    type: 'B2',
    position: 61,
    moveRule:function(){
      moveBi(this.position, this.type)
    }
  },
  H1: {
    type: 'H1',
    position: 56,
    moveRule:function(){
      moveHo(this.position, this.type)
    }
  },
  H2: {
    type: 'H2',
    position: 63,
    moveRule:function(){
      moveHo(this.position, this.type)
    }
  },
}

function render(){
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
          if (isRed) {
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
          if (!isRed) {
            Squares[i].addEventListener('click', select);
          }
        }
      }
    }

    // if (i == red_KI) {
    //   Ki(i, "red");
    // }else if(i == blue_KI) {
    //   Squares[i].hasPiece = Ki(i, "red");
    //   Ki(i, "blue");
    // }else{
    //   Squares[i].innerHTML = i;
    //   Squares[i].classList.remove('red');
    //   Squares[i].classList.remove('blue');
    //   Squares[i].classList.remove('select');
    // }
  }
}

function remove(){
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
