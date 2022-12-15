package Bank.service;

import Bank.domain.dto.BsecurityDto;
import Bank.domain.dto.DpositDto;
import Bank.domain.entity.Bank.BsecurityEntity;
import Bank.domain.entity.Bank.BsecurityRepository;
import Bank.domain.entity.Bank.DpositEntity;
import Bank.domain.entity.Bank.DpositRepository;
import Bank.domain.entity.member.BmemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class MemberService {

    @Autowired
    private  BmemberRepository bmemberRepository;
    @Autowired
    private HttpServletRequest request;


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


}
