package Bank.domain.dto;

import Bank.domain.entity.Bank.BhistoryEntity;
import Bank.domain.entity.BaseEntity;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Column;

@AllArgsConstructor@NoArgsConstructor
@Getter@Setter@ToString@Builder
public class BhistoryDto {
    int bhno; // 거래내역 순서

    int btypes; //거래유형

    long bmoney;   // 거래금액

    String bcontent; //거래내용

    public BhistoryEntity toEntity(){
        return BhistoryEntity.builder()
                .bhno(this.bhno)
                .btypes(this.btypes)
                .bmoney(this.bmoney)
                .bcontent(this.bcontent)
                .build();
    }
}
