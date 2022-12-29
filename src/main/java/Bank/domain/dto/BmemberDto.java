package Bank.domain.dto;

import Bank.domain.entity.member.BmemberEntity;
import lombok.*;

import java.util.Collection;
import java.util.Map;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class BmemberDto  {
    int mno;               // 회원번호  [PK]
    private String mname;    //  회원이름
    private String mphone;        // 	회원전화번호
    private String msno;        //  회원주민번호
    private String madress;    // 	회원 주소
    private String madressc;
    private String mid;        //  회원아이디
    private String mpw;        //  회원비밀번호
    private String acpw;        //계좌비번

    public BmemberEntity toEntity() {
        return BmemberEntity.builder()
                .mno(this.mno)
                .mname(this.mname)
                .mphone(this.mphone)
                .msno(this.msno)
                .madress(this.madress)
                .mid(this.mid)
                .mpw(this.mpw)
                .build();
    }
}
