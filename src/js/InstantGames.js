var playerName, playerPic, playerID, contextId, contextType;

function loadGame(){
  playerName = FBInstant.player.getName();
  playerPic = FBInstant.player.getPhoto();
  playerID = FBInstant.player.getID();
  contextId = FBInstant.context.getID();
  contextType = FBInstant.context.getType();

  document.querySelector('.playerName').innerHTML = "Name: "+ playerName;
  document.querySelector('.playerPic').style.backgroundImage = "url("+playerPic+")";
  document.querySelector('.playerId').innerHTML = "Id: " + playerID;
  document.querySelector('.contextId').innerHTML = "ContextId: " + contextId;
  document.querySelector('.contextType').innerHTML = "Context Type: " + contextType;
  startGame();

  FBInstant.player.getSignedPlayerInfoAsync('metadata').then(function(result){
    result.getPlayerID();
    result.getSignature();
  }).catch(function(error){
    console.log(error);
  });
};

window.onload = function() {
  FBInstant.initializeAsync().then(function() {
    FBInstant.startGameAsync().then(function() {
      loadGame();
    });
  });
};
