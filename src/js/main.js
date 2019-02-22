var Squares = document.querySelectorAll('.Square');
var isRed = true;
function cornersT (value) { return value - 8 < 0; }
function cornersB (value) { return value + 8 >= Squares.length; }
function cornersL (value) { return value % 8 == 0; }
function cornersR (value) { return (value + 1) % 8 == 0; }
function hasRedPiece (value) {
  for (var piece in redPieces) {
    if (redPieces.hasOwnProperty(piece)) {
      if(redPieces[piece].position == value){
        return true;
      };
    }
  }
  return false;
}
function hasBluePiece (value) {
  for (var piece in bluePieces) {
    if (bluePieces.hasOwnProperty(piece)) {
      return bluePieces[piece].position == value;
    }
  }
}

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
  }
}

function render(){
  removeSelects();
  removeClicks();
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

function move(e){
  console.log(e.target)
  if(isRed){
    redPieces[e.target.hasPiece].position = e.target.thisID;
  }else{
    bluePieces[e.target.hasPiece].position = e.target.thisID;
  }
  isRed = !isRed;
  render();
}
function select(e){
  render();
  if(isRed){
    redPieces[e.target.hasPiece].moveRule();
  }else{
    bluePieces[e.target.hasPiece].moveRule();
  }
  e.target.removeEventListener('click', select);
}

function selectSquare(pos, piece){
  if (isRed) {
    if(!hasRedPiece(pos)) {
      Squares[pos].hasPiece = piece;
      Squares[pos].classList.add('select');
      Squares[pos].addEventListener('click', move);
    }
  } else{
    if(!hasBluePiece(pos)) {
      Squares[pos].hasPiece = piece;
      Squares[pos].classList.add('select');
      Squares[pos].addEventListener('click', move);
    }
  }
}

function removeSelects(){
  var div, i;
  div = document.querySelectorAll('.select');
  for (i = 0; i < div.length; i++) {
    div[i].removeEventListener('click', move);
  }
}

function removeClicks(){
    var div, i;
  div = document.querySelectorAll('.red');
  for (i = 0; i < div.length; i++) {
    div[i].removeEventListener('click', select);
  }
  div = document.querySelectorAll('.blue');
  for (i = 0; i < div.length; i++) {
    div[i].removeEventListener('click', select);
  }
}

function moveKi(pos, piece){
  if( !cornersB(pos) ){
      selectSquare(pos + 8, piece);
  }
  if(!cornersB(pos) && !cornersL(pos)){
    selectSquare(pos + 7, piece);
  }
  if(!cornersB(pos) && !cornersR(pos)){
    selectSquare(pos + 9, piece);
  }
  if(!cornersL(pos)){
    selectSquare(pos-1, piece);
  }
  if(!cornersR(pos)){
    selectSquare(pos+1, piece);
  }
  if(!cornersT(pos)){
    selectSquare(pos-8, piece);
  }
  if(!cornersT(pos) && !cornersL(pos)){
    selectSquare(pos-9, piece);
  }
  if(!cornersT(pos) && !cornersR(pos)){
    selectSquare(pos-7, piece);
  }
}

render();
