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

      // var connectedPlayers = FBInstant.player.getConnectedPlayersAsync()
      // .then(function(players) {
      //   console.log(players.map(function(player) {
      //     return {
      //       id: player.getID(),
      //       name: player.getName(),
      //     }
      //   }));
      // });

  // Start loading game assets here
  });
})
}

document.querySelector('.add').addEventListener('click', function(){
  firebase.firestore().collection('players').add({
    messsage:"OII",
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  }).catch(function(error){
    console.log('Cant access.');
  });
});

function addMessage(message){
  document.querySelector('.message').innerHTML += "<div>" + message.messsage + message.timestamp + "</div>";
}
// Loads chat messages history and listens for upcoming ones.
function loadMessages() {
  // Create the query to load the last 12 messages and listen for new ones.
  var query = firebase.firestore()
                  .collection('players')
                  .orderBy('timestamp', 'desc')
                  .limit(12);

  // Start listening to the query.
  query.onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change) {
        var message = change.doc.data();
        addMessage(message);
    });
  });
}
