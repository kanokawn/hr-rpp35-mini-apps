let eventCounter = 0;

console.log('it has been set up');

// function placeX (event) {
//   if (eventCounter === 9) {
//     alert('The game has finished');
//   }
//   if (eventCounter % 2 === 0) {
//     eventCounter++;
//     return 'X'
//   } else {
//     eventCounter++;
//     return 'O'
//   }
// }

// var ticTacToeTable = document.getElementById('tic-tac-toe');
// console.log(ticTacToeTable);
// var trs = ticTacToeTable.getElementsByTagName('tr');
// console.log(trs);
// var tds = null;

// for (var i = 0; i < trs.length; i++) {
//   tds = trs[i].getElementsByTagName('td');
//   for (var j = 0; j < tds.length; j++) {
//     tds[j].onclick = placeX;
//     console.log(tds);
//   }
// }

var cells = document.querySelectorAll('td');
for (var i = 0; i < cells.length; i++) {
  cells[i].onclick = function(event) {
    if (eventCounter === 9) {
      alert('The game has finished');
    }
    if (eventCounter % 2 === 0) {
      eventCounter++;
      this.innerHTML = 'X';
    } else {
      eventCounter++;
      this.innerHTML = 'O';
    }
  }
  console.log('event listener added!');
}
console.log(cells);

var cells2 = document.querySelectorAll('td');
console.log(cells2);