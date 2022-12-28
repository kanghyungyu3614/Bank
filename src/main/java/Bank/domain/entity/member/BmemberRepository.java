package Bank.domain.entity.member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface BmemberRepository extends JpaRepository<BmemberEntity, Integer  > {

        @Query( value = "select * from bank.bmember where mno = :mnamenumber", nativeQuery = true)
        List<BmemberEntity> findMname(int mnamenumber);

        // 2022-12-20 강현규 mname 이 유사한 행들 찾기 : acno는 비슷한 이름 글자이다.
        @Query( value = "select * from bank.bmember " +
                "where " +
                "IF( :mname = '', true, mname like %:mname% )",
                nativeQuery = true)
        List<BmemberEntity> findPageMname(String mname);

        @Query(value = "select*From bank.bmember where mid=:mid",nativeQuery = true)
        Optional<BmemberEntity> findBymid(String mid);
}
