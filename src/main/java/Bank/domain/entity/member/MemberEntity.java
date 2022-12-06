package Bank.domain.entity.member;


import Bank.domain.dto.BoardDto;
import Bank.domain.dto.MemberDto;
import lombok.*;

import javax.persistence.*;

@Entity  // 엔티티정의
@Table(name = "Bmember")
@AllArgsConstructor @NoArgsConstructor
@Getter @Setter
@Builder @ToString
public class MemberEntity {

    @Id //  PK의 역할
    @GeneratedValue( strategy = GenerationType.IDENTITY)  // 이거 무슨 의미인지 재확인
    private int mno;

    @Column
    private String mname;

    @Column
    private String mphone;

    @Column
    private String msno;

    @Column
    private String maddress;

    @Column
    private String mid;

    @Column
    private String mpassword;


    public MemberDto toDto() {
        return MemberDto.builder()
                .mno(this.mno)
                .mname(this.mname)
                .mphone(this.mphone)
                .msno(this.msno)
                .maddress(this.maddress)
                .mid(this.mid)
                .mpassword(this.mpassword)
                .build();

    }

}
