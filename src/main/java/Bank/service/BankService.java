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

  /*  @Autowired
    private  BhistoryEntity bhistoryEntity;*/
    @Autowired // 스프링 컨테이너 [ 메모리 ] 위임
    private HttpServletRequest request;
    @Autowired
    private HttpServletResponse response;

    // ------------------------------- 전역 객체 -------------------------------//

    @Transactional
    public boolean memberaccount(String ainput, String bank) {
        System.out.println(ainput);
        DpositEntity dpositEntity =  dpositRepository.findbyAcno(ainput);
        System.out.println(dpositEntity);
     if(dpositEntity.getAcno()!=null){
         return true;
     }else{
         return  false;
         }
    }
    /*-------------------------계좌 송금--------------------------------------*/

    @Transactional
    public  boolean paysend(String payinsert , String account ,int type) {
        System.out.println(payinsert);
        System.out.println(account);
        System.out.println(type);
        int  bhistoryEntity1 =  bhistoryRepository.insertbyaccount(payinsert, account, type);
        if(bhistoryEntity1!= 0){return  true;}
        else{return false;}

    }

    /*-----------------------------*/

    @Transactional
    public List<BhistoryDto>dealview(){
            List<BhistoryEntity>list = bhistoryRepository.myhistory();
            List<BhistoryDto>bhdistoryDtos = new ArrayList<>();
        System.out.println("list");
        for(int i = 0 ; i< list.size() ; i++){
            bhdistoryDtos.add(list.get(i).toDto());
        }
        System.out.println(bhdistoryDtos);
        System.out.println("list");
            return bhdistoryDtos;

    }



    @Transactional
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
    @Transactional
    public String getSecurityCardPassword(DpositDto dpositDto) {

        // dpositDto를 받아와서
        // 1. 엔티티 전부 가져오기
        System.out.println("request.getSession().getAttribute(loginMno)");
        System.out.println(request.getSession().getAttribute("loginMno"));
        List<DpositEntity> entityList = dpositRepository.findByGetacno(Integer.parseInt(String.valueOf(request.getSession().getAttribute("loginMno"))));
        System.out.println("entityList를 출력해보겠습니다.");
        System.out.println(entityList);

        // 2. 입력받은 데이터와 엔티티 일치값 찾기
        //String entity = "3E2YQdaJ76qQ20U4d99KT4vIb1Gu6lhT3";
        int pwd = Integer.parseInt(dpositDto.getAcpw()); //String 타입의 비밀번호를 int로 변환해야 한다.
        String num = "";
        num = Long.toHexString(pwd+7);
        System.out.println(num); // 비밀번호 toHexString 되어서 출력 => 4d9 // 아스키코드 된 값 : 4d9

        String result = null; // 아스키코드 더한값 전역 선언
        for(int i=0; i<num.length(); i++) {
            System.out.println("num  내용입니다. ");
            if(i+2<num.length()) {
                System.out.println(num.charAt(i));
                System.out.println(num.charAt(i+1));
                System.out.println(num.charAt(i+2));
                result = String.valueOf(num.charAt(i) + num.charAt(i+1) + num.charAt(i+2));
                System.out.println(result); // 아스키코드를 10진수로 바꾼값을 전부 더한값
            }
        }

            // 원래 있던거
            String entityPwd = String.valueOf(entityList.get(0).getAcpw());
            List<String> pwdList = new ArrayList<>();
            String resulttrue = null;
            //String DBpwd = "3E2YQdaJ76qQ20U4d99KT4vIb1Gu6lhT3";
            for(int i=0; i<entityPwd.length(); i++) {
                if(i+2<entityPwd.length()){
                    System.out.println("DBpwd  내용입니다. ");
                    System.out.println(entityPwd.charAt(i));
                    System.out.println(entityPwd.charAt(i+1));
                    System.out.println(entityPwd.charAt(i+2));
                    pwdList.add(String.valueOf(entityPwd.charAt(i) + entityPwd.charAt(i+1) + entityPwd.charAt(i+2)));
                    System.out.println(pwdList.get(i));
                }
            }

            boolean idture = false;
            for(int j=0; j<pwdList.size(); j++) {
                if(pwdList.get(j).equals(result)) {
                    request.getSession().setAttribute("ano", String.valueOf(entityList.get(0).getAno()));
                    System.out.println("true");
                    return "1";// 비밀번호가 있습니다.
                }
            }
        System.out.println("false");
        return "2"; //비밀번호가 없습니다.
    }
    @Transactional
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

    // 거래내역 비밀번호 입력 페이지
    @Transactional
    public String ReportPassword(DpositDto dpositDto) {

        // 1. 세션으로 통장 엔티티 찾기
        System.out.println("request.getSession().getAttribute(loginMno)");
        System.out.println(request.getSession().getAttribute("loginMno"));
        List<DpositEntity> entityList = dpositRepository.findByGetacno(Integer.parseInt(String.valueOf(request.getSession().getAttribute("loginMno"))));
        System.out.println("entityList를 출력해보겠습니다.");
        System.out.println(entityList);
        System.out.println("entityList 를 가져왔습니다.");

        // 2. 입력받은 데이터와 엔티티 일치값 찾기
        //String entity = "3E2YQdaJ76qQ20U4d99KT4vIb1Gu6lhT3";
        int pwd = Integer.parseInt(dpositDto.getAcpw()); //String 타입의 비밀번호를 int로 변환해야 한다.
        String num = "";
        num = Long.toHexString(pwd+7);
        System.out.println(num); // 비밀번호 toHexString 되어서 출력 => 4d9 // 아스키코드 된 값 : 4d9

        String result = null; // 아스키코드 더한값 전역 선언
        for(int i=0; i<num.length(); i++) {
            System.out.println("num  내용입니다. ");
            if(i+2<num.length()) {
                System.out.println(num.charAt(i));
                System.out.println(num.charAt(i+1));
                System.out.println(num.charAt(i+2));
                result = String.valueOf(num.charAt(i) + num.charAt(i+1) + num.charAt(i+2));
                System.out.println(result); // 아스키코드를 10진수로 바꾼값을 전부 더한값
            }
        }

        // 원래 있던거
        String entityPwd = String.valueOf(entityList.get(0).getAcpw());
        List<String> pwdList = new ArrayList<>();
        String resulttrue = null;
        //String DBpwd = "3E2YQdaJ76qQ20U4d99KT4vIb1Gu6lhT3";
        for(int i=0; i<entityPwd.length(); i++) {
            if(i+2<entityPwd.length()){
                System.out.println("DBpwd  내용입니다. ");
                System.out.println(entityPwd.charAt(i));
                System.out.println(entityPwd.charAt(i+1));
                System.out.println(entityPwd.charAt(i+2));
                pwdList.add(String.valueOf(entityPwd.charAt(i) + entityPwd.charAt(i+1) + entityPwd.charAt(i+2)));
                System.out.println(pwdList.get(i));
            }
        }

        boolean idture = false;
        for(int j=0; j<pwdList.size(); j++) {
            if(pwdList.get(j).equals(result)) {
                request.getSession().setAttribute("ano", String.valueOf(entityList.get(0).getAno()));
                System.out.println("true");
                return "1";// 비밀번호가 있습니다.
            }
        }
        System.out.println("false");
        return "2"; //비밀번호가 없습니다.
    }





    // 2022-12-20 강현규 페이징처리
    // 2. 게시물 목록 조회
    @Transactional      // bcno : 카테고리번호 , page : 현재 페이지번호 , key : 검색필드명 , keyword : 검색 데이터
    public PageDto boardlist(PageDto pageDto) {
        System.out.println("pageDto");
        System.out.println(pageDto);
        System.out.println("pageDto");
        // 페이징처리 정보를 받아온다.
        Pageable pageable = PageRequest.of(pageDto.getPage() - 1, 5 );

        // 페이지 번호 에 따른 db에서 정보필터를 해줄 변수를 설정해준다.
        int StartBtnNumber = pageDto.getStartbtn()*5-4;
        int FinalBtnNumber = pageDto.getStartbtn()*5-1;
        String getkey = pageDto.getKey();
        String getkeyword = pageDto.getKeyword();
        // 키와 값을 따로 리스트로 묶는다.
        List<Map<Object,Object>> resultList = bhistoryRepository.findBySearch(getkey, getkeyword);

        // 담아줄 List를 만든다.
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
            historyDtoList.add(new BhistoryDto(  Integer.parseInt(String.valueOf(r.get("bhno")))  , String.valueOf(r.get("bcontent"))  ,  Integer.parseInt(String.valueOf(r.get("bmoney")))  ,  Integer.parseInt(String.valueOf(r.get("btypes")))  ,  String.valueOf(r.get("mname"))  ,  String.valueOf(r.get("mname2")),"null","null"));
            // 궁금한거 1.룸북 적용? 안됨 ㅠ
            // 2.몰랐던거 Integer.parseInt(String.valueOf(r.get("bhno"))) 이건 되고
            // Integer.parseInt((String)(r.get("bhno")) 이건 안된다.
            // 3. 197번줄의 List<Map<Object,Object>> resultList = bhistoryRepository.findBySearch();
            // 를 Map<String,String> 으로 하면 안되나요??
            System.out.println("historyDtoList 시작 ");
            System.out.println(historyDtoList);
            System.out.println("historyDtoList 끝");
        });
        pageDto.setBhistorylist(historyDtoList);  // 결과 리스트 담기
        pageDto.setTotalBoards((long)historyDtoList.size());
        pageDto.setStartbtn(pageDto.getPage()*5-5);
        pageDto.setEndbtn(pageDto.getPage()*5-1);
        return pageDto;
    }


    //보안카드 따오기
    @Transactional
    public List<BsecurityDto>getsecurityCardnumlist(BsecurityDto dto){

        List<BsecurityEntity>list = bsecurityRepository.findbySecurityNumberEntity(dto.getAcno());

        List<BsecurityDto>dtoList = new ArrayList<>();
        for(BsecurityEntity entity : list){
            dtoList.add(entity.toDto());
        }

        return dtoList;
    }

    // 거래내역 저장하기
    @Transactional
    public int sendHistory(BhistoryDto dto){
        System.out.println("Integer.parseInt(String.valueOf(request.getSession().getAttribute(loginMno)))");
        System.out.println(Integer.parseInt(String.valueOf(request.getSession().getAttribute("loginMno"))));
        System.out.println("Integer.parseInt(String.valueOf(request.getSession().getAttribute(loginMno)))");
        String acno = dpositRepository.findByGetacno(Integer.parseInt(String.valueOf(request.getSession().getAttribute("loginMno")))).get(0).getAcno();
        System.out.println("dto");
        System.out.println(dto);
        System.out.println("dto");
        dto.setAcno(acno);
        int insertNumber = bhistoryRepository.sendHistorymoney(dto.getBtypes(),dto.getBmoney(),dto.getBcontent(),dto.getAcno(),dto.getAcno2());
        return 1;
    }

    // 거래내역 프론트로 보내기
    public List<BhistoryDto> giveHistory(BhistoryDto dto){
        System.out.println("Integer.parseInt(String.valueOf(request.getSession().getAttribute(loginMno)))");
        System.out.println(Integer.parseInt(String.valueOf(request.getSession().getAttribute("loginMno"))));
        System.out.println("Integer.parseInt(String.valueOf(request.getSession().getAttribute(loginMno)))");
        String acno = dpositRepository.findByGetacno(Integer.parseInt(String.valueOf(request.getSession().getAttribute("loginMno")))).get(0).getAcno();
        System.out.println("dto");
        dto.setAcno(acno);
        System.out.println(dto);
        System.out.println("dto");
        List<BhistoryDto> dtoList = new ArrayList<>();
        List<BhistoryEntity> findhistory = bhistoryRepository.findDealHistory(dto.getAcno(),dto.getCdate());

        for(BhistoryEntity entity : findhistory){
            dtoList.add(entity.toDto());
        }

        System.out.println("dtoList");
        System.out.println(dtoList);
        System.out.println("dtoList");
        return dtoList;
    }

}
























