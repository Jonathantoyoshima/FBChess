var Squares = document.querySelectorAll('.Square');
var name, col, row;

function mapping(i){
  var colLetters = "ABCDEFGHIJ";
  var col = colLetters.split('')[i%8];
  var row = 8 - Math.floor(i/8);
  return col + row;
}

function piece(square, idx) {
  var buildSquare = square;
  if(idx === 3){
    buildSquare.classList.add('red');
    buildSquare.innerHTML = "K";
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
