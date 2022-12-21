package Bank.domain.dto;

import Bank.domain.entity.Bank.BhistoryEntity;
import lombok.*;

@AllArgsConstructor@NoArgsConstructor
@Getter@Setter@ToString@Builder
public class BhistoryDto {
    int bhno; //  거래내역 순서

    int btypes; //거래유형

    long bmoney;   // 거래금액

    String bcontent; //거래내용

    String acno;
    String acno2;
    String mname;
    String mname2;

    public BhistoryDto(int bhno, String bcontent, int bmoney, int btypes, String mname, String mname2) {
        this.bhno = bhno;
        this.btypes = btypes;
        this.bmoney = bmoney;
        this.bcontent = bcontent;
        this.mname  = mname;
        this.mname2  = mname2;
    }

    public BhistoryEntity toEntity(){
        return BhistoryEntity.builder()
                .bhno(this.bhno)
                .btypes(this.btypes)
                .bmoney(this.bmoney)
                .bcontent(this.bcontent)
                .build();
    }
}
