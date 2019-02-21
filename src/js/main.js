var Squares = document.querySelectorAll('.Square');
var name, col, row, currentID, red, blue, select,
  onR = 59,
  onB = 15;

function mapping(i) {
  var colLetters = "ABCDEFGHIJ";
  var col = colLetters.split('')[i % 8];
  var row = 8 - Math.floor(i / 8);
  return col + row;
}

function action(e) {
  onR = e.target.currentID;
  select = document.querySelectorAll('.select');
  for (var i = 0; i < select.length; i++) {
    select[i].classList.remove('select');
    select[i].removeEventListener('click', action);
  }
  render();
}

function moveKi (currentID) {
  var cornerL = currentID % 8 != 0;
  var cornerR = (currentID + 1) % 8 != 0;
  var cornerT = currentID - 8 > 0;
  var cornerD = currentID + 8 < Squares.length;
  if (cornerT) {
    Squares[currentID - 8].classList.add('select');
  }
  if (cornerL) {
    Squares[currentID - 1].classList.add('select');
  }
  if (cornerR) {
    Squares[currentID + 1].classList.add('select');
  }
  if (cornerD) {
    Squares[currentID + 8].classList.add('select');
  }
  if (cornerL && cornerT) {
    Squares[currentID - 9].classList.add('select');
  }
  if (cornerR && cornerT) {
    Squares[currentID - 7].classList.add('select');
  }
  if (cornerR && cornerD) {
    Squares[currentID + 9].classList.add('select');
  }
  if (cornerL && cornerD) {
    Squares[currentID + 7].classList.add('select');
  }
}
function moveQu(){
  console.log('oi');
}

var redPieces = {
  Ki: {
    position: 60,
    move: function(square) {
      var pos = this.position;
      square.addEventListener('click', function(e){
        moveKi(pos);
        })
      }
    },
  Qu: { position: 59, move: moveQu },
};
var bluePieces = {
  Ki: {
    position: 4,
    move: function(square){
      var pos = this.position;
      square.addEventListener('click', function(e){
        moveKi(pos);
      })
    }
  },
  Qu: { position: 3, move: moveQu },
};

function piece(square, idx) {
  var hasPiece;
  square.innerHTML = idx;
  for (hasPiece in redPieces) {
    if (redPieces.hasOwnProperty(hasPiece)) {
      if(redPieces[hasPiece].position == idx){
        square.innerHTML = hasPiece;
        square.classList.add('red');
        redPieces[hasPiece].move(square);
      }
    }
  }
  for (hasPiece in bluePieces) {
    if (bluePieces.hasOwnProperty(hasPiece)) {
      if(bluePieces[hasPiece].position === idx){
        square.innerHTML = hasPiece;
        square.classList.add('blue');
        bluePieces[hasPiece].move(square);
      }
    }
  }

}

function render() {
  for (var i = 0; i < Squares.length; i++) {
    piece(Squares[i], i);
  }
}

render();
