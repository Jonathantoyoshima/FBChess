function setData(){
  FBInstant.player.setDataAsync({'teste':'oi'}).then(function(){
      console.log('Data Save');
    }).catch(function(error){
      console.log(error);
    });
};
document.querySelector('#teste1').addEventListener('click', function(){
  setData();
})
function getData(){
  FBInstant.player.getDataAsync(['teste']).then(function(data){
    console.log(data['teste']);
  });
};
document.querySelector('#teste2').addEventListener('click', function(){
  getData();
})
function setStatus(){
  FBInstant.player
  .setStatsAsync({level:1})
  .then(function(){

  }).catch(function(error){
    console.log(error);
  })
}
document.querySelector('#teste3').addEventListener('click', function(){
  setStatus();
});
document.querySelector('#teste4').addEventListener('click', function(){
  console.log('oi')
  getStatus();
});
function getStatus(){
  FBInstant.player
  .getStatsAsync(['level'])
  .then(function(stats){
    console.log(stats)
  }).catch(function(error){
    console.log(error);
  })
}
function incrementStatsAsync(){
  FBInstant.player
  .incrementStatsAsync({'level': 3})
  .then(function(status){
    console.log(status)
  }).catch(function(error){
    console.log(error);
  })
}
function conn(){
FBInstant.player.getConnectedPlayersAsync()
  .then(function(players) {
    console.log(players.map(function(player) {
      return {
        id: player.getID(),
        name: player.getName(),
      }
    }));
  });
}

document.querySelector('#teste6')
.addEventListener('click', function(){
  conn();
})

// console.log(connectedPlayers)
