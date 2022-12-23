package Bank.domain.dto;

import Bank.domain.entity.board.BboardEntity;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@NoArgsConstructor
@Getter@Setter
@ToString @Builder
public class BboardDto {

    private int bno;
    private String btitle;
    private String bcontent;

    private MultipartFile bfile;     // [업로드 ] 첨부파일

    private String bfilename;  // [ 호출용 ] 첨부파일

    private int bview;

    private String bdate;


    private int mno;

    private String mid;		//  회원아이디

    private int page;  // 현재 페이지




    private int startbtn;    // 페이징 버튼 시작 번호
    private int endbtn;   // 페이징 버튼  끝 번호
    private Long totalBoards; // 총 게시물 수


    public BboardEntity toEntity() {
        return BboardEntity.builder()
                .bno(this.bno)
                .btitle(this.btitle)
                .bcontent(this.bcontent)
                .bview(this.bview)
                .build();


    }

}
