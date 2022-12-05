package Bank.controller;

import Bank.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bank")
public class BoardController {

    /*----------------------- 페이징 처리---------------*/

    @GetMapping("/board")
    public Resource getboard(){
        return new ClassPathResource("templates/board.html");
      }

    @GetMapping("/write")
    public Resource getwrite(){
        return new ClassPathResource("templates/write.html");
    }

    @Autowired
    private BoardService boardService = new BoardService();


    //*--------------요청과 응답처리 ------------------------*//

   // @PostMapping("/setboard")
   /// public boolean setboard( BoardDto boardDto ){
    //    return boardService.setboard( boardDto);
  //  }





}
