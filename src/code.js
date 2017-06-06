var columns = 39;
var rows = 40;
var gridcolor = "white";

var colors = [];
var colorX = [];

for (var r=0; r<=rows-1; r++) {
  var columnColors = [];

  for (var c=0; c<=columns-1; c++) {
    columnColors.push(gridcolor);
  }

  colors.push(columnColors);
}


function paint(color, row, col) {
  colors[row][col] = color;
}

function paintCells(color, row, cells) {
  for (var c=0; c<=cells.length-1; c++) {
    paint(color, row, cells[c]);
  }
}

// row 4
paint("darkgrey", 4, 22);
paint("darkgreen", 4, 20);

// row 5
paintCells("darkgrey", 5, [16,18,21,22,24]);
paintCells("darkgreen", 5, [12,15,]);

// row 6
paintCells("darkgrey", 6, [13,15,16,19,20,22,23,24]);
paint("lightbrown", 6, 18);
paintCells("darkgreen", 6, [17,21,25]);

// row 7
paintCells("darkgrey", 7, [11,12,13,14,16,17,19,21,22,23,24,25]);
paintCells("lightbrown", 7, [15,18,20]);
paintCells("darkgreen", 7, [12,24]);

// row 8
paintCells("darkgrey", 8, [12,14,16,18,20,21,22,24,25]);
paintCells("lightbrown", 8, [13,15,17,19,23]);

// row 9
paintCells("darkgrey", 9, [12,15,20,25]);
paintCells("lightbrown", 9, [14,16,17,19,21,24]);
paintCells("darkbrown", 9, [13,18,22,23]);

// row 10
paintCells("darkgrey", 10, [12,25]);
paintCells("lightbrown", 10, [13,14,15,17,18,19,20,22,23,24]);
paintCells("darkbrown", 10, [16,21]);

// row 11
paintCells("darkgrey", 11, [13,24]);
paintCells("lightbrown", 11, [14,16,17,18,19,21,22,23]);
paintCells("darkbrown", 11, [15,20])

// row 12
paintCells("darkgrey", 12, [13,24]);
paintCells("lightbrown", 12, [14,15,16,17,18,19,20,21,22,23]);

// row 13
paintCells("darkgrey", 13, [13,24]);
paintCells("lightbrown", 13, [14,15,16,17,18,19,20,21,22,23]);

// row 14
paintCells("darkgrey", 14, [13,16,21,24]);
paintCells("lightbrown", 14, [14,17,18,19,20,23]);

// row 15
paintCells("darkgrey", 15, [13,15,16,21,22,24]);
paintCells("lightbrown", 15, [14,17,18,19,20,23]);

// row 16
paintCells("darkgrey", 16, [13,24]);
paintCells("lightbrown", 16, [14,15,16,17,18,19,20,21,22,23]);

// row 17
paintCells("darkgrey", 17, [13,15,22,24]);
paintCells("lightbrown", 17, [14,16,17,18,19,20,21,23]);
paint("darkgreen", 17, 26);

// row 18
paintCells("darkgrey", 18, [13,16,17,18,19,20,21,24,26]);
paintCells("lightbrown", 18, [14,15,22,23]);
paint("darkgreen", 18, 28);

// row 19
paintCells("darkgrey", 19, [14,23,26,27]);
paintCells("lightbrown", 19, [15,16,17,18,19,20,21,22]);

// row 20
paintCells("darkgrey", 20, [15,16,17,18,19,20,21,22,25,27,28]);
paint("lightbrown", 20, 26);

// row 21
paintCells("darkgreen", 21, [12,27]);
paintCells("darkgrey", 21, [17,20,24,26]);
paintCells("lightbrown", 21, [18,19,25]);

// row 22
paint("darkgreen", 22, 10);
paintCells("darkgrey", 22, [12,16,17,20,21,22,23,25]);
paint("darkbrown", 22, 18);
paintCells("lightbrown", 22, [19,24]);

// row 23
paintCells("darkgrey", 23, [11,12,15,17,18,21,24]);
paintCells("lightbrown", 23, [16,20,22,23]);
paint("darkbrown", 23, 19);
paint("darkgreen", 23, 14);

// row 24
paintCells("darkgrey", 24, [10,11,13,14,16,18,21,22,23]);
paintCells("lightbrown", 24, [12,15,19]);
paint("darkbrown", 24, 20);

// row 25
paintCells("darkgrey", 25, [12,15,18,21]);
paintCells("lightbrown", 25, [13,14,19,20]);

// row 26
paintCells("darkgrey", 26, [13,14,17,20]);
paintCells("lightbrown", 26, [18,19]);
paint("darkgreen", 26, 15);

// row 27
paintCells("darkgrey", 27, [17,20]);
paint("lightbrown", 27, 18);
paint("darkbrown", 27, 19);

// row 28
paintCells("darkgrey", 28, [16,21]);
paintCells("lightbrown", 28, [17,20]);
paintCells("darkbrown", 28, [18,19]);

// groot pot
paintCells("darkgrey", 29, [13,14,15,16,17,18,19,20,21,22,23,24]);
paintCells("darkgrey", 30, [13,24]);
paintCells("darkgrey", 31, [13,24]);
paintCells("darkgrey", 32, [13,14,15,16,17,18,19,20,21,22,23,24]);
paintCells("darkgrey", 33, [14,23]);
paintCells("darkgrey", 34, [14,23]);
paintCells("darkgrey", 35, [15,22]);
paintCells("darkgrey", 36, [15,22]);
paintCells("darkgrey", 37, [16,21]);
paintCells("darkgrey", 38, [16,17,18,19,20,21]);


var grid = document.getElementById("grid");

for (var r=0; r<=rows-1; r++) {

    var row = document.createElement("div");
    row.className = "row";

    for (var c=0; c<=columns-1; c++) {
      var col = document.createElement("span");
      console.log("row " + r);
      console.log("col " + c);
      console.log("color " + colors[r][c]);
      col.className = "col " + colors[r][c];

      row.appendChild(col);
    }

    grid.appendChild(row);
}

