package Bank.domain.entity.Bank;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DpositRepository extends JpaRepository<DpositEntity,String> {
    // 1.  보안카드번호검색
    @Query( value = "select * from dposit where ano = :ano" , nativeQuery = true )
    List<DpositEntity> findAcno(int ano);

    // 2. 통장번호로 테이블찾기
    @Query(value = "select * from dposit where acno = :acno" ,nativeQuery = true)
    DpositEntity findbyAcno(String acno);


    // 3.  보안카드번호검색
    @Query( value = "select * from dposit where mno = :memberNameNumber" , nativeQuery = true )
    List<DpositEntity> findByGetacno(int memberNameNumber);


}
