public class Roman {

            static int[] numbers = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
            static String[] symbols = {
                    "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};


            public static String toRoman(int num) {
                if (num == 0) {
                    return "";
                }
                for (int i = 0; i <numbers.length; i++) {
                    if (num >= numbers[i]) {
                        return symbols[i] + toRoman(num - numbers[i]);
                    }
                }
                return "";
            }
    }

