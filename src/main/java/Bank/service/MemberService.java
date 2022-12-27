package Bank.service;

import Bank.domain.dto.BmemberDto;
import Bank.domain.entity.member.BmemberEntity;
import Bank.domain.entity.member.BmemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.io.IOException;
import java.util.List;

@Service
public class MemberService {

    @Autowired
    private  BmemberRepository bmemberRepository;
    @Autowired
    private HttpServletRequest request;
    @Autowired
    private HttpServletResponse response;

    /* 1. 회원가입 */
    @Transactional
    public boolean signup(BmemberDto bmemberDto){
        System.out.println("check+++");
        System.out.println(bmemberDto);
        if(bmemberDto==null){
            return false;
        }
        else {
            return true;
        }
    }

    /* 2. 로그인 */
    @Transactional
    public int getmember(BmemberDto bmemberDto ){
        // 1. Dao 처리 [ select ]
            // 1. 모든 엔티티=레코드 호출 [ select * from member ]
        List<BmemberEntity> entityList = bmemberRepository.findAll();
            // 2. 입력받은 데이터와 일치값 찾기
        System.out.println("entityList");
        System.out.println(entityList);
        System.out.println("entityList");
        for( BmemberEntity entity : entityList ){ // 리스트 반복
            if( entity.getMid().equals(bmemberDto.getMid())){ // 엔티티=레코드 의 이메일 과 입력받은 이메일
                if( entity.getMpw().equals(bmemberDto.getMpw())){ // 엔티티=레코드 의 패스워드 와 입력받은 패스워드
                    // 세션 부여 [ 로그인 성공시 'loginMno'이름으로 회원번호 세션 저장  ]
                    System.out.println("entity");
                    System.out.println(entity);
                    System.out.println("entity");
                    request.getSession().setAttribute("loginMno" , entity.getMno() );// 엔티티 = 레코드 = 로그인 성공한객체
                    if(entity.getMname().equals("admin")){
                        request.getSession().setAttribute("loginName","admin");
                    }
                    System.out.println("loginName : admin");
                    System.out.println(request.getSession().getAttribute("loginName"));
                    System.out.println("loginName : admin");
                    return 1;// 로그인 성공했다.
                }else{
                    return 2; // 패스워드 틀림 [ 전제조건 : 아이디중복 없다는 전제조건 ]
                }
            }
        }
        return 0; // 아이디가 틀림
    }

    // 3. 로그아웃 [ http 세션 ]
    @Transactional
    public void logout(){
       // 기본 세션명의 세션데이터를 null
        request.getSession().setAttribute("loginMno" , null );
        request.getSession().setAttribute("loginName" , null );
        try {
            response.sendRedirect("/");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    // 4. 로그인 여부 판단 메소드
    public String getloginMno(){
        // 1. loginMno
        if(request.getSession().getAttribute("loginMno") != null){
            if(request.getSession().getAttribute("loginName") == "admin"){
                return "adminLogin";
            }
            return "userLogin";
        }
        else{
            return "loginFail.";
        }
    }
}
