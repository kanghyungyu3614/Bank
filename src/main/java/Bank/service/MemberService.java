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
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    // ------------------------------- 전역 객체 -------------------------------//
    @Autowired
    private BmemberRepository bmemberRepository;      //리포지토리 객체
    @Autowired
    private DpositRepository dpositRepository;      //리포지토리 객체
    @Autowired
    private BsecurityRepository bsecurityRepository; //리포지토리 객체
    @Autowired // 스프링 컨테이너 [ 메모리 ] 위임
    private HttpServletRequest request;
    @Autowired
    private HttpServletResponse response;

    // ------------------------------- 전역 객체 -------------------------------//
    /*강현규 2022-12-07 계좌 비밀번호를 입력했을때 보안카드 페이지로 이동하는 내용*/
    public String getSecurityCardPassword(DpositDto dpositDto) {

        // dpositDto를 받아와서
        // 1. 엔티티 전부 가져오기
        List<DpositEntity> entityList = dpositRepository.findAll();
        System.out.println("entityList");
        System.out.println(entityList);
        // 2. 입력받은 데이터와 엔티티 일치값 찾기
        for (DpositEntity entity : entityList) { // 리스트 반복
            if (entity.getAcpw() == dpositDto.getAcpw()) { // 엔티티=레코드 의 비밀번호 과 입력받은 비밀번호
                // 세션 부여 [ 로그인 성공시 'loginMno'이름으로 회원번호 세션 저장  ]
                request.getSession().setAttribute("acno", entity.getAcno());
                // 엔티티 = 레코드 = 로그인 성공한객체
                return "1";// 비밀번호가 있습니다.
            }
        }
        return "2"; //비밀번호가 없습니다.
    }

    public List<BsecurityDto> getSecurityCardNumber() {
        String acnumber = (String) request.getSession().getAttribute("acno");
        System.out.println("acnumber");
        System.out.println(acnumber);
        // 계좌번호 acnumber 3521071 가 가져와졌다.
        if (acnumber != null) {
            List<BsecurityEntity> elist = bsecurityRepository.findbySecurityNumberEntity(acnumber);
            System.out.println("elist");
            System.out.println(elist);

            List<BsecurityDto> dlist = new ArrayList<>(); // 2. 컨트롤에게 전달할때 형변환[ entity->dto ] : 역할이 달라서
            for (BsecurityEntity entity : elist) { // 3. 변환
                dlist.add(entity.toDto());
            }
            System.out.println("MemberService dlist.toString() 값은");
            System.out.println(dlist.toString());
            return dlist;  // 4. 변환된 리스트 dist 반환
        } else {
            try {
                response.sendRedirect("/");
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            return null;
        }
    }









































}