var playerID = '123456';
document.addEventListener('DOMContentLoaded', function() {
  try {
    let app = firebase.app();
    let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
  } catch (e) {
    console.error(e);
  }
});

function BreakPoint(){
  console.log('oi');
}

document
  .querySelector('.play')
  .addEventListener('click', buildRoom)

function buildRoom(e){
    var openRoom, openData, room = firebase.firestore().collection('room');
    room.where('open', '==', true).limit(1).get()
    .then(function(doc){
      if(doc.empty){
        room.add({
          open: true,
          player1: playerID,
          player2:null,
        });
      }else{
        doc.forEach(function(value){
          openRoom = value.id;
          room.doc(openRoom).update({"open": false, "player2": playerID})
        })
      };
    })
    .catch(function(error){

    });
  };
//
// document.querySelector('.Enter').addEventListener('click', function(e){
//   playerID = document.querySelector("#id_player_input").value;
//   var user = firebase.firestore().collection("players").doc(playerID);
//
//   user.get().then(function(doc){
//     if(!doc.exists){
//       user.set({
//         name: "Jonnys " + playerID,
//       })
//     } else {
//
//     };
//   });
//
//   // add({
//   //   players:1
//   // })
//   // room.get().then(function(rooms){
//   //   if(rooms.exists){
//   //     var test = rooms.where("players", "<", 1);
//   //     console.log(test)
//   //   }else{
//   //     rooms.add({
//   //       players: 1
//   //     })
//   //   }
//   // });
// });
//
// function addMessage(message){
//   document.querySelector('.message').innerHTML += "<div>" + message.player +": "+ message.move + "</div>";
// }
// // Loads chat messages history and listens for upcoming ones.
// function loadMessages() {
//   // Create the query to load the last 12 messages and listen for new ones.
//   var query = firebase.firestore()
//                   .collection('room001')
//                   .orderBy('timestamp', 'desc')
//                   .limit(6);
//
//   // Start listening to the query.
//   query.onSnapshot(function(snapshot) {
//     snapshot.docChanges().forEach(function(change) {
//         var message = change.doc.data();
//         addMessage(message)
//
//     });
//   });
// };
