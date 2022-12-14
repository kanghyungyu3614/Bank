package Bank.domain.dto;

import Bank.domain.entity.Bank.BhistoryEntity;
import lombok.*;

import java.time.LocalDateTime;

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
    String udate;
    String cdate;
    public BhistoryDto(int bhno, String bcontent, int bmoney, int btypes, String mname, String mname2, String udate, String cdate) {
        this.bhno = bhno;
        this.bcontent = bcontent;
        this.bmoney = bmoney;
        this.btypes = btypes;
        this.mname = mname;
        this.mname2 = mname2;
        this.udate = udate;
        this.cdate = cdate;
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
