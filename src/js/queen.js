function moveQu(pos, piece){
  var i;
  for (i = pos-8; i < Squares.length; i+=8) {
    selectSquare(i, piece);
  }

  for (i = pos-8; i > 0; i-=8) {
    selectSquare(i, piece);
  }
  for (i = pos-1; i >= Math.floor(pos/8) * 8; i--) {
    selectSquare(i, piece);
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
