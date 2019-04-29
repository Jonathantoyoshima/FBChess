var myTurn, bluePieces, redPieces, roomID;

document.querySelector('.Enter').addEventListener('click', function(e){
  playerID = document.querySelector('#id_player_input').value;
  startGame();
});

function startGame(){
  document.querySelector('.login').style.display = 'none';
  document.querySelector('.Register').style.display = 'block';
  document.querySelector('.Register').innerHTML = 'PlayerID: '+ playerID;
  //lobby();
}
