package Bank.domain.dto;

import Bank.domain.entity.BaseEntity;
import Bank.domain.entity.board.BboardEntity;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter@Setter@ToString@Builder
public class BboardDto {

    private int bno;
    private String btitle;
    private String bcontent;

    private String bfile;

    private String bdate;

    private int bview;

    private int mno;


    public BboardEntity toEntity() {
        return BboardEntity.builder()
                .bno(this.bno)
                .btitle(this.btitle)
                .bcontent(this.bcontent)
                .bview(this.bview)
                .build();


    }


}
