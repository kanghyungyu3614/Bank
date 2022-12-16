package Bank.service;


import Bank.domain.dto.BboardDto;
import Bank.domain.dto.PageDto;
import Bank.domain.entity.board.BboardEntity;
import Bank.domain.entity.board.BboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
@Service
public class BoardService {

    //*--------------1. 전역변수 ------------------------*//


    @Autowired
    private HttpServletRequest request; // 요청객체선언

    @Autowired
    private HttpServletResponse response; // 응답 객체 선언

    @Autowired  // 메모리를 자동 할당   // 변수 -> 스택  , NEW-> 힙
    private BboardRepository bboardRepository;

    String path = "C:\\Users\\504\\Desktop\\Bank\\src\\main\\resources\\static\\upload\\";


    //*--------------2. 서비스 ------------------------*//


    //  boardDto : 쓰기,수정 대상     BoardEntity:원본@Transactional
    public boolean fileupload(BboardDto boardDto, BboardEntity boardEntity) {
        System.out.println(boardDto.getBfile());
        System.out.println(boardDto.getBfile().getOriginalFilename());
        if (!boardDto.getBfile().getOriginalFilename().equals("")) { // ** 첨부파일에 이름이 없으면 등록 안함.
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
                System.out.println(" 첨부파일 업로드 실패 ");
            }
            return true;
        } else {
            return false;
        }

    }


    // 게시물 등록
    public boolean bwrite(BboardDto boardDto) {

        BboardEntity boardentity = bboardRepository.save(boardDto.toEntity());

        if (boardentity.getBno() != 0) {

            fileupload(boardDto, boardentity);
            return true;

        } else {
            return false;

        }

    }


    public List<BboardDto> blist(int page) {
      Page<BboardEntity> elist = null;

      Pageable pageable = PageRequest.of(page - 1, 3, Sort.by(Sort.Direction.DESC, "bno"));

      elist = bboardRepository.findAll(pageable);


      int btncount = 5;  // 페이지에 표시할 총 페이지 버튼 개수
      int startbtn = (page / btncount) * btncount + 1;//2. 시작번호 버튼
      int endbtn = startbtn + btncount - 1;     //3.마지막 번호 버튼
      if (endbtn > elist.getTotalPages()) endbtn = elist.getTotalPages();

      System.out.println("게시물 수 : " + elist);
      System.out.println("현재페이지수 :" + elist.getNumber());


      List<BboardDto> dlist = new ArrayList<>();
      for (BboardEntity entity : elist) {
          dlist.add(entity.toDto());

      }

      dlist.get(0).setTotalBoards( elist.getTotalElements());

      return dlist;

  }

    public BboardDto bdetail(int bno) {  //개별 조회

        Optional<BboardEntity> optional = bboardRepository.findById(bno);

        if (optional.isPresent()) {
            BboardEntity bboardentity = optional.get();  // 꺼내는게 get
            System.out.println("개인별 호출 " + bboardentity.getBno());
            return bboardentity.toDto();

        } else {
            return null;
        }
    }



    public boolean bdelete( int bno){

        Optional<BboardEntity> optional = bboardRepository.findById(bno);

        if (optional.isPresent()) {
            BboardEntity boardEntity = optional.get();

            //게시물 삭시 첨부파일 같이 삭제
            if( boardEntity.getBfile() != null ) {   // 기존 첨부파일 있을때
                File file = new File(path + boardEntity.getBfile()); // 기존 첨부파일 객체화
                if (file.exists()) {   file.delete(); }           // 존재하면  /// 파일 삭제
            }
            bboardRepository.delete(boardEntity);
            return true;
        } else { return false;}
    }


    public boolean bupdate(BboardDto boardDto) {

        Optional<BboardEntity> optional = bboardRepository.findById(boardDto.getBno());

        if (optional.isPresent()) {
            // 입력받은 수정값을  기존데이터에 추가
            BboardEntity  boardEntity = optional.get();  // optiona에서  entity 꺼내요기

               System.out.println( boardEntity);


            //1. 수정할 첨부파일이 있을때  ---> 새로운 첨부파일 업로드 ,db 수정
            if (boardDto.getBfile() != null) {
                if (boardEntity.getBfile() != null) {  // 기존 첨부파일 있을때
                    File file = new File(path + boardEntity.getBfile()); // 기존 첨부파일을 객체화
                    if (file.exists()) {  // 존재하면
                        file.delete();  //삭제
                    }
                }
                fileupload(boardDto, boardEntity);
            }

            boardEntity.setBtitle(boardDto.getBtitle());
            boardEntity.setBcontent(boardDto.getBcontent());

            System.out.println( boardDto );

            System.out.println( boardEntity );

            return true;
        } else { return false;}
    }


}







