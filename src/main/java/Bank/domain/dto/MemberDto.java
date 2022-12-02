package Bank.domain.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@ToString @Builder
public class MemberDto {

    private int mno;
    private String mname;
    private String mphone;

}
