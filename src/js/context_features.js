function contextPlayer(){
  FBInstant.context.getPlayersAsync()
  .then(function(players){
    console.log('oi');
    console.log(players.map(function(player) {
      return {
        id: player.getID(),
        name: player.getName(),
      }
    }));
  })
};
function switchCtxt(){
  console.log("HEEEEYYYY")
  FBInstant.context
  .switchAsync('1980333665422387')
  .then(function() {
    console.log(FBInstant.context.getID());
    // 1234567890
  });
};
document.querySelector('#teste8')
.addEventListener('click', function(){
  switchCtxt();
});

document.querySelector('#teste7')
.addEventListener('click', function(){
  contextPlayer();
});
