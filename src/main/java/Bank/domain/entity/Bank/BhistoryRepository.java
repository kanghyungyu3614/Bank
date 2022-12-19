package Bank.domain.entity.Bank;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BhistoryRepository extends JpaRepository<BhistoryEntity,Integer> {
    @Query(value = "select * from bhistory " +
            "where  "+
            "IF( :key = '' , true  , IF( :key = 'btypes' , btypes like %:keyword% ,IF( :key = 'acno' , acno like %:keyword% ,IF( :key = 'acno2' , acno2 like %:keyword% ,IF( :key = 'bmoney' , bmoney like %:keyword% , true)))) ) "
            , nativeQuery = true ) //   nativeQuery 실제 해당 SQL 질의어 사용 뜻
    Page<BhistoryEntity> findBySearch (String key , String keyword , Pageable pageable);
}
