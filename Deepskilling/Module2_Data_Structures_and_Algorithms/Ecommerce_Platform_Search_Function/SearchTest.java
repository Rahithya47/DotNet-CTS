public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {

                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mouse", "Electronics"),
                new Product(103, "Keyboard", "Electronics"),
                new Product(104, "Notebook", "Stationery"),
                new Product(105, "Pen", "Stationery")

        };

        System.out.println("Linear Search Result");

        Product linearResult = SearchService.linearSearch(products, 103);

        if (linearResult != null) {

            linearResult.displayProduct();

        }

        System.out.println();

        System.out.println("Binary Search Result");

        Product binaryResult = SearchService.binarySearch(products, 103);

        if (binaryResult != null) {

            binaryResult.displayProduct();

        }

    }

}