package Bank.domain.entity.board;


import lombok.*;

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

}
