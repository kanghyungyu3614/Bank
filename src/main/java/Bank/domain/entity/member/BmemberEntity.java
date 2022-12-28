package Bank.domain.entity.member;


import Bank.domain.dto.BmemberDto;
import Bank.domain.entity.BaseEntity;
import Bank.domain.entity.board.BboardEntity;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity // 해당 연결된 DB의 테이블과 매핑 [ 연결 ]
@Table(name = "bmember")//db에서 사용될 테이블 이름
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class BmemberEntity extends BaseEntity {
    @Id // PK
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동번호
    int mno;               // 회원번호  [PK]

    @Column(nullable = false ,length = 20)
    String mname;    //  회원이름
    @Column(nullable = false,length = 15)
    String mphone;        // 	회원전화번호
    @Column(nullable = false,length = 13)
    String msno;        //  회원주민번호
    @Column(nullable = false)
    String madress;    // 	회원 주소
    @Column(nullable = false,length = 30)
    String mid;        //  회원아이디]
    @Column(nullable = false ,length = 100)
    String mpw;        //  회원비밀번호

    @OneToMany(mappedBy ="bmemberEntity")
    @Builder.Default
    private List<BboardEntity> bboardEntityList = new ArrayList<>();

    public BmemberDto toDto() {
        return BmemberDto.builder()
                .mno(this.mno)
                .mname(this.mname)
                .mphone(this.mphone)
                .msno(this.msno)
                .madress(this.madress)
                .mid(this.mid)
                .mpw(this.mpw)
                .build();
    }
}
