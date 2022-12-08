package Bank.controller;


import Bank.domain.dto.BmemberDto;
import Bank.domain.dto.DpositDto;
import Bank.service.BankService;
import Bank.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired
    MemberService memberService;


    @PostMapping("/bankmember")
    public boolean bankmember(@RequestBody BmemberDto bmemberDto){
//        boolean result = bankService.bankmember(bmemberDto);
        return false;
    }

}

