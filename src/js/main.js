var Squares = document.querySelectorAll('.Square');
var isRed = false;

var redPieces = {
  color: 'red',
  Ki: {
    type: 'Ki',
    position: 4,
    moveRule: function() {
      moveKi(this.position, this.type);
    }
  },
  Qu: {
    type: 'Qu',
    position: 3,
    moveRule: function() {
      moveQu(this.position, this.type)
    }
  },
  B1: {
    type: 'B1',
    position: 2,
    moveRule: function() {
      moveBi(this.position, this.type)
    }
  },
  B2: {
    type: 'B2',
    position: 5,
    moveRule: function() {
      moveBi(this.position, this.type)
    }
  },
  H1: {
    type: 'H1',
    position: 0,
    moveRule: function() {
      moveHo(this.position, this.type)
    }
  },
  H2: {
    type: 'H2',
    position: 7,
    moveRule: function() {
      moveHo(this.position, this.type)
    }
  },
  K1: {
    type: 'K1',
    position: 1,
    moveRule: function() {
      moveKn(this.position, this.type)
    }
  },
  K2: {
    type: 'K2',
    position: 6,
    moveRule: function() {
      moveKn(this.position, this.type)
    }
  },
  P1: new Pawn("P1", 8),
  P2: new Pawn("P2", 9),
  P3: new Pawn("P3", 10),
  P4: new Pawn("P4", 11),
  P5: new Pawn("P5", 12),
  P6: new Pawn("P6", 13),
  P7: new Pawn("P7", 14),
  P8: new Pawn("P8", 15),
}

var bluePieces = {
  color: 'blue',
  Ki: {
    type: 'Ki',
    position: 60,
    moveRule: function() {
      moveKi(this.position, this.type);
    }
  },
  Qu: {
    type: 'Qu',
    position: 59,
    moveRule: function() {
      moveQu(this.position, this.type)
    }
  },
  B1: {
    type: 'B1',
    position: 58,
    moveRule: function() {
      moveBi(this.position, this.type)
    }
  },
  B2: {
    type: 'B2',
    position: 61,
    moveRule: function() {
      moveBi(this.position, this.type)
    }
  },
  H1: {
    type: 'H1',
    position: 56,
    moveRule: function() {
      moveHo(this.position, this.type)
    }
  },
  H2: {
    type: 'H2',
    position: 63,
    moveRule: function() {
      moveHo(this.position, this.type)
    }
  },
  K1: {
    type: 'K1',
    position: 57,
    moveRule: function() {
      moveKn(this.position, this.type)
    }
  },
  K2: {
    type: 'K2',
    position: 62,
    moveRule: function() {
      moveKn(this.position, this.type)
    }
  },
  P1: new Pawn("P1", 48),
  P2: new Pawn("P2", 49),
  P3: new Pawn("P3", 50),
  P4: new Pawn("P4", 51),
  P5: new Pawn("P5", 52),
  P6: new Pawn("P6", 53),
  P7: new Pawn("P7", 54),
  P8: new Pawn("P8", 55),
}

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
