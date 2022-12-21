package Bank.service;

import Bank.domain.dto.BhistoryDto;
import Bank.domain.dto.BsecurityDto;
import Bank.domain.dto.DpositDto;
import Bank.domain.dto.PageDto;
import Bank.domain.entity.Bank.*;
import Bank.domain.entity.member.BmemberEntity;
import Bank.domain.entity.member.BmemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.io.IOException;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

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
    @Autowired
    private BhistoryRepository bhistoryRepository; //리포지토리 객체
    @Autowired // 스프링 컨테이너 [ 메모리 ] 위임
    private HttpServletRequest request;
    @Autowired
    private HttpServletResponse response;

    // ------------------------------- 전역 객체 -------------------------------//

    @Transactional
    public boolean memberaccount(String ainput, String bank) {
        System.out.println(ainput);
      /*  DpositEntity dpositEntity = dpositRepository.findAcno(ainput);
        if(dpositEntity.getAcno() != null){
                return  true;
        }else{
            return  false;
        }*/
        return false;
    }

    public static void main(String[] args) {
        // 난수를 만들기 위해 랜덤class를 가져옵니다.
        Random random = new Random();
        // 보안카드숫자를 담을 빈문자열을 만들겠습니다.
        String mainsecurityCardString = "";

        // 1번 : 보안카드 위에 번호 10개 만들기위해 길이를 정해줍니다. //
        int mainlength = 10;
        System.out.println("length : " + mainlength);
        // StringBuffer는 문자열을 추가하거나 변경 할 때 주로 사용하는 자료형입니다.
        // 주의 : string이랑 다른 자료형입니다.
        // mainsecurityCard 라는 StringBuffer타입의 변수를 만들겠습니다. 이게 위의 보안카드 번호 10자리 입니다.
        StringBuffer mainsecurityCard = new StringBuffer();
        System.out.println("처음에 빈문자생성 : " + mainsecurityCard);
        // 이제 난수를 만들겁니다.
        for (int i = 0; i < mainlength; i++) {
            //문자형 숫자(0부터9까지)는 아스키코드의 48 ~ 58까지 범위입니다.
            mainsecurityCard.append((char) ((int) random.nextInt(10) + 48));
        }
        // StringBuffer 랑 String은 자료형이 다르기 때문에 StringBuffer에 .toString()이 필요합니다.
        // String 타입으로 바꿔서 10자리 숫자를 콘솔창에 출력하면?
        System.out.println("mainsecurityCardString는? : " + mainsecurityCardString);
        mainsecurityCardString = mainsecurityCard.toString();
        System.out.println("mainsecurityCardString는? : " + mainsecurityCardString);
        // 이렇게 나옵니다.


        // 2번 : 보안카드 밑에 번호 140개 만들기 //
        // 보안카드 번호 140개의 길이를 지정해줍니다.
        int sublength = 140;
        System.out.println("length : " + sublength);
        // StringBuffer는 문자열을 추가하거나 변경 할 때 주로 사용하는 자료형입니다.
        StringBuffer subsecurityCard = new StringBuffer();
        System.out.println("처음에 빈문자생성 : " + subsecurityCard);
        // 마찬가지로 140개의 난수를 만들 for문을 만들어줍니다.
        for (int i = 0; i < sublength; i++) {
            //문자형 숫자(0부터9까지)는 48 ~ 58까지 범위다.
            subsecurityCard.append((char) ((int) random.nextInt(10) + 48));
        }
        // 랜덤영숫자의 길이와 문자는
        System.out.println("newWord = (" + subsecurityCard + "), length = " + sublength);
    }

    /*강현규 2022-12-07 계좌 비밀번호를 입력했을때 보안카드 페이지로 이동하는 내용*/
    public String getSecurityCardPassword(DpositDto dpositDto) {

        // dpositDto를 받아와서
        // 1. 엔티티 전부 가져오기
        List<DpositEntity> entityList = dpositRepository.findAll();
        System.out.println("entityList를 출력해보겠습니다.");
        System.out.println(entityList);
        // 2. 입력받은 데이터와 엔티티 일치값 찾기
        for (DpositEntity entity : entityList) { // 리스트 반복
            if (entity.getAcpw() == dpositDto.getAcpw()) { // 엔티티=레코드 의 비밀번호 과 입력받은 비밀번호
                System.out.println("entity");
                System.out.println(entity);
                System.out.println("entity");
                System.out.println("entity.getAno()");
                System.out.println(entity.getAno());
                // 세션 부여 [ 로그인 성공시 'loginMno'이름으로 회원번호 세션 저장  ]
                request.getSession().setAttribute("ano", String.valueOf(entity.getAno()));
                // 엔티티 = 레코드 = 로그인 성공한객체
                return "1";// 비밀번호가 있습니다.
            }
        }
        return "2"; //비밀번호가 없습니다.
    }

    public List<BsecurityDto> getSecurityCardNumber() {
        // 계좌순서(숫자)를 일단 문자열로 세션으로 가져온다.
        String ano = (String) request.getSession().getAttribute("ano");
        System.out.println("ano");
        System.out.println(ano);
        // 계좌순서 번호 1,2,3,4,5....가 가져와졌다.
        if (ano != null) {
            List<DpositEntity> dpolist = dpositRepository.findAcno(Integer.parseInt(ano)); // ano로 계좌번호를 가져와야 한다.
            System.out.println("dpolist.get(0).getAcno()");
            System.out.println(dpolist.get(0).getAcno());
            System.out.println("dpolist.get(0).getAcno()");
            System.out.println("dpolist.get(Integer.parseInt(ano)-1).getAcno()");
            System.out.println("dpolist");
            System.out.println(dpolist);
            System.out.println("dpolist");
            List<BsecurityEntity> elist = bsecurityRepository.findbySecurityNumberEntity(dpolist.get(0).getAcno());
            System.out.println("elist");
            System.out.println(elist);

            List<BsecurityDto> dlist = new ArrayList<>(); // 2. 컨트롤에게 전달할때 형변환[ entity->dto ] : 역할이 달라서
            for (BsecurityEntity entity : elist) { // 3. 변환
                dlist.add(entity.toDto());
            }
            System.out.println("MemberService dlist 값은?");
            System.out.println(dlist);
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

    public String ReportPassword(DpositDto dpositDto) {

        // dpositDto를 받아와서
        // 1. 엔티티 전부 가져오기
        List<DpositEntity> entityList = dpositRepository.findAll();
        System.out.println("entityList 를 가져왔습니다.");
        System.out.println(entityList);
        // 2. 입력받은 데이터와 엔티티 일치값 찾기
        for (DpositEntity entity : entityList) { // 리스트 반복
            if (entity.getAcpw() == dpositDto.getAcpw()) { // 엔티티=레코드 의 비밀번호 과 입력받은 비밀번호
                // 세션 부여 [ 로그인 성공시 'loginMno'이름으로 회원번호 세션 저장  ]
                request.getSession().setAttribute("ano", entity.getAno());
                System.out.println("entity 를 가져왔습니다.");
                System.out.println(entity);
                // 엔티티 = 레코드 = 로그인 성공한객체
                return "1";// 비밀번호가 있습니다.
            }
        }
        return "2"; //비밀번호가 없습니다.
    }





    // 2022-12-20 강현규 mname, mname2 유효성검사중
    // 2. 게시물 목록 조회
    @Transactional      // bcno : 카테고리번호 , page : 현재 페이지번호 , key : 검색필드명 , keyword : 검색 데이터
    public PageDto boardlist(PageDto pageDto) {


        Pageable pageable = PageRequest.of(pageDto.getPage() - 1, 5 );

        List<Map<Object,Object>> resultList = bhistoryRepository.findBySearch();
        // 키와 값을 따로 리스트로 묶는다.
        List<BhistoryEntity> historyDtoEntity = new ArrayList<BhistoryEntity>();
        List<BhistoryDto> historyDtoList = new ArrayList<BhistoryDto>();

        resultList.forEach( (r) -> { // 모든 레코드 들을 반복 [  r = 레코드 = 맵  ]
            List<Object> keyAllValue = new ArrayList<Object>();
            List<Object> ArrayListValue = new ArrayList<Object>();
            System.out.println("----------------- 레코드 교체 ---------------------");
            System.out.println(" 레코드정보: " + r);
            r.keySet().forEach( (key) -> {  //  keySet() : 모든 키 호출해서  키 만큼 반복문 = 해당 레코드의 필드수만큼 반복문
                System.out.println( "key 값은 무엇일까요? : " + key ); // 필드명
                System.out.println( "value 값은 무엇일까요? : " + r.get(key) ); // 필드명의 값
            });
            historyDtoList.add(new BhistoryDto(  Integer.parseInt((String)r.get("bhno"))  , (String)r.get("bcontent")  ,  Integer.parseInt((String)r.get("bmoney"))  ,  Integer.parseInt((String)r.get("btypes"))  ,  (String) r.get("mname")  ,  (String)r.get("mname2")));
            System.out.println("historyDtoList 시작 ");
            System.out.println(historyDtoList);
            System.out.println("historyDtoList 끝");
        });




        return null;
    }
}
























