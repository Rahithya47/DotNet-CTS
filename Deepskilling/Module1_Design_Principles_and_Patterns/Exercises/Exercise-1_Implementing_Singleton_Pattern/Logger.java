public class Logger {

    private static Logger instance;

    private Logger() {
        System.out.println("Logger Instance Created.");
    }

    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("[LOG] " + message);
    }

    public static void main(String[] args) {
        Logger logger = Logger.getInstance();
        logger.log("Application Started");

        Logger logger2 = Logger.getInstance();
        logger2.log("User Logged In");

        if (logger == logger2) {
            System.out.println("Both objects are the same instance.");
        }
    }
}