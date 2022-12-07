package Bank.controller;


import Bank.domain.dto.DpositDto;
import Bank.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.*;
/* 강현규 2022-12-07 react와 spring의 연동을 위해서 필요한 파일입니다. 이거랑 src폴더를 나가서 최상단에 build.gradle파일이 바뀌었을겁니다. */
import javax.annotation.Resource;
import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired // 스프링 컨테이너 빈 생성 [ 외부에 메모리 위임 ]
    private MemberService memberService; // 서비스 객체 생성
    /*@GetMapping("")
    public Resource getMainpage(){
        return new ClassPathResource("");
    }*/

    @PostMapping("/securityCard/Password") // 3.보안카드 계좌비밀번호 입력 페이지
    public String getpassword(@RequestBody DpositDto dpositDto){
        //String result = memberService.getSecurityCard(dpositDto);
        return "result";
    }
}

