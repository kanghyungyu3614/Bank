package Bank.service;

import Bank.domain.dto.BoardDto;
import Bank.domain.entity.board.BoardEntity;
import Bank.domain.entity.board.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class BoardService {

    //*--------------1. 전역변수 ------------------------*//


    @Autowired
    private HttpServletRequest request; // 요청객체선언

    @Autowired
    private HttpServletResponse response; // 응답 객체 선언

    @Autowired  // 메모리를 자동 할당   // 변수 -> 스택  , NEW-> 힙
    private BoardRepository boardRepository;

    String path = "C:\\Users\\504\\Desktop\\Bank\\src\\main\\resources\\static\\upload\\";


    //*--------------2. 서비스 ------------------------*//


       //  boardDto : 쓰기,수정 대상     BoardEntity:원본@Transactional
    public boolean fileupload(BoardDto boardDto, BoardEntity boardEntity) {

        if (boardDto.getBfile() != null) { // ** 첨부파일 있을때
            // * 업로드 된 파일의 이름 [ 문제점 : 파일명 중복 ]
            String uuid = UUID.randomUUID().toString(); // 1. 난수생성
            String filename = uuid + "_" + boardDto.getBfile().getOriginalFilename(); // 2. 난수+파일명
            // * 첨부파일명 db 에 등록
            boardEntity.setBfile(filename); // 해당 파일명 엔티티에 저장 // 3. 난수+파일명 엔티티 에 저장

            // * 첨부파일 업로드 // 3. 저장할 경로 [ 전역변수 ]

            try {
                File uploadfile = new File(path + filename);  // 4. 경로+파일명 [ 객체화 ]
                boardDto.getBfile().transferTo(uploadfile);   // 5. 해당 객체 경로 로 업로드
            } catch (Exception e) {
                System.out.println( " 첨부파일 업로드 실패 ");
            }
            return true;
        }else{return false;}

    }


    public boolean bwrtie(BoardDto boardDto) {

        BoardEntity boardentity = boardRepository.save(boardDto.toEntity());

        if(boardentity.getBno() != 0) {

            fileupload( boardDto, boardentity);
            return true;

    }else{return false;

        }

    }



        public List<BoardDto> blist( ) {
            List<BoardEntity> elist = boardRepository.findAll();
            List<BoardDto> dlist = new ArrayList<>();
            for ( BoardEntity entity : elist){
                dlist.add(entity.toDto());
            }
            return dlist;
        }


    }




