document.addEventListener('DOMContentLoaded', function() {
  try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
    loadMessages();
  } catch (e) {
    console.error(e);
  }
});
var playerName;
var playerPic;
var playerId;
var contextId;
var contextType;
window.onload = function(){
  FBInstant.initializeAsync().then(function() {
    FBInstant.startGameAsync().then(function() {
      playerName = FBInstant.player.getName();
      playerPic = FBInstant.player.getPhoto();
      playerId = FBInstant.player.getID();

      contextId = FBInstant.context.getID();
      contextType = FBInstant.context.getType();

      document.querySelector('.playerName').innerHTML = "Name: "+ playerName;
      document.querySelector('.playerPic').style.backgroundImage = "url("+playerPic+")";
      document.querySelector('.playerId').innerHTML = "Id: " + playerId;
      document.querySelector('.contextId').innerHTML = "ContextId: " + contextId;
      document.querySelector('.contextType').innerHTML = "Context Type: " + contextType;
    });
  });
};

document.querySelector('.Enter').addEventListener('click', function() {
  var room = firebase.firestore().collection('room');
  room.get().then(function(doc){
    if(doc.empty){
      room.add({players: 1});
    }else{
      doc.forEach(function(value){
        if (value.data().players < 2) {
          room.doc(value.id).set({players: 2});
        }else{
          room.add({players: 1});
        }
      });
    };
  });
  // add({
  //   players:1
  // })
  // room.get().then(function(rooms){
  //   if(rooms.exists){
  //     var test = rooms.where("players", "<", 1);
  //     console.log(test)
  //   }else{
  //     rooms.add({
  //       players: 1
  //     })
  //   }
  // });
});

document.querySelector('.play').addEventListener('click', function(){
  firebase.firestore().collection('room001').add({
    player: "Player1",
    move:"A1-A2",
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  }).catch(function(error){
    console.log('Cant access.');
  });
});

function addMessage(message){
  document.querySelector('.message').innerHTML += "<div>" + message.player +": "+ message.move + "</div>";
}
// Loads chat messages history and listens for upcoming ones.
function loadMessages() {
  // Create the query to load the last 12 messages and listen for new ones.
  var query = firebase.firestore()
                  .collection('room001')
                  .orderBy('timestamp', 'desc')
                  .limit(6);

  // Start listening to the query.
  query.onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
        var message = change.doc.data();
        addMessage(message)

    });
  });
};
