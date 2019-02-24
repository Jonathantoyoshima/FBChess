function kill(thisID, object){
  for (var piece in object) {
    if (object.hasOwnProperty(piece)) {
      if (object[piece].position == thisID) {
        delete object[piece];
      }
    }
  }
}
