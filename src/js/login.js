var playerID, roomID;

function buildRoom(e){
  var openRoom, openData, room = firebase.firestore().collection('room');
  room.where('open', '==', true).limit(1).get()
  .then(function(doc){
    if(doc.empty){
      room.add({
        open: true,
        player1: playerID,
        player2:null,
      }).then(function(doc){
        roomID = doc.id;
      });
    }else{
      doc.forEach(function(value){
        roomID = value.id;
        room.doc(roomID).update({"open": false, "player2": playerID})
      })
    };
  })
  .catch(function(error){
    console.log(error);
  });
};

document.addEventListener('DOMContentLoaded', function() {
  try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
  } catch (e) {
    console.error(e);
  }
});

document.querySelector('.play').addEventListener('click', buildRoom);

document.querySelector('.Enter').addEventListener('click', function(){
  playerID = document.querySelector('#id_player_input').value;
  firebase.firestore().collection('players').add({
    id: playerID,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }).then(function(){
    document.querySelector('.login').style.display = "none";
  });
});
