public class SwitchExample {
	public static void main(String[] args) {
		char grade = 'B';
		switch (grade) {
			case 'A':
				System.out.println("Excellent");
				break;
			case 'B':
				System.out.println("Very Good");
				break;
			case 'C':
				System.out.println("Good");
				break;
			case 'D':
				System.out.println("Pass");
				break;
			case 'F':
				System.out.println("Fail");
				break;
			default:
				System.out.println("Invalid letter grade");
		}

	}
}
