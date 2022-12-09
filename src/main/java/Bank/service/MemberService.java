package Bank.service;

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


}
