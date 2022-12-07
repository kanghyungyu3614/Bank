package Bank.service;

import org.springframework.stereotype.Service;

// sub난수를 활용하기 위해 ArrayList를 가져옵니다. 즉, 보안카드 난수140개를 담을 ArrayList자료형이 필요합니다.
import java.util.ArrayList;
//자바 유틸에서 랜덤을 불러온다.
import java.util.Random;
// 강현규 2022-12-07 보안카드 난수 만들기 코드생성
@Service
public class BankService {
    public static void main(String[] args) {
        // 난수를 만들기 위해 랜덤class를 가져옵니다.
        Random random = new Random();
        // 보안카드숫자를 담을 빈문자열을 만들겠습니다.
        String mainsecurityCardString = "";

        // 1번 : 보안카드 위에 번호 10개 만들기위해 길이를 정해줍니다. //
        int mainlength = 10;
        System.out.println("length : "+mainlength);
        // StringBuffer는 문자열을 추가하거나 변경 할 때 주로 사용하는 자료형입니다.
        // 주의 : string이랑 다른 자료형입니다.
        // mainsecurityCard 라는 StringBuffer타입의 변수를 만들겠습니다. 이게 위의 보안카드 번호 10자리 입니다.
        StringBuffer mainsecurityCard = new StringBuffer();
        System.out.println("처음에 빈문자생성 : "+mainsecurityCard);
        // 이제 난수를 만들겁니다.
        for (int i = 0; i < mainlength; i++) {
            //문자형 숫자(0부터9까지)는 아스키코드의 48 ~ 58까지 범위입니다.
            mainsecurityCard.append((char)((int)random.nextInt(10)+48));
        }
        // main 랜덤영숫자의 길이와 문자는 "0부터 4까지" + " " + "4부터6까지" + " " + "6부터10까지" 를 합친 문자열을 만듭니다.
        // StringBuffer 랑 String은 자료형이 다르기 때문에 StringBuffer에 .toString()이 필요합니다.
        mainsecurityCardString = mainsecurityCard.substring(0, 4).toString()+" "+mainsecurityCard.substring(4, 6).toString()+" "+mainsecurityCard.substring(6, 10).toString();
        System.out.println(mainsecurityCard.substring(0, 4)+" "+mainsecurityCard.substring(4, 6)+" "+mainsecurityCard.substring(6, 10));
        // String 타입으로 바꿔서 띄어쓰기가 된 10자리 숫자를 콘솔창에 출력하면?
        System.out.println("mainsecurityCardString는? : "+mainsecurityCardString);
        // 이렇게 나옵니다.


        // 2번 : 보안카드 밑에 번호 140개 만들기 //
        // 보안카드 번호 140개의 길이를 지정해줍니다.
        int sublength = 140;
        System.out.println("length : "+sublength);
        // StringBuffer는 문자열을 추가하거나 변경 할 때 주로 사용하는 자료형입니다.
        StringBuffer subsecurityCard = new StringBuffer();
        System.out.println("처음에 빈문자생성 : "+subsecurityCard);
        // 마찬가지로 140개의 난수를 만들 for문을 만들어줍니다.
        for (int i = 0; i < sublength; i++) {
            //문자형 숫자(0부터9까지)는 48 ~ 58까지 범위다.
            subsecurityCard.append((char)((int)random.nextInt(10)+48));
        }
        // 랜덤영숫자의 길이와 문자는
        System.out.println("newWord = (" + subsecurityCard + "), length = " + sublength);

        ArrayList<String> subarr = new ArrayList<String>();
        // for 문 안에 코드를 넣을겁니다.
        //1) 띄어쓰기를 한 4자리 : subarr.add(subsecurityCard.substring(4*i,2+4*i).toString()+" "+subsecurityCard.substring(2+4*i,4+4*i).toString());
        //2) 그냥 4자리 : subarr.add(subsecurityCard.substring(4*i,4+4*i).toString());
        for(int i = 0; i<subsecurityCard.length(); i++) {
            if(i<35) {
                // StringBuffer 랑 String은 자료형이 다르기 때문에 StringBuffer에 .toString()이 필요합니다.
                // 2자리 + " " + 2자리 를 합친 문자열을 subarr라는 ArrayList에 넣어줍니다.
                subarr.add(subsecurityCard.substring(4*i,2+4*i).toString()+" "+subsecurityCard.substring(2+4*i,4+4*i).toString());
            }
        }

        // subarr(ArrayList)의 랜덤영숫자의 길이와 문자 140개는(4개씩 * 35개 ArrayList) 를 출력해봅니다.
        System.out.println(subarr.toString());
    }
}
