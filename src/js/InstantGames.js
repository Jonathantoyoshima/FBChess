var playerName, playerPic, playerId, contextId, contextType;

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
