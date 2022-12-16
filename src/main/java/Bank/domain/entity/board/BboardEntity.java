package Bank.domain.entity.board;


import Bank.domain.dto.BboardDto;
import Bank.domain.entity.member.BmemberEntity;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Table(name = "bboard")
@Setter
@Builder
@ToString
@Entity
public class BboardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bno;            // 게시물번호

    @Column(nullable = false, length = 30)
    private String btitle;      //게시물 제목

    @Column
    private String bcontent;    // 게시물 내용

    @Column
    private String bfile;       // 첨부파일

    @Column
    @ColumnDefault("0")
    private int bview;

    @ManyToOne
    @JoinColumn(name = "mno")
    @ToString.Exclude
    private BmemberEntity bmemberEntity;


    public BboardDto toDto() {
        return BboardDto.builder()
                .bno(this.bno)
                .btitle(this.btitle)
                .bcontent(this.bcontent)
                .bfilename(this.bfile)
                .bview(this.bview)
                .build();
    }
}
