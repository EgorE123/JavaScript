//TODO
//        Пользователь вводит число (1 - 3999)
//        I - 1
//        V - 5
//        X - 10
//        L - 50
//        C - 100
//        D - 500
//        M - 1000
//        Пример  10 -> x
//        6 -> VI

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Введите число от 1 до 3999:");
        int num = scanner.nextInt();
        if (num < 1 || num > 3999) {
            System.out.println("Число должно быть в диапазоне от 1 до 3999");
        } else {
            String roman = Roman.toRoman(num);
            System.out.println("Римское число: " + roman);
        }
    }
}


