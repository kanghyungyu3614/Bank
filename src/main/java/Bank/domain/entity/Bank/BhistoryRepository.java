package Bank.domain.entity.Bank;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface BhistoryRepository extends JpaRepository<BhistoryEntity,Integer> {
    @Query(value = "select " +
            "    sa.bhno , " +
            "    sa.cdate, " +
            "    sa.bcontent ,  " +
            "    sa.bmoney , " +
            "    sa.btypes , " +
            "    sa.mname mname ,  " +
            "    re.mname mname2 " +
            " FROM " +
            " (SELECT   b.bhno ,  b.cdate, b.bcontent ,  b.bmoney , b.btypes , m.mname FROM bank.bhistory b , bank.bmember m , bank.dposit d where m.mno = d.mno and d.acno = b.acno ) sa , " +
            " (SELECT b.bhno , b.cdate,  b.bcontent , b.bmoney , b.btypes , m.mname FROM bank.bhistory b , bank.bmember m , bank.dposit d where m.mno = d.mno and d.acno = b.acno2 )  re " +
            " where sa.bhno = re.bhno order by bhno" , nativeQuery = true ) //   nativeQuery 실제 해당 SQL 질의어 사용 뜻
    List<Map<Object,Object> > findBySearch (  );
        // Map<Object,Object> 검색된 레코드 1개
            // 키 : Object  : 필드
            // 값 : Object : 해당 필드의 값
    // List<Map<Object,Object> > : 검색된 레코드 여러개


}
