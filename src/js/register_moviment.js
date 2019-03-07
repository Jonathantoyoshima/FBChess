function registrer_moviment(){
  firebase.firestore().collection('room')
  .add({
    redPieces: fire_redPieces,
    bluePieces:fire_bluePieces,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(function(docRef){
    render();
  });
};
