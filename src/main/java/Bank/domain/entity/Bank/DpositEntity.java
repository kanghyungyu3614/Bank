package Bank.domain.entity.Bank;

import Bank.domain.dto.DpositDto;
import Bank.domain.entity.BaseEntity;
import Bank.domain.entity.member.BmemberEntity;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Table(name = "dposit")
@Entity
public class DpositEntity extends BaseEntity {

    @GeneratedValue(strategy = GenerationType.IDENTITY) // 자동번호
    @Column(unique = true)  // 유니크
    int ano;         // 계좌 번호 순서

    @Id
    @Column(nullable = false, length = 15)
    String acno;    // 계좌 번호[ PK ]

    @Column
    Boolean acst;    // 계좌 상태

    @Column(nullable = false, length = 4)
    int acpw;        // 계좌 비밀번호
    @Column(nullable = false)
    @ColumnDefault("0")
    long acba;       // 계좌 통장잔고

    @ManyToOne
    @JoinColumn(name = "mno")
    @ToString.Exclude
    private BmemberEntity bmemberEntity;

    @OneToMany(mappedBy ="dpositEntity")
    @Builder.Default
    private List<BhistoryEntity> bhistoryEntityList = new ArrayList<>();

    @OneToMany(mappedBy ="dpositEntity2")
    @Builder.Default
    private List<BhistoryEntity> bhistoryEntityList2 = new ArrayList<>();


    public DpositDto toDto() {
        return DpositDto.builder()
                .ano(this.ano)
                .acno(this.acno)
                .acst(this.acst)
                .acba(this.acba)
                .build();
    }
}
