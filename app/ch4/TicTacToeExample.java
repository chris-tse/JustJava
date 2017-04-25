public class TicTacToeExample {
	public static void main(String[] args) {
		// Assign a value to the possible states of a square
		char BLANK = ' ';
		char X     = 'X';
		char O     = 'O';

		// Declare 2-D Array
		char[][] board = {{O, BLANK,   X  },
						  {X,   X  ,   O  },
						  {O, BLANK, BLANK}};

		// Print out each element in the array
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				System.out.print( board[i][j] + " " );
			}
			System.out.println();
		}
	}
}