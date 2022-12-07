package Bank.service;

import Bank.domain.dto.DpositDto;
import Bank.domain.entity.Bank.DpositEntity;
import Bank.domain.entity.Bank.DpositRepository;
import Bank.domain.entity.member.BmemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class MemberService {

    @Autowired
    private BmemberRepository bmemberRepository;      //리포지토리 객체
    @Autowired
    private DpositRepository dpositRepository;      //리포지토리 객체
    @Autowired // 스프링 컨테이너 [ 메모리 ] 위임
    private HttpServletRequest request ;


    public String getSecurityCard(DpositDto dpositDto){

        // dpositDto를 받아와서
        // 1. DTO에서 수정할 PK번호 이용해서 엔티티 찾기
        Optional<DpositEntity> optional = dpositRepository.findById( dpositDto.getAcpw() );
        if( optional.isPresent() ) {  // 2.
            DpositEntity boardEntity = optional.get();




            return null;
        }

        return null;
    }
}