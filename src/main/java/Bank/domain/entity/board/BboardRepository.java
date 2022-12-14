package Bank.domain.entity.board;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface BboardRepository extends JpaRepository< BboardEntity , Integer> {


    @Query(value = "select * from bboard where bno = :bno ", nativeQuery = true)
    Page<BboardEntity> findBybno(int bno, Pageable pageable) ;

}
