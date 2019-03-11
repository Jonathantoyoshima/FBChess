function registrer_moviment(){
  var room = firebase.firestore().collection('room').doc(roomID);
  var FwhoPlay = whoPlay;
  room.collection('registry').add({
    whoPlay: FwhoPlay,
    isRed: isRed,
    redPieces: fire_redPieces,
    bluePieces:fire_bluePieces,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(function(docRef){
    render();
  });
};
