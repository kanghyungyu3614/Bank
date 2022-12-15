package Bank.domain.dto;

import Bank.domain.entity.board.BboardEntity;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@NoArgsConstructor
@Getter@Setter@ToString@Builder
public class BboardDto {

    private int bno;
    private String btitle;
    private String bcontent;

    private MultipartFile bfile;     // [업로드 ] 첨부파일

    private String bfilename;  // [ 호출용 ] 첨부파일


    private int bview;

    private int mno;

    private int startbtn;
    private int endbtn;


    public BboardEntity toEntity() {
        return BboardEntity.builder()
                .bno(this.bno)
                .btitle(this.btitle)
                .bcontent(this.bcontent)
                .bview(this.bview)
                .build();


    }


}
