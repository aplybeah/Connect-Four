console.log("Hello World");
//grab all cells
const cells = document.querySelectorAll(".cell");
//click on cell
for (i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function(e) {
    e.target.style.backgroundColor = "#ffc79d";
  });
}
//change color of cell on click
//only click cell once
//reset button
