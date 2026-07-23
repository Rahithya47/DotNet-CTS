public class FinancialForecast {

    public static double predictValue(double amount, double rate, int years) {

        if (years == 0) {

            return amount;

        }

        return predictValue(amount * (1 + rate), rate, years - 1);

    }

}