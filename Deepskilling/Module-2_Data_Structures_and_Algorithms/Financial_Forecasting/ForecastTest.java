public class ForecastTest {

    public static void main(String[] args) {

        double presentValue = 100000;

        double annualGrowth = 0.05;

        int years = 5;

        double futureValue = FinancialForecast.predictValue(

                presentValue,
                annualGrowth,
                years

        );

        System.out.printf("Future Value after %d years : %.2f", years, futureValue);

    }

}