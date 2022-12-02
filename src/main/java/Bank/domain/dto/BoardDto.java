package Bank.domain.dto;


import lombok.*;

@NoArgsConstructor @AllArgsConstructor
@Getter @Setter
@ToString @Builder
public class BoardDto {

    private int bno;
    private String btitle;
    private String bcontent;


}
