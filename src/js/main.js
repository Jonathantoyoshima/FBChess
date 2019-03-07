var Squares = document.querySelectorAll('.Square');
var isRed = false;
var fire_redPieces = {
  R1:{tribe:"Rook", position: 0},
  K1:{tribe:"Knight", position: 1},
  B1:{tribe:"Bishop", position: 2},
  Qu:{tribe:"Queen", position: 3},
  Ki:{tribe:"King", position: 4},
  B2:{tribe:"Bishop", position: 5},
  K2:{tribe:"Knight", position: 6},
  R2:{tribe:"Rook", position: 7},
  P1:{tribe:"Pawn", isFirst:true, position: 8},
  P2:{tribe:"Pawn", isFirst:true, position: 9},
  P3:{tribe:"Pawn", isFirst:true, position: 10},
  P4:{tribe:"Pawn", isFirst:true, position: 11},
  P5:{tribe:"Pawn", isFirst:true, position: 12},
  P6:{tribe:"Pawn", isFirst:true, position: 13},
  P7:{tribe:"Pawn", isFirst:true, position: 14},
  P8:{tribe:"Pawn", isFirst:true, position: 15}
}
var fire_bluePieces = {
  R1:{tribe:"Rook", position: 56},
  K1:{tribe:"Knight", position: 57},
  B1:{tribe:"Bishop", position: 58},
  Qu:{tribe:"Queen", position: 59},
  Ki:{tribe:"King", position: 60},
  B2:{tribe:"Bishop", position: 61},
  K2:{tribe:"Knight", position: 62},
  R2:{tribe:"Rook", position: 63},
  P1:{tribe:"Pawn", isFirst: true, position: 48},
  P2:{tribe:"Pawn", isFirst: true, position: 49},
  P3:{tribe:"Pawn", isFirst: true, position: 50},
  P4:{tribe:"Pawn", isFirst: true, position: 51},
  P5:{tribe:"Pawn", isFirst: true, position: 52},
  P6:{tribe:"Pawn", isFirst: true, position: 53},
  P7:{tribe:"Pawn", isFirst: true, position: 54},
  P8:{tribe:"Pawn", isFirst: true, position: 55}
}
