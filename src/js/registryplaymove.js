function RegistringPlayMove(player, from, to) {
  var registry = {
    player: player,
    from: from,
    to: to,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  };
  var openRoom = firebase
                  .firestore()
                  .collection('room')
                  .doc(roomID)
                  .collection('registry');
  openRoom.add(registry);
}

document.querySelector('.move').addEventListener('click', function(e){
  RegistringPlayMove(playerID, 12, 14);
});
