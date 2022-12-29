package Bank.controller;

import Bank.domain.dto.BhistoryDto;
import Bank.domain.dto.BsecurityDto;
import Bank.domain.dto.DpositDto;
import Bank.domain.dto.PageDto;
import Bank.service.BankService;
import Bank.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/bank")
public class BankConroller {

    // ------------------------------- 전역 객체 -------------------------------//
    @Autowired // 스프링 컨테이너 빈 생성 [ 외부에 메모리 위임 ]
    private MemberService memberService; // 서비스 객체 생성

    @Autowired // 스프링 컨테이너 빈 생성 [ 외부에 메모리 위임 ]
    private BankService bankService;// 서비스 객체 생성







    @PostMapping("/securityCard/Password") // 1.보안카드 계좌비밀번호 입력 페이지
    public String SecurityGetPassword(@RequestBody DpositDto dpositDto){
        System.out.println("dpositDto");
        System.out.println(dpositDto);
        String result = bankService.getSecurityCardPassword(dpositDto);
        return result;
    }

    @GetMapping("/securityCard") // 2.보안카드 번호 출력 페이지
    public List<BsecurityDto> bsecurityList (){
        System.out.println("/securityCard");
        List<BsecurityDto> result = bankService.getSecurityCardNumber();
        System.out.println("result");
        System.out.println(result);
        return result;
    }



    @PostMapping("/dealReport/password") // 3.거래내역 계좌비밀번호 입력 페이지
    public String DealReportGetPassword(@RequestBody DpositDto dpositDto){
        System.out.println("dpositDto");
        System.out.println(dpositDto);
        String result = bankService.ReportPassword(dpositDto);
        return result;
    }

    @PostMapping("/dealReport/boardlist") // 5.거래내역 페이징처리
    public PageDto DealReportGetBoardList( @RequestBody PageDto pageDto){
        System.out.println("@RequestBody PageDto pageDto 가 들어왔어요.");
        System.out.println(pageDto);
        System.out.println(pageDto.getKey());
        System.out.println(pageDto.getKeyword());
        System.out.println("@RequestBody PageDto pageDto 가 들어왔어요.");
        return bankService.boardlist( pageDto  );
    }
  /* 계좌송금페이지  여기서부터 하면 된다. */
 /*개인거래 라우터*/
 @GetMapping("/memberaccount")
    public boolean mastercheck(@RequestParam String ainput , @RequestParam String bank){
     System.out.println(ainput+"11");
     System.out.println(bank);
     boolean result = bankService.memberaccount(ainput,bank );
     return result;
 }
  /*개인송금금액*/
/*  @GetMapping("/accountinsert")
    public boolean paysend(@RequestParam(value = "pay") String payinsert , @RequestParam(value = "account") String account ,@RequestParam(value="type") int type ){
      System.out.println("accountinsert");
      System.out.println(payinsert);
      System.out.println(account);
      System.out.println(type);
      System.out.println("accountinsert");
     boolean result = bankService.paysend(payinsert , account , type);
      return result;

  }*/
    /* 거래내역 출력하기 */
    @GetMapping("/dealview")
    public List<BhistoryDto>list(){
        List<BhistoryDto> result = bankService.dealview();
      return result;
    }
    /*날짜별 거래 목록 조회*/
    @PostMapping("/dateview")
    public List<BhistoryDto>datelist(@RequestBody BhistoryDto dto){
        System.out.println(dto);
        List<BhistoryDto>result = bankService.giveHistory(dto);
        return result;
    }

    //보안카드 끌어오기
    @PostMapping("/securityCardnum")
    public List<BsecurityDto>securityCardnumlist(@RequestBody BsecurityDto dto){
      System.out.println(dto);
      List<BsecurityDto>result= bankService.getsecurityCardnumlist(dto);
        return result;
  }

  /* sendHistory*/
  @PostMapping("/sendHistory")
  public int sendHistory(@RequestBody BhistoryDto dto){
      int result= bankService.sendHistory(dto);
      return result;
  }

    /* sendcalendar*/
   /* @PostMapping("/calendar")
    public List<BhistoryDto> sendCalendar(@RequestBody BhistoryDto dto){
        System.out.println(dto);
        List<BhistoryDto> result= bankService.giveHistory(dto);
        return result;
    }*/

}