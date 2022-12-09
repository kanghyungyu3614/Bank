package Bank.controller;


import Bank.domain.dto.BmemberDto;
import Bank.domain.dto.DpositDto;
import Bank.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired // 스프링 컨테이너 빈 생성 [ 외부에 메모리 위임 ]
    private MemberService memberService; // 서비스 객체 생성


    @PostMapping("/securityCard/password") // 3.보안카드 만들어 주기
    public String getpassword(@RequestBody DpositDto dpositDto){
        String result = memberService.getSecurityCard(dpositDto);
        return result;
    }
    @PostMapping("/bankmember")
    public boolean bankmember(@RequestBody BmemberDto bmemberDto){
//        boolean result = bankService.bankmember(bmemberDto);
        return false;
    }
}

