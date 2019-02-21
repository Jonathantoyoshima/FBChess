var Squares = document.querySelectorAll('.Square');
var name, col, row, currentID;

function mapping(i){
  var colLetters = "ABCDEFGHIJ";
  var col = colLetters.split('')[i%8];
  var row = 8 - Math.floor(i/8);
  return col + row;
}

function selectPiece(){
  Squares[currentID+1].classList.add('select');
  Squares[currentID-1].classList.add('select');
  Squares[currentID%7].classList.add('select');
  Squares[currentID%8].classList.add('select');
  Squares[currentID%9].classList.add('select');
  Squares[currentID+7].classList.add('select');
  Squares[currentID+8].classList.add('select');
  Squares[currentID+9].classList.add('select');
}

function piece(square, idx) {
  var buildSquare = square;

  if(idx === 11){
    currentID = idx;
    buildSquare.classList.add('red');
    buildSquare.innerHTML = "K";
    buildSquare.addEventListener('click', selectPiece)
  };
  return buildSquare;
}

for (var i = 0; i < Squares.length; i++) {
  piece(Squares[i], i);
}

var select = document.querySelectorAll('.select');

for (var i = 0; i < select.length; i++) {
  select[i].addEventListener('click', squareClick);
}
