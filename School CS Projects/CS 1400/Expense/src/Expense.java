import java.util.Scanner;

public class Expense {
    String category;
    double amount;
    String date;
    String description;
    String paymentType;

    public Expense(String category, double amount,String date,String paymentType, String description) {
        this.category = category;
        this.amount = amount;
        this.date = date;
        this.description = description;
        this.paymentType = paymentType;

    }

    public String toString() {
        return String.format("\t%s$%.2f\t%s\t%s\t%s",
                category,amount,date,paymentType,description);
    }

    static Expense[] getTestExpenses() {
        Expense[] expenses = {
                new Expense("Food ",75.50, "2016-03-16","Visa debit", "Grocery shopping at Maceys"),
                new Expense("Food ", 23.28, "2016-03-15","Visa debit", "Grocery shopping at Walmart"),
                new Expense("Gas ", 25.14, "2016-03-12","Visa credit", "Buick at Chevron 10 gallons"),
                new Expense("Gas ",32.50, "2016-03-22","Visa credit", "Van at Sinclair 15 gallons"),
                new Expense("Utilities ",98.20, "2016-03-19","Check", "Power bill"),
                new Expense("Food  ",7.00,  "2016-03-15","Cash", "Lunch at Subway"),
                new Expense("Gas ", 18.22, "2016-03-12","Visa debit", "Subaru at Maverik 7 gallons")
        };

        return expenses;
    }

    public static void main(String[] args) {
    Expense[] expenses = Expense.getTestExpenses();

    Scanner in = new Scanner(System.in);
    String expenseName;
    System.out.print("Expense Catagory ");
    expenseName = in.next();

    double totalcatagory = 0.0;
    double totalAll = 0.0;
    for (int i=0; i<expenses.length; i++){
        System.out.println(expenses[i]);
        totalAll += expenses[i].amount;
        if (expenseName.equals(expenses[i].category)){
            totalcatagory += expenses[i].amount;
        }
    }
    System.out.format("Total for " + expenseName +":" + " %.2f%n",totalcatagory);
    System.out.format("Total for all categories: %.2f%n",totalAll);

}
}