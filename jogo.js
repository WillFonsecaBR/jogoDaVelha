var turn = document.getElementById("turn"),
  // PARA DEFINIR X OU O DENTRO DA DIV
  boxes = document.querySelectorAll("#main div"),
  X_or_O = 0;
//PINTA AS LINHAS GANHADORAS
function selectWinnerBoxes(b1, b2, b3) {
  b1.classList.add("ganhador");
  b2.classList.add("ganhador");
  b3.classList.add("ganhador");
  turn.innerHTML = b1.innerHTML + " VOCÊ GANHOU";
  turn.style.fontSize = "40px";
}
function getWinner() {
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var box3 = document.getElementById("box3");
  var box4 = document.getElementById("box4");
  var box5 = document.getElementById("box5");
  var box6 = document.getElementById("box6");
  var box7 = document.getElementById("box7");
  var box8 = document.getElementById("box8");
  var box9 = document.getElementById("box9");

  // CRIANDO AS POSSIBILIDADES DO JOGO
  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box2.innerHTML &&
    box1.innerHTML === box3.innerHTML
  )
    selectWinnerBoxes(box1, box2, box3);

  if (
    box4.innerHTML !== "" &&
    box4.innerHTML === box5.innerHTML &&
    box4.innerHTML === box6.innerHTML
  )
    selectWinnerBoxes(box4, box5, box6);

  if (
    box7.innerHTML !== "" &&
    box7.innerHTML === box8.innerHTML &&
    box7.innerHTML === box9.innerHTML
  )
    selectWinnerBoxes(box7, box8, box9);

  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box4.innerHTML &&
    box1.innerHTML === box7.innerHTML
  )
    selectWinnerBoxes(box1, box4, box7);

  if (
    box2.innerHTML !== "" &&
    box2.innerHTML === box5.innerHTML &&
    box2.innerHTML === box8.innerHTML
  )
    selectWinnerBoxes(box2, box5, box8);

  if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box6.innerHTML &&
    box3.innerHTML === box9.innerHTML
  )
    selectWinnerBoxes(box3, box6, box9);

  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box5.innerHTML &&
    box1.innerHTML === box9.innerHTML
  )
    selectWinnerBoxes(box1, box5, box9);

  if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box5.innerHTML &&
    box3.innerHTML === box7.innerHTML
  )
    selectWinnerBoxes(box3, box5, box7);
}
// CONSTRUINDO O EVENDO CLICK
for (var i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function() {
    // NÃO PERMITE ALTERAR O VALOR DO BOX
    if (this.innerHTML !== "X" && this.innerHTML !== "O") {
      if (X_or_O % 2 === 0) {
        console.log(X_or_O);
        this.innerHTML = "X";
        turn.innerHTML = "Jogador O";
        getWinner();
        X_or_O += 1;
      } else {
        console.log(X_or_O);
        this.innerHTML = "O";
        turn.innerHTML = "Jogador X";
        getWinner();
        X_or_O += 1;
      }
    }
  };
}
function replay() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove("ganhador");
    boxes[i].innerHTML = "";
    turn.innerHTML = "JOGADOR";
    turn.style.fontSize = "25px";
  }
}
