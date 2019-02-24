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
