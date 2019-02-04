console.log("Hello World");
//grab all cells
const cells = document.querySelectorAll(".cell");
const clear = document.querySelector(".reset");
//click on cell
for (i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(e) {
    e.target.style.backgroundColor = "#ffc79d";
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

//change color of cell on click
//only click cell once
//reset button
