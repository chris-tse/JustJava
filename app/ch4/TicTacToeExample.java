public class TicTacToeExample {
	public static void main(String[] args) {
		// Assign a value to the possible states of a square
		int BLANK = 0;
		int X     = 1;
		int O     = 2;

		// Declare 2-D Array
		int[][] board = {{O, BLANK,   X  },
						 {X,   X  ,   O  },
						 {O, BLANK, BLANK}};

		// Print out each element in the array
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				System.out.print(board[i][j] + " ");
			}
			System.out.println();
		}
	}
}