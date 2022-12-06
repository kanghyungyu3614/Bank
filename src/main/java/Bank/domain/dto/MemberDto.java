package Bank.domain.dto;

import Bank.domain.entity.board.BoardEntity;
import Bank.domain.entity.member.MemberEntity;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@ToString @Builder
public class MemberDto {

    private int mno;
    private String mname;
    private String mphone;
    private String msno;
    private String maddress;
    private String mid;
    private String mpassword;

    public MemberEntity toEntity() {
        return MemberEntity.builder()
                .mno(this.mno)
                .mname(this.mname)
                .mphone(this.mphone)
                .msno(this.msno)
                .build();
    }

}
