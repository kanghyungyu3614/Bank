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
    int sno; // 보안번호 생성 순서
    @Column(nullable = false,length = 15)
    int smno; // 메인 보안 번호
    @Column(nullable = false,length = 160)
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
