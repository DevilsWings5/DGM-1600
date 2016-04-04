import java.util.IntSummaryStatistics;
import java.util.Scanner;

public class CaptJack {

    public static void main(String[] args) {

         int numofpirates;

         int ammountofgold;

         int numofcrewmembers;

         double remaingold;

         double jackscut;

         double afterjackscut;

         double firstmatescut;

        double afterfirstmatescut;

         double thecrewcut;

        double pba;





        Scanner pirates = new Scanner(System.in);

        System.out.print("Number of Pirates? ");

        numofpirates = pirates.nextInt();

        numofcrewmembers = numofpirates -2;





        Scanner gold = new Scanner(System.in);

        System.out.print("Amount of Gold ");

        ammountofgold = gold.nextInt();




        remaingold = ammountofgold - numofcrewmembers * 3;

        jackscut = Math.floor (remaingold * .12);

        System.out.println("Captain Jacks Cut " + jackscut);




        afterjackscut = remaingold - jackscut;

        firstmatescut = Math.floor (.08 * afterjackscut  );

        System.out.println("First Mates Cut " + firstmatescut);




        afterfirstmatescut = afterjackscut  - firstmatescut;

        thecrewcut = Math.floor (afterfirstmatescut / numofpirates);

        System.out.println("The Crews Cut " + thecrewcut );




        pba = afterfirstmatescut - thecrewcut * numofpirates;

        System.out.println("PBA " + pba);






    }
}
