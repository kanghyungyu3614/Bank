package Bank.service;

import Bank.domain.dto.BsecurityDto;
import Bank.domain.dto.DpositDto;
import Bank.domain.entity.Bank.BsecurityEntity;
import Bank.domain.entity.Bank.BsecurityRepository;
import Bank.domain.entity.Bank.DpositEntity;
import Bank.domain.entity.Bank.DpositRepository;
import Bank.domain.entity.member.BmemberEntity;
import Bank.domain.entity.member.BmemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// sub난수를 활용하기 위해 ArrayList를 가져옵니다. 즉, 보안카드 난수140개를 담을 ArrayList자료형이 필요합니다.
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
//자바 유틸에서 랜덤을 불러온다.
import java.util.List;
import java.util.Random;
// 강현규 2022-12-07 보안카드 난수 만들기 코드생성
// 강현규 2022-12-09 보안카드 난수 만들기 수정
//=> 수정내용 : 난수를 db에 저장할때는 숫자형 문자열로 저장하고 스크립트에서 출력할때 필터링함.
@Service
public class BankService {

    // ------------------------------- 전역 객체 -------------------------------//
    @Autowired
    private BmemberRepository bmemberRepository;      //리포지토리 객체
    @Autowired
    private DpositRepository dpositRepository;      //리포지토리 객체
    @Autowired
    private BsecurityRepository bsecurityRepository; //리포지토리 객체


    @Autowired // 스프링 컨테이너 [ 메모리 ] 위임
    private HttpServletRequest request;
    @Autowired
    private HttpServletResponse response;



    // ------------------------------- 전역 객체 -------------------------------//
    /*강현규 2022-12-07 계좌 비밀번호를 입력했을때 보안카드 페이지로 이동하는 내용*/
    public String getSecurityCardPassword(DpositDto dpositDto) {

        // dpositDto를 받아와서
        // 1. 엔티티 전부 가져오기
        List<DpositEntity> entityList = dpositRepository.findAll();
        System.out.println("entityList");
        System.out.println(entityList);
        // 2. 입력받은 데이터와 엔티티 일치값 찾기
        for (DpositEntity entity : entityList) { // 리스트 반복
            if (entity.getAcpw() == dpositDto.getAcpw()) { // 엔티티=레코드 의 비밀번호 과 입력받은 비밀번호
                // 세션 부여 [ 로그인 성공시 'loginMno'이름으로 회원번호 세션 저장  ]
                request.getSession().setAttribute("acno", entity.getAcno());
                // 엔티티 = 레코드 = 로그인 성공한객체
                return "1";// 비밀번호가 있습니다.
            }
        }
        return "2"; //비밀번호가 없습니다.
    }

    public List<BsecurityDto> getSecurityCardNumber() {
        String acnumber = (String) request.getSession().getAttribute("acno");
        System.out.println("acnumber");
        System.out.println(acnumber);
        // 계좌번호 acnumber 3521071 가 가져와졌다.
        if (acnumber != null) {
            List<BsecurityEntity> elist = bsecurityRepository.findbySecurityNumberEntity(acnumber);
            System.out.println("elist");
            System.out.println(elist);

            List<BsecurityDto> dlist = new ArrayList<>(); // 2. 컨트롤에게 전달할때 형변환[ entity->dto ] : 역할이 달라서
            for (BsecurityEntity entity : elist) { // 3. 변환
                dlist.add(entity.toDto());
            }
            System.out.println("MemberService dlist.toString() 값은");
            System.out.println(dlist.toString());
            return dlist;  // 4. 변환된 리스트 dist 반환
        } else {
            try {
                response.sendRedirect("/");
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            return null;
        }
    }
    //예금주 확인하기
    public boolean memberaccount(String data){

        System.out.println(data);

        return  false;
    }



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
        // StringBuffer 랑 String은 자료형이 다르기 때문에 StringBuffer에 .toString()이 필요합니다.
        // String 타입으로 바꿔서 10자리 숫자를 콘솔창에 출력하면?
        System.out.println("mainsecurityCardString는? : "+mainsecurityCardString);
        mainsecurityCardString = mainsecurityCard.toString();
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
    }




}
