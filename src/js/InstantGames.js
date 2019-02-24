window.onload = function(){
  FBInstant.initializeAsync().then(function() {
    FBInstant.startGameAsync().then(function() {
      var playerName = FBInstant.player.getName();
      var playerPic = FBInstant.player.getPhoto();
      var playerId = FBInstant.player.getID();
      var contextId = FBInstant.context.getID();
      var contextType = FBInstant.context.getType();

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
