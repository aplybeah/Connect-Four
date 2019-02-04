console.log("Hello World");
//grab all cells
const cells = document.querySelectorAll(".cell");
const clear = document.querySelector(".reset");
var player = 1;
//click on cell
//change color of cell on click
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
  //   e.target.style.backgroundColor = "white";
  // when clicke the Reset button, loop through all cells and change the background to white
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "white";
  }
});
