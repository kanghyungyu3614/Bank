package Bank.domain.entity.Bank;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
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
            " where sa.bhno = re.bhno AND " +
            " IF(:getkey = '' , true, " +
            " If(:getkey = 'btypes' , sa.btypes like %:getkeyword% , " +
            " If(:getkey = 'acno' , sa.mname like %:getkeyword% , " +
            " If(:getkey = 'acno2' , re.mname like %:getkeyword% , " +
            " If(:getkey = 'bmoney' , sa.bmoney like %:getkeyword% , true))))) order by bhno" , nativeQuery = true ) //   nativeQuery 실제 해당 SQL 질의어 사용 뜻
    List<Map<Object,Object> > findBySearch ( String getkey , String getkeyword);
    //"where IF(:getkey = '' , true, If(:getkey=btypes , btypes = :getkeyword , If(:getkey=acno , mname = :getkeyword , If(:getkey=acno2 , mname2 = :getkeyword , If(:getkey=bmoney , bmoney = :getkeyword , true)))))
    // Map<Object,Object> 검색된 레코드 1개
            // 키 : Object  : 필드
            // 값 : Object : 해당 필드의 값
    // List<Map<Object,Object> > : 검색된 레코드 여러개
   /* @Query(value = "insert into bhistory(cdate, udate ,bcontent,bmoney , btypes , acno ,acno2)values(now(),now(),'안녕',:payinsert,:type, '1414',:account)" , nativeQuery = true)
    @Modifying
    int insertbyaccount(String payinsert , String account, int type);
*/

    @Query(value = "select * from bhistory where acno = :acno" ,nativeQuery = true)
    List<BhistoryEntity>myhistory(String acno);


    @Query(value = "insert into bhistory(cdate, udate ,bcontent,bmoney , btypes , acno ,acno2)values(now(),now(),:bcontent,:bmoeny,:btypes,:acno,:acno2)" , nativeQuery = true)
    @Modifying
    int sendHistorymoney(int btypes,long bmoeny,String bcontent,String acno,String acno2);

    @Query(value = "select * from bhistory where acno = :acno and cdate like %:cdate%" ,nativeQuery = true)
    List<BhistoryEntity> findDealHistory (String acno,String cdate);

}
