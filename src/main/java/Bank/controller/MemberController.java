package Bank.controller;

import Bank.domain.dto.BmemberDto;
import Bank.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/member")
public class MemberController {

       @Autowired // 스프링 컨테이너 빈 생성 [ 외부에 메모리 위임 ]
    private MemberService memberService; // 서비스 객체 생성

    @PostMapping("/signup")
    public boolean signup(BmemberDto bmemberDto){
        System.out.println("확인하라잉");
        System.out.println(bmemberDto);
        return memberService.signup(bmemberDto);
    }
}




















}
