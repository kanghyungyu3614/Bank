package Bank.domain.entity.Bank;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DpositRepository extends JpaRepository<DpositEntity,String> {
    // 1.  보안카드번호검색
    @Query( value = "select * from dposit where ano = :ano" , nativeQuery = true )
    List<DpositEntity> findAcno(int ano);

    @Query(value = "select * from dposit where acno = :acno" ,nativeQuery = true)
    DpositEntity findbyAcno(String acno);

}
