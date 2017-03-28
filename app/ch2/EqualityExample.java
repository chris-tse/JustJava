public class EqualityExample {
	public static void main(String[] args) {
		double lastWeekPrice = 3.99;
		double thisWeekPrice = 4.99;
		// equalities can be evaluated in the println call, 
		// but need to be wrapped in parantheses
		System.out.println("This week's price is higher than last week's? "
				+ (lastWeekPrice <= thisWeekPrice));
	}
}
