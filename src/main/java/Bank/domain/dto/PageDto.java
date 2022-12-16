package Bank.domain.dto;
/*강현규 2022-12-13 페이징처리 Dto 추가 */
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor @AllArgsConstructor
@Getter @Setter @ToString
@Builder
public class PageDto {

    private int page ;      // 현재 페이지
    private String key;     // 검색 필드
    private String keyword; // 검색 단어
    @Builder.Default // 빌더 사용시 현재 객체가 기본적으로 할당
    private List<BhistoryDto> bhistorylist = new ArrayList<BhistoryDto>();    // 검색된 결과 게시물 리스트
    // 여기있는거를 최종적으로 만들고 싶은 Dto 테이블이라 생각해야한다.
    private int startbtn;       // 페이징 버튼 시작번호
    private int endbtn;         // 페이징 버튼 끝번호
    private Long totalBoards;   // 총 게시물수 // .getTotalElements() 메소드가 반환타입 LONG
}