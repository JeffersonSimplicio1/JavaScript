public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    int a = scanner.nextInt();
    int b = scanner.nextInt();
    int c = scanner.nextInt();
    int d = scanner.nextInt();

    if(b>c && d>a){
        if(c+d>a+b){
            if(a <0 && c <0){
                if (a%2 == 0){
                    System.out.println("Valores aceitos");
                }
            }

        }
    } else {
        System.out.println("Valores  nao aceitos");
    }
}