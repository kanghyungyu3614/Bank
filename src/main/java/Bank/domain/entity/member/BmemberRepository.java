package Bank.domain.entity.member;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BmemberRepository extends JpaRepository<BmemberEntity, Integer  > {

    Optional<BmemberEntity> findByMemail(String Memail);
}
