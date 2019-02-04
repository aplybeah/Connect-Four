const cells = document.querySelectorAll(".cell");
const clear = document.querySelector(".reset");
var player = 1;
//only click cell once
for (i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(e) {
    if (player === 1) {
      e.target.style.backgroundColor = "#ffc79d";
      player = 2;
    } else {
      e.target.style.backgroundColor = "#f09dff";
      player = 1;
    }
  });
}
clear.addEventListener("click", function(e) {
  e.preventDefault();
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "white";
  }
});
//when four cells are clicked, give a game over alert
