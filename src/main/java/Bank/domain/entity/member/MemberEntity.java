package Bank.domain.entity.member;


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


}
