package Bank.controller;

import Bank.domain.dto.BboardDto;
import Bank.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class BoardController {


    @Autowired
    private BoardService boardService = new BoardService();


    /*----------------------- 페이징 처리---------------*/

    @GetMapping("/board")
    public Resource getboard(){
        return new ClassPathResource("templates/board.html");
      }

    @GetMapping("/write")
    public Resource getwrite(){
        return new ClassPathResource("templates/write.html");
    }



    //*--------------요청과 응답처리 ------------------------*//


    @PostMapping("/bwrtie")  // 게시물 쓰기
     public boolean bwrtie(BboardDto boardDto ){

        System.out.println( boardDto.toString());

       return boardService.bwrtie( boardDto );
    }

    @GetMapping("/blist")  //전체 조희
     public List<BboardDto>blist(BboardDto boardDto ){
         return boardService.blist( );
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
