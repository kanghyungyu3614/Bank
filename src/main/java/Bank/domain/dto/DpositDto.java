package Bank.domain.dto;

import Bank.domain.entity.Bank.DpositEntity;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class DpositDto {
    int ano;         // 계좌 번호 순서
    String acno;    // 계좌 번호[ PK ]
    Boolean acst;    // 계좌 상태
    int acpw;        // 계좌 비밀번호
    long acba;       // 계좌 통장잔고
    int mno;         // 회원번호 FK

    String bankname;
    
    public DpositEntity toEntity() {
        return DpositEntity.builder()
                .ano(this.ano)
                .acno(this.acno)
                .acst(this.acst)
                .acba(this.acba)
                .build();

    }
}
