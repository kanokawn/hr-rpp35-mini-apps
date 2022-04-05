/////////////////////////////////////////////
//////////// Initial Variables //////////////
/////////////////////////////////////////////
let app = document.getElementById('app');
let eventCounter = 0;
let winner;
let ticTacToeObj = {
  0: ['', '', ''],
  1: ['', '', ''],
  2: ['', '', '']
};

/////////////////////////////////////////////
////////// Creating DOM Elements /////////////
/////////////////////////////////////////////

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

var createResetButton = function () {
  let reset = document.createElement('button');
  let br = document.createElement('br');
  reset.setAttribute('id', 'reset');
  reset.innerHTML = 'Reset the Game';
  reset.style.height = '100px';
  reset.style.width = '200px';
  reset.style.fontSize = '20px'
  reset.onclick = function () {
    ticTacToeObj = {
      0: ['', '', ''],
      1: ['', '', ''],
      2: ['', '', '']
    };
    cells.forEach(cell => {
      cell.innerHTML = '';
    });
    eventCounter = 0;
    winner = undefined;
  }
  app.appendChild(br);
  app.appendChild(reset);
}

createResetButton();


/////////////////////////////////////////////
//////// Tic - Tac - Toe Functions //////////
/////////////////////////////////////////////

//////// Checking Win Status //////////

var checkDiag = function (mark, column) {
  let currentCol = column;
  for (var i = 0; i < 3; i++) {
    if (ticTacToeObj[i][currentCol] === mark) {
    } else {
      return false;
    }
    if (column === 0) {
      currentCol++;
    } else {
      currentCol--;
    }
  }
  return true;
};

var checkVertical = function (mark, column) {
  for (var i = 0; i < 3; i++) {
    if (ticTacToeObj[i][column] !== mark) {
      return false
    }
  }
  return true;
};
var checkHorizontal = function (mark, row) {
  for (var i = 0; i < 3; i++) {
    if (ticTacToeObj[row][i] !== mark) {
      return false
    }
  }
  return true;
};

var checkWin = function (mark, row, column) {
  return checkDiag(mark, 0) || checkDiag(mark, 2) || checkVertical(mark, column) || checkHorizontal(mark, row);
}

//////// Playing The Game //////////

let cells = document.querySelectorAll('td');

var createOnClickCells = function () {
  for (var i = 0; i < cells.length; i++) {
    cells[i].onclick = function(event) {
      let row = Number(this.parentNode.uniqueId);
      let column = Number(this.uniqueId);
      if (this.innerHTML === '' && !winner) {
        if (eventCounter % 2 === 0) {
          eventCounter++;
          this.innerHTML = 'X';
          ticTacToeObj[row][column] = 'X';
          if (checkWin('X', row, column)) {
            alert('X has won!')
            winner = 'X';
          };
        } else {
          eventCounter++;
          this.innerHTML = 'O';
          ticTacToeObj[this.parentNode.uniqueId][this.uniqueId] = 'O';
          if (checkWin('O', row, column)) {
            alert('O has won!')
            winner = 'O';
          };
        }
      } else {
        if (eventCounter === 9) {
          alert('There is a tie!');
        } else if (winner) {
          alert(`Player ${winner} has won!`);
        } else {
          alert('A mark has already been placed here.');
        }
      }
    }
  }
}

createOnClickCells();

module.exports = {
  createTable,
  createResetButton,
  checkDiag,
  checkHorizontal,
  checkVertical,
  checkWin,
  createOnClickCells
};
