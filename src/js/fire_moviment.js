function registrer_moviment(){
  firebase.firestore()
  .collection('room')
  .add({
    playerID: playerID,
    redPieces: fire_redPieces,
    bluePieces:fire_bluePieces,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
  render();
};

document.querySelector(".play").addEventListener('click', function(e) {
  registrer_moviment();
});
