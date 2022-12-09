package Bank.controller;

import Bank.domain.dto.BboardDto;
import Bank.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class BoardController {


    @Autowired
    private BoardService boardService = new BoardService();


    /*----------------------- 페이징 처리---------------*/

    @GetMapping("/board")  // 기본 전체 게시판
    public Resource getboard(){
        return new ClassPathResource("templates/board.html");
      }

    @GetMapping("/write")  // 글 등록
    public Resource getwrite(){
        return new ClassPathResource("templates/write.html");
    }

   @GetMapping("/bdlist") // 자세히보기
   public Resource getdlist() { return new ClassPathResource("templates/bdetail.html"); }

    @GetMapping("/bupdate")
    public Resource getupdate() { return new ClassPathResource("templates/bupdate.html");}

    //*--------------요청과 응답처리 ------------------------*//

    @PostMapping("/bwrtie")  // 게시물 쓰기
     public boolean bwrtie(BboardDto boardDto ){

        System.out.println( boardDto.toString());

       return boardService.bwrtie( boardDto );
    }

    @PostMapping("/blist")  //게시물 전체 조회 및  페이징 처리
     public List<BboardDto> blist(@RequestParam ("page") int page){

         return boardService.blist( page );
    }

    @GetMapping("/bdetail") // 게시물 개별 조회
    public BboardDto bdtail( int bno){

        return boardService.bdtail( bno);
    }


    @DeleteMapping("/bdelete")
    public boolean bdlete  (int bno){
        return boardService.bdelete( bno);
    }


    @PutMapping("/bupdate")
     public boolean bupdate( BboardDto boardDto){
        return boardService.bupdate( boardDto );
    }






/*
    @RequestMapping(value="SummerNoteImageFile" , method = RequestMethod.POST)
    public @ResponseBody JSONPObject SummerNoteImageFile(@RequestParam("file") MultipartFile file) {
        JSONobje jsonObject = pls.SummerNoteImageFile(file);
        System.out.println(jsonObject);
        return jsonObject;
    }
*/




}
