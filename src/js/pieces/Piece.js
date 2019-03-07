function Piece(key, tribe, position, isFirst){
  switch (tribe) {
    case "Pawn":
      return new Pawn(key, position, isFirst);
      break;
    case "Rook":
      return new Rook(key, position, isFirst);
      break;
    case "Knight":
      return new Knight(key, position, isFirst);
      break;
    case "Bishop":
      return new Bishop(key, position, isFirst);
      break;
    case "Queen":
      return new Queen(key, position, isFirst);
      break;
    case "King":
      return new King(key, position, isFirst);
      break;
    default:
    return null;

  }
}
