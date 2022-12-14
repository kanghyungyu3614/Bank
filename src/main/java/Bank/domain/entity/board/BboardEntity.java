package Bank.domain.entity.board;


import Bank.domain.dto.BboardDto;
import Bank.domain.entity.BaseEntity;
import Bank.domain.entity.member.BmemberEntity;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Table(name = "bboard")
@Setter
@Builder
@ToString
@Entity
public class BboardEntity extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bno;            // 게시물번호

    @Column(nullable = false, length = 30)
    private String btitle;      //게시물 제목

    @Column(nullable = false, columnDefinition = "TEXT")
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
                .bdate(this.getCdate().toLocalDate().toString().equals(LocalDateTime.now().toLocalDate().toString() ) ?
                        this.getCdate().toLocalTime().format(DateTimeFormatter.ofPattern(" HH : mm ")) :
                        this.getCdate().toLocalDate().toString() )
                .bview(this.bview)
                .build();
    }
}
