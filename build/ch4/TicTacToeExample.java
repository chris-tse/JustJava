public class TicTacToeExample {
	public static void main(String[] args) {
		// Assign a value to the possible states of a square
		int blank = 0;
		int x     = 1;
		int o     = 2;

		// Declare 2-D Array
		int[][] board = {{o, blank,   x  },
						 {x,   x  ,   o  },
						 {o, blank, blank}};

		// Print out each element in the array
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				System.out.print(board[i][j] + " ");
			}
			System.out.println();
		}
	}
}