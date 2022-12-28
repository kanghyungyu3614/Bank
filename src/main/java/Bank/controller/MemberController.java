package Bank.controller;

import Bank.domain.dto.BmemberDto;
import Bank.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired // 스프링 컨테이너 빈 생성 [ 외부에 메모리 위임  ]
    private MemberService memberService; // 서비스 객체 생성
    /* 1.회원가입 */
    @PostMapping("/signup")
    public boolean signup(BmemberDto bmemberDto) {
        System.out.println("확인하라잉");
        System.out.println(bmemberDto);
        return memberService.signup(bmemberDto);
    }

    /* 2.로그인 */ /*2022-12-27 강현규 로그인 */
    @PostMapping("/getmember") // 2.로그인 기능 [ 시큐리티 사용시 필요없음 ]
    public int getmember( @RequestBody BmemberDto memberDto ){
        int result = memberService.getmember( memberDto );
        System.out.println(result);
        return result;
    }
    @GetMapping("/checkmember")
    public boolean checkmember(@RequestParam("mid") String mid){
        System.out.println("확인용");
        System.out.println(mid);
        boolean result = memberService.checkmember(mid);
        System.out.println("아이디 체크 결과");
        System.out.println(result);
        return result;
    }

    /* 로그아웃 */ /*2022-12-27 강현규 로그아웃 */
    @GetMapping("/logout")
    public void logout(){
        memberService.logout();
    }

    /*로그인 정보 확인*/ /*2022-12-27 강현규 로그인 정보 확인 */
    @GetMapping("/getloginMno")
    public String getloginMno(){
        String result = memberService.getloginMno();
        System.out.println(result);
        return result;
    }

}















