
function buildArray(arr, color) {
  Object.keys(arr).forEach(function(key) {
    if(arr.hasOwnProperty(key)){
      if(color === "red") {
        redPieces[key] = Piece(key, arr[key].tribe, arr[key].position, arr[key].isFirst);
      }else{
        bluePieces[key] = Piece(key, arr[key].tribe, arr[key].position, arr[key].isFirst);
      }
    }
  });
}

function printdata(doc){
  buildArray(doc.redPieces, "red");
  buildArray(doc.bluePieces, "blue");

  isRed = doc.isRed;
  fire_redPieces = doc.redPieces;
  fire_bluePieces = doc.bluePieces;
  render();
}

function snapshot(roomID) {
  firebase
  .firestore()
  .collection('room')
  .doc(roomID)
  .collection('registry')
  .orderBy('timestamp', 'desc')
  .limit(1)
  .onSnapshot(function(snap){
    redPieces = {color:"red"};
    bluePieces = {color:"blue"};

    snap.docChanges().forEach(function(change){
      if(!snap.metadata.hasPendingWrites) {
        printdata(change.doc.data());
      }
    })
  });
}

function lobby(){
  var room = firebase.firestore().collection("room");
  var query = room.where("openRoom", "==", true).limit(1).get().then(function(snap){
    if(snap.empty){
      room.add({player1:playerID, openRoom: true}).then(function(ref){
        roomID = ref.id;
        snapshot(ref.id);
      })
    }else{
      snap.forEach(function(doc){
        roomID = doc.id;
        snapshot(doc.id);
        room.doc(doc.id).update({player2:playerID, openRoom:false}).then(function(req){
          whoPlay = Math.round(Math.random()*1) == 0 ? playerID : doc.data().player1;
          registrer_moviment();
        });
      });
    };
  });
}
