function matchPlayer(){
  console.log('Try match')
  FBInstant
    .matchPlayerAsync()
    .then(function() {
      console.log(FBInstant.context.getID());
      // 3456
    });

}

document.querySelector('#teste9')
.addEventListener('click', function(){
  matchPlayer();
})
