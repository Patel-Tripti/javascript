public class hollopattern {
    public static void main(String[] args) {
        for(int i=5;i>=1;i--){
          for(int j=i;j<=4;j++){
         System.out.print(" ");
          }

          for(int k = 1;k<=i;k++){
        if((i==4&&k==2) || (i==4&&k==3) || (i==3&&k==2)){
         System.out.print(" ");
        }else{
            System.out.print("*");
        }
          }
          System.out.println();
        }
    }
}
