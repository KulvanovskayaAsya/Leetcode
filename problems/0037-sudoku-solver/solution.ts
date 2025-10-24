/**
 Do not return anything, modify board in-place instead.
 */
function isValid(board: string[][], row: number, col: number, num: string): boolean {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) return false;
  }

  for (let j = 0; j < 9; j++) {
    if (board[j][col] === num) return false;
  }

  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;

  for (let j = startRow; j < startRow + 3; j++) {
    for (let i = startCol; i < startCol + 3; i++) {
      if (board[j][i] === num) return false;
    }
  }
  return true;
}

function solveSudoku(board: string[][]): boolean {
  for (let row = 0; row < 9; row++) {
    for (let column = 0; column < 9; column++) {
      if (board[row][column] === '.') {
        for (let num = 1; num <= 9; num++) {
          const currentChar = String(num);

          if (isValid(board, row, column, currentChar)) {
            board[row][column] = currentChar;

            if (solveSudoku(board)) {
              return true;
            }

            board[row][column] = '.';
          }
        }

        return false;
      }
    }
  }

  return true;
}
