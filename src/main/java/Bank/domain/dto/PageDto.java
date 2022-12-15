package Bank.domain.dto;


import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@ToString @Builder
public class PageDto {

    private int bcno;  //  카테고리
    private int page;  // 현재 페이지


    private int startbtn;    // 페이징 버튼 시작 번호
    private int endbtn;   // 페이징 버튼  끝 번호
    private Long totalBoards; // 총 게시물 수
}
