package Bank.domain.dto;

import Bank.domain.entity.BaseEntity;
import Bank.domain.entity.member.BmemberEntity;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class BmemberDto{
    int mno   ;               // 회원번호  [PK]
    String mname;  	//  회원이름
    String mphone;		// 	회원전화번호
    String msno;		//  회원주민번호
    String madress ;	// 	회원 주소
    String mid;		//  회원아이디
    String mpw;		//  회원비밀번호

   public BmemberEntity toEntity(){
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
