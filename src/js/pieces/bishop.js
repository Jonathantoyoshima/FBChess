function moveBi(pos, piece){
  var i, max;
  var row = Math.floor(pos/8);
  var col = Math.floor(pos%8);

  max = (row - col) * 8;
  for(i = pos - 9; i >= (max < 0 ? 0 : max); i-=9){
    if(selectSquare(i, piece)){
      break;
    };
  };
  max = ((row-(7-col)) * 8) + 7;
  for(i = pos - 7; i >= (max < 0 ? 0 : max); i-=7){
    if(selectSquare(i, piece)){
      break;
    };
  }
  max = (row + col) * 8;
  for(i = pos + 7; i <= (max >= Squares.length ? Squares.length - 1 : max); i+=7){
    if(selectSquare(i, piece)){
      break;
    };
  };
  max = ((row +(7-col)) * 8) + 7;
  for(i = pos + 9; i <= (max >= Squares.length ? Squares.length-1 : max); i+=9){
    if(selectSquare(i, piece)){
      break;
    };
  }
}
