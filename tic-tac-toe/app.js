let eventCounter = 0;
let ticTacToeObj = {
  0: ['', '', ''],
  1: ['', '', ''],
  2: ['', '', '']
};

let app = document.getElementById('app');

var createTable = function () {
  let table = document.createElement('table');
  table.setAttribute('id', 'tic-tac-toe');
  table.style.border = '1px solid';
  table.style.width = '500px';
  table.style.height = '500px';
  table.style.textAlign = 'center';
  for (var i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    tr.uniqueId = i;
    for (var j = 0; j < 3; j++) {
      let td = document.createElement('td');
      td.style.height = '100px';
      td.style.width = '100px';
      td.style.backgroundColor = 'pink';
      td.style.fontSize = '50px';
      td.uniqueId = j;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  app.appendChild(table);
}

createTable();

var cells = document.querySelectorAll('td');

var checkDiag = function (mark) {
  var win = true;
  let currentRow = 0;
  let currentCol = 0;
  for (var i = 0; i < 3; i++) {
    win = win && (ticTacToeObj[currentRow][currentCol] === mark);
    currentRow++;
    currentCol++;
  };
  if (win) {
    return win;
  } else {
    currentRow = 0;
    currentCol = 2;
    for (var i = 0; i < 3; i++) {
      win = win && (ticTacToeObj[currentRow][currentCol] === mark);
      currentRow++;
      currentCol++;
    };
    return win;
  }
};
var checkVertical = function (mark, x, y) {};
var checkHorizontal = function (mark, x, y) {};

for (var i = 0; i < cells.length; i++) {
  cells[i].onclick = function(event) {
    if (this.innerHTML === '') {
      if (eventCounter % 2 === 0) {
        eventCounter++;
        this.innerHTML = 'X';
        ticTacToeObj[this.parentNode.uniqueId][this.uniqueId] = 'X';
        console.log(ticTacToeObj);
        console.log(checkDiag('X'));
      } else {
        eventCounter++;
        this.innerHTML = 'O';
        ticTacToeObj[this.parentNode.uniqueId][this.uniqueId] = 'O';
        console.log(ticTacToeObj);
        console.log(checkDiag('X'));
      }
    } else {
      if (eventCounter === 9) {
        alert('The game has finished.');
      } else {
        alert('A move has already been made here.')
      }
    }
  }
}
