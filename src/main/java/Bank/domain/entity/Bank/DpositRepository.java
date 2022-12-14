package Bank.domain.entity.Bank;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

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

    // 4. 통장 돈 바꿔치기
    @Query(value = "update dposit set acba = :money where acno = :acno" , nativeQuery = true)
    @Modifying
    int deleteByMoney(int money, String acno);


    @Query(value = "insert into dposit(acno,cdate, udate ,acba, acst, acpw ,ano,mno)values(:acno,now(),now(),200000,1,:acpw,null,:mno)",nativeQuery = true)
    @Modifying
    int savedposit(String acno , String acpw , int mno);


}
