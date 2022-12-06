package Bank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Optional;

//@Service
public class MemberService {

/*    @Autowired
    private MemberRepository memberRepository;      //리포지토리 객체
    @Autowired // 스프링 컨테이너 [ 메모리 ] 위임
    private HttpServletRequest request ;
    public String getSecurityCard(){
        // 1. 로그인 정보 확인[ 세션 = loginMno ]
        Object object = request.getSession().getAttribute("loginMno");
        if( object == null ) { return null; }
        // 2. 로그인된 회원번호
        int mno = (Integer)object;
        // 3. 회원번호 --> 회원정보 호출
        Optional<MemberEntity> optional =  memberRepository.findById(mno);
        if( !optional.isPresent() ){ return null; }

        return null;
    }*/
}