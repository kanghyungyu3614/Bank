package Bank.domain.entity.Bank;

import Bank.domain.dto.BhistoryDto;
import Bank.domain.entity.BaseEntity;
import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Table(name = "bhistory")
@Entity
public class BhistoryEntity extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int bhno; //  거래내역 순서

    @Column(nullable = false)
    int btypes; //거래유형

    @Column(nullable = false)
    long bmoney;   // 거래금액

    @Column(nullable = false)
    String bcontent;   //거래내용



    @ManyToOne
    @JoinColumn(name = "acno")
    @ToString.Exclude
    private DpositEntity dpositEntity;

    @ManyToOne
    @JoinColumn(name = "acno2")
    @ToString.Exclude
    private DpositEntity dpositEntity2;
    public BhistoryDto toDto(String mname, String mname2){
        return BhistoryDto.builder()
                .bhno(this.bhno)
                .btypes(this.btypes)
                .bmoney(this.bmoney)
                .bcontent(this.bcontent)
                .acno( this.getDpositEntity().getAcno())
                .acno2( this.getDpositEntity2().getAcno() )
                .mname( mname )
                .mname2( mname2 )
                .build();
    }
}
