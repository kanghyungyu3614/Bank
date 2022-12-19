package Bank.domain.entity.Bank;

import Bank.domain.dto.BsecurityDto;
import Bank.domain.entity.BaseEntity;
import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Table(name = "bsecurity")
@Entity
public class BsecurityEntity extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int sno; //  보안번호 생성 순서
    // 강현규 2022-12-07 테이블 메인번호 타입 int->String 길이도 좀 더 길게 수정,서브번호길이도 수정
    @Column(nullable = false,length = 20)
    String smno; // 메인 보안 번호
    @Column(nullable = false,length = 210)
    String ssno; // 서브 보안 번호

    @ManyToOne
    @JoinColumn(name = "acno")
    @ToString.Exclude
    private DpositEntity dpositEntity;

    public BsecurityDto toDto(){
        return BsecurityDto.builder()
                .sno(this.sno)
                .smno(this.smno)
                .ssno(this.ssno)
                .build();
    }
}
