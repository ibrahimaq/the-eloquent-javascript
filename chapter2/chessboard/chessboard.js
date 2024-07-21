/*
  Chessboard
  Write a program that creates a string that represents an 8×8 grid, using
  newline characters to separate lines. At each position of the grid there
  is either a space or a "#" character. The characters should form a
  chessboard.
  Passing this string to console.log should show something like this:

  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #

*/

const gridSize = 8
let chessBoard = ''
for (let i = 1; i <= gridSize; i++) {

 let line = ''

  for (let j = 1; j <= gridSize; j++) {
    if ((i + j) % 2 === 0) {
      line += '#'
    } else {
      line += ' '
    } 
  }

  line += '\n'
  chessBoard += line  
}

console.log(chessBoard)