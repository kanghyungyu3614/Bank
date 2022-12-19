package Bank.domain.entity.Bank;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BsecurityRepository extends JpaRepository<BsecurityEntity,Integer> {
    // 1. 기본메소드 외 메소드  추가
    // 1. .findById( pk값 ) : 해당 pk의 엔티티 하나 호출
    // 2. .findAll()       : 모든 엔티티를 호출
    // 3. [ 직접 find 만들기 ] :  .findby필드명( 조건 )     [ Optional<엔티티명> ]
    // 3                        .findby필드명( 조건 )     [ 엔티티명    ]
    // 3                        .findby필드명( 조건 )     [ List<엔티티명>    ]
    // 3.                       .findby필드명( 조건 , Pageable pageable  )     [ Page<엔티티명> ]

    // 1. @Query( value = "쿼리문작성" , nativeQuery = true )
    // SQL[쿼리문] 변수 넣기
    //  [ 인수 ] ( @Param("변수명") 자료형 변수명 )   ----------->    :변수명
    //  [ 인수 ] ( 자료형 변수명 ,자료형 변수명    )   ----------->    ?인수번호
    // @Param("변수명") 생략가능 [ jdk 8 이상 ]

//    @Query( value = "select p from board p where p.bcno = ?1")
//    Page<BoardEntity> findBybcno( int bcno ,  Pageable pageable);

    // 1. 보안카드번호검색
    @Query( value = "select * from bsecurity where acno = :acnumber" , nativeQuery = true )
    List<BsecurityEntity> findbySecurityNumberEntity(String acnumber);


}
