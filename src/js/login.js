var playerID, roomID;
var redPieces,bluePieces;

function printdata(doc){
  var msg = document.querySelector('.message');
  var div = document.createElement('div');

  var red = doc.redPieces.Ki.type + ":" + doc.redPieces.Ki.position + " ";
  red += doc.redPieces.Qu.type + ":" + doc.redPieces.Qu.position + " ";
  red += doc.redPieces.R1.type + ":" + doc.redPieces.R1.position + " ";
  red += doc.redPieces.R2.type + ":" + doc.redPieces.R2.position + " ";
  red += doc.redPieces.B1.type + ":" + doc.redPieces.B1.position + " ";
  red += doc.redPieces.B2.type + ":" + doc.redPieces.B2.position + " ";
  red += doc.redPieces.K1.type + ":" + doc.redPieces.K1.position + " ";
  red += doc.redPieces.K2.type + ":" + doc.redPieces.K2.position + " ";
  red += doc.redPieces.P1.type + ":" + doc.redPieces.P1.position + " ";
  red += doc.redPieces.P2.type + ":" + doc.redPieces.P2.position + " ";
  red += doc.redPieces.P3.type + ":" + doc.redPieces.P3.position + " ";
  red += doc.redPieces.P4.type + ":" + doc.redPieces.P4.position + " ";
  red += doc.redPieces.P5.type + ":" + doc.redPieces.P5.position + " ";
  red += doc.redPieces.P6.type + ":" + doc.redPieces.P6.position + " ";
  red += doc.redPieces.P7.type + ":" + doc.redPieces.P7.position + " ";
  red += doc.redPieces.P8.type + ":" + doc.redPieces.P8.position + " ";

  var blue = doc.bluePieces.Ki.type + ":" + doc.bluePieces.Ki.position + " ";
  blue += doc.bluePieces.Qu.type + ":" + doc.bluePieces.Qu.position + " ";
  blue += doc.bluePieces.R1.type + ":" + doc.bluePieces.R1.position + " ";
  blue += doc.bluePieces.R2.type + ":" + doc.bluePieces.R2.position + " ";
  blue += doc.bluePieces.B1.type + ":" + doc.bluePieces.B1.position + " ";
  blue += doc.bluePieces.B2.type + ":" + doc.bluePieces.B2.position + " ";
  blue += doc.bluePieces.K1.type + ":" + doc.bluePieces.K1.position + " ";
  blue += doc.bluePieces.K2.type + ":" + doc.bluePieces.K2.position + " ";
  blue += doc.bluePieces.P1.type + ":" + doc.bluePieces.P1.position + " ";
  blue += doc.bluePieces.P2.type + ":" + doc.bluePieces.P2.position + " ";
  blue += doc.bluePieces.P3.type + ":" + doc.bluePieces.P3.position + " ";
  blue += doc.bluePieces.P4.type + ":" + doc.bluePieces.P4.position + " ";
  blue += doc.bluePieces.P5.type + ":" + doc.bluePieces.P5.position + " ";
  blue += doc.bluePieces.P6.type + ":" + doc.bluePieces.P6.position + " ";
  blue += doc.bluePieces.P7.type + ":" + doc.bluePieces.P7.position + " ";
  blue += doc.bluePieces.P8.type + ":" + doc.bluePieces.P8.position + " ";

  redPieces = {
    color: 'red',
    P1: new Pawn(doc.redPieces.P1.type, doc.redPieces.P1.position, doc.redPieces.P1.isFirst),
    P2: new Pawn(doc.redPieces.P2.type, doc.redPieces.P2.position, doc.redPieces.P2.isFirst),
    P3: new Pawn(doc.redPieces.P3.type, doc.redPieces.P3.position, doc.redPieces.P3.isFirst),
    P4: new Pawn(doc.redPieces.P4.type, doc.redPieces.P4.position, doc.redPieces.P4.isFirst),
    P5: new Pawn(doc.redPieces.P5.type, doc.redPieces.P5.position, doc.redPieces.P5.isFirst),
    P6: new Pawn(doc.redPieces.P6.type, doc.redPieces.P6.position, doc.redPieces.P6.isFirst),
    P7: new Pawn(doc.redPieces.P7.type, doc.redPieces.P7.position, doc.redPieces.P7.isFirst),
    P8: new Pawn(doc.redPieces.P8.type, doc.redPieces.P8.position, doc.redPieces.P8.isFirst),
    Ki: new King(doc.redPieces.Ki.type, doc.redPieces.Ki.position),
    Qu: new Queen(doc.redPieces.Qu.type, doc.redPieces.Qu.position),
    R1: new Rook(doc.redPieces.R1.type, doc.redPieces.R1.position),
    R2: new Rook(doc.redPieces.R2.type, doc.redPieces.R2.position),
    K1: new Knight(doc.redPieces.K1.type, doc.redPieces.K1.position),
    K2: new Knight(doc.redPieces.K2.type, doc.redPieces.K2.position),
    B1: new Bishop(doc.redPieces.B1.type, doc.redPieces.B1.position),
    B2: new Bishop(doc.redPieces.B2.type, doc.redPieces.B2.position),
  }

  bluePieces = {
    color: 'blue',
    P1: new Pawn(doc.bluePieces.P1.type, doc.bluePieces.P1.position, doc.bluePieces.P1.isFirst),
    P2: new Pawn(doc.bluePieces.P2.type, doc.bluePieces.P2.position, doc.bluePieces.P2.isFirst),
    P3: new Pawn(doc.bluePieces.P3.type, doc.bluePieces.P3.position, doc.bluePieces.P3.isFirst),
    P4: new Pawn(doc.bluePieces.P4.type, doc.bluePieces.P4.position, doc.bluePieces.P4.isFirst),
    P5: new Pawn(doc.bluePieces.P5.type, doc.bluePieces.P5.position, doc.bluePieces.P5.isFirst),
    P6: new Pawn(doc.bluePieces.P6.type, doc.bluePieces.P6.position, doc.bluePieces.P6.isFirst),
    P7: new Pawn(doc.bluePieces.P7.type, doc.bluePieces.P7.position, doc.bluePieces.P7.isFirst),
    P8: new Pawn(doc.bluePieces.P8.type, doc.bluePieces.P8.position, doc.bluePieces.P8.isFirst),
    Ki: new King(doc.bluePieces.Ki.type, doc.bluePieces.Ki.position),
    Qu: new Queen(doc.bluePieces.Qu.type, doc.bluePieces.Qu.position),
    R1: new Rook(doc.bluePieces.R1.type, doc.bluePieces.R1.position),
    R2: new Rook(doc.bluePieces.R2.type, doc.bluePieces.R2.position),
    K1: new Knight(doc.bluePieces.K1.type, doc.bluePieces.K1.position),
    K2: new Knight(doc.bluePieces.K2.type, doc.bluePieces.K2.position),
    B1: new Bishop(doc.bluePieces.B1.type, doc.bluePieces.B1.position),
    B2: new Bishop(doc.bluePieces.B2.type, doc.bluePieces.B2.position),
  }
  var text =  document.createTextNode( red + blue );
  div.appendChild(text);
  msg.appendChild(div);
  render();
}

function snap(){
  firebase
  .firestore()
  .collection('room')
  .orderBy('timestamp', 'desc')
  .onSnapshot(function(snap){
    snap.docChanges().forEach(function(change){
    if(!snap.metadata.hasPendingWrites) {
        printdata(change.doc.data());
      }
    })
  });
}

document.addEventListener('DOMContentLoaded', function() {
  try {
      let app = firebase.app();
      let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
      snap();
    } catch (e) {
        console.error(e);
      }
    });

document.querySelector('.Enter').addEventListener('click',
function(e){
  playerID = document.querySelector('#id_player_input').value;
  document.querySelector('.login').style.display = 'none';
  document.querySelector('.Register').style.display = 'block';
  document.querySelector('.Register').innerHTML = 'PlayerID: '+ playerID;
  registrer_moviment();
});

//
// function buildRoom(e){
//   var openRoom, openData, room = firebase.firestore().collection('room');
//   room.where('open', '==', true).limit(1).get()
//   .then(function(doc){
//     if(doc.empty){
//       room.add({
//         open: true,
//         player1: playerID,
//         player2:null,
//       }).then(function(doc){
//         roomID = doc.id;
//       });
//     }else{
//       doc.forEach(function(value){
//         roomID = value.id;
//         room.doc(roomID).update({"open": false, "player2": playerID})
//       })
//     };
//   })
//   .catch(function(error){
//     console.log(error);
//   });
// };
//
//
// document.querySelector('.play').addEventListener('click', buildRoom);
//
// document.querySelector('.Enter').addEventListener('click', function(){
//   playerID = document.querySelector('#id_player_input').value;
//   firebase.firestore().collection('players').add({
//     id: playerID,
//     timestamp: firebase.firestore.FieldValue.serverTimestamp()
//   }).then(function(){
//     document.querySelector('.login').style.display = "none";
//   });
// });
