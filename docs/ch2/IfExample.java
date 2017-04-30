public class IfExample {
    public static void main(String[] args) {
        int age = 22;

        // If the age is 21 and up, ask if they want some beer
        // Otherwise, offer some milk to the minor
        if (age >= 21) {
            System.out.println("Would you like some beer?");
        }
        if (age < 21) {
            System.out.println("Have some milk, kid.");
        }
    }
}
