var Squares = document.querySelectorAll('.Square');
var KI_ID = 4;

function cornersT (value) { return value - 8 < 0; }
function cornersB (value) { return value + 8 > Squares.length; }
function cornersL (value) { return value % 8 == 0; }
function cornersR (value) { return (value + 1) % 8 == 0; }

function render(){
  for (var i = 0; i < Squares.length; i++) {
    Squares[i].thisID = i;
    if (i == KI_ID) {
      Ki(i);
    }else{
      Squares[i].innerHTML = i;
      Squares[i].classList.remove('red');
      Squares[i].classList.remove('select');
    }
  }
}

function Ki(i){
  Squares[i].innerHTML = 'KI';
  Squares[i].classList.add('red');
  Squares[i].addEventListener('click', goClick);

  function goClick(e) {
    e.target.removeEventListener('click', goClick);
    Squares[e.target.thisID + 8].classList.add('select');
    Squares[e.target.thisID + 8].addEventListener('click', move);
    Squares[e.target.thisID + 8].classList.add('select');
    Squares[e.target.thisID + 8].addEventListener('click', move);
  }
}

function move(e){
  KI_ID = e.target.thisID;
  e.target.removeEventListener('click', move);
  //Squares[current].classList.remove('red');
  //Squares[current].removeEventListener('click', goClick);
  //e.target.classList.add('red');
  //e.target.classList.innerHTML = "KI";
  //e.target.addEventListener('click', goClick);
  render();
}

render();
