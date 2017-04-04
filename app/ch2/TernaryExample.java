public class TernaryExample{
	public static void main(String[] args){
		int a=5;
		int b=7;
		int c=1;
		//nested ternary structure
		int result = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c) ;
		System.out.print("The biggest number is: "+result);
	}
}