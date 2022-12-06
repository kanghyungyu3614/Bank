package Bank.domain.entity.board;


import Bank.domain.dto.BoardDto;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity  // 엔티티정의
@Table(name = "Bboard")
@AllArgsConstructor @NoArgsConstructor
@Getter @Setter
@Builder @ToString
public class BoardEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  int bno;

    @Column( nullable = false )
    private  String btitle;

    @Column( nullable = false , columnDefinition = "TEXT" )
    private  String bcontent;

    @Column
    private String bfile;

    @Column
    private String bdate;

    @Column
    @ColumnDefault( "0")
    private int bview;


    public BoardDto toDto() {
         return BoardDto.builder()
                 .bno(this.bno)
                 .btitle(this.btitle)
                 .bcontent(this.bcontent)
                 .bfilename(this.bfile)
                 .bview(this.bview)
                 .build();



    }

}
