package Bank.domain.entity.member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface BmemberRepository extends JpaRepository<BmemberEntity, Integer  > {

        @Query( value = "select * from bank.bmember where mno = :mnamenumber", nativeQuery = true)
        List<BmemberEntity> findMname(int mnamenumber);
}
