public class Logger {

    // Step 1: Create a single instance
    private static Logger instance;

    // Step 2: Private constructor
    private Logger() {
        System.out.println("Logger Instance Created.");
    }

    // Step 3: Global access point
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // Step 4: Logging method
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }
}