package Bank.controller;

import Bank.domain.dto.BboardDto;
import Bank.domain.entity.board.BboardRepository;
import Bank.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class BoardController {


    @Autowired
    private BoardService boardService = new BoardService();
    @Autowired
    private BboardRepository bboardRepository;


    //*--------------요청과 응답처리 ------------------------ *//

    @PostMapping("/bwrite")  // 게시물 쓰기
     public boolean bwrite(BboardDto boardDto ){
                     System.out.println("응답처리" + boardDto);
        System.out.println( boardDto.toString());

       return boardService.bwrite( boardDto );
    }

   @GetMapping("/blist")  //게시물 전체 조회 및  페이징 처리
    public List<BboardDto> blist(@RequestParam ("page") int page){

        return boardService.blist( page );
    }


    @GetMapping("/bdetail") // 게시물 개별 조회
    public BboardDto bdetail(@RequestParam("bno") int bno){

        return boardService.bdetail( bno);
    }


    @DeleteMapping("/delboard")
    public boolean bdlete  (int bno){
        return boardService.bdelete( bno);
    }


    @PutMapping("/bupdate")
     public boolean bupdate( BboardDto boardDto){
        return boardService.bupdate( boardDto );
    }


    @GetMapping("/count")
    public void viewcount (@RequestParam("bno") int bno) {

        boardService.viewcount(bno);  }

    @GetMapping("/filedownload")
    public void filedownload( @RequestParam("filename") String filename ){
        boardService.filedownload( filename );
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
