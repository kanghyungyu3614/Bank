package Bank.domain.entity.Bank;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DpositRepository extends JpaRepository<DpositEntity,Integer> {
    // 1. 보안카드번호검색
    @Query( value = "select * from dposit where ano = :ano" , nativeQuery = true )
    List<DpositEntity> findAcno(int ano);

}
