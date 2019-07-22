document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = { 
   cells : [

    {
      row: 0,
      col: 0,
      // ...
      isMine: false,
      hidden: true
    }, 
    {
      row: 0,
      col: 1,
      // ...
      isMine: true,
      hidden: true

    }, 
    {
      row: 0,
      col: 2,
      // ...
      isMine: true,
      hidden: true

    }, 
    {
      row: 0,
      col: 3,
      // ...
      isMine: true,
      hidden: true

    }, 
    {
      row: 1,
      col: 0,
      // ...
      isMine: true,
      hidden: true

    }, 
    {
      row: 1,
      col: 1,
      // ...
      isMine: true,
      hidden: true

    }, 
    {
      row: 1,
      col: 2,
      // ...
      isMine: false,
      hidden: true

    },  
    {
      row: 1,
      col: 3,
      // ...
      isMine: true,
      hidden: true

    },
    {
      row: 2,
      col: 0,
      // ...
      isMine: false,
      hidden: true

    },
    {
      row: 2,
      col: 1,
      // ...
      isMine: true,
      hidden: true

    },
    {
      row: 2,
      col: 2,
      // ...
      isMine: false,
      hidden: true

    },
    {
      row: 2,
      col: 3,
      // ...
      isMine: false,
      hidden: true

    },

    {
      row: 3,
      col: 0,
      // ...
      isMine: false,
      hidden: true


    },

    {
      row: 3,
      col: 1,
      // ...
      isMine: false,
      hidden: true

    },

    {
      row: 3,
      col: 2,
      // ...
      isMine: false,
      hidden: true

    },

    {
      row: 3,
      col: 3,
      // ...
      isMine: false,
      hidden: true
      

    },


    ]
   };

function startGame () {
  // Don't remove this function call: it makes the game work!

  // Loop go through contents of board.cells then
      
      for (i = 0; i < board.cells.length; i++) {

    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
      }

  // That then pass the result from "countSurroundingMines" to cell property


    // change out below for loop for a forEach maybe?

    // board.cells.forEach(countSurroundingMines(cell) {
    //     return // not sure what goes on this line  
    //   });
      
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.



function countSurroundingMines (cell) {

   //declared variables here:
  var i = 0;
  var count = 0;
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);

  //for loop here:
  for (i = 0; i < surrounding.length; i++) {

    //if statement here to check isMine == true
    // refactor below line because already a boolean.
    // Previously: if (surrounding[i].isMine == true) {}

    if (surrounding[i].isMine) { 
        count++;
       }
    }

    // return count;
   return count;

}


