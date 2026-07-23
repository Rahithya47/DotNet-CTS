public class SingletonTest {

    public static void main(String[] args) {

        // First object
        Logger logger1 = Logger.getInstance();

        logger1.log("Application Started");

        logger1.log("Loading Configuration");

        // Second object
        Logger logger2 = Logger.getInstance();

        System.out.println();

        System.out.println("Logger1 HashCode : " + logger1.hashCode());

        System.out.println("Logger2 HashCode : " + logger2.hashCode());

        System.out.println();

        if (logger1 == logger2) {

            System.out.println("Singleton Pattern Verified");

        }
        else {

            System.out.println("Singleton Pattern Failed");

        }

    }

}