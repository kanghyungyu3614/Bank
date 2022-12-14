package Bank.domain.dto;

import Bank.domain.entity.Bank.BsecurityEntity;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class BsecurityDto  {
    int sno; // 보안번호 생성 순서
    // 강현규 2022-12-07 메인보안 번호 타입 int에서 String으로 수정
    String smno; // 메인 보안 번호
    String ssno; // 서브 보안 번호
    String acno; // FK (계좌번호)

    public BsecurityEntity toEntity(){
        return BsecurityEntity.builder()
                .sno(this.sno)
                .smno(this.smno)
                .ssno(this.ssno)
                .build();
    }
}
