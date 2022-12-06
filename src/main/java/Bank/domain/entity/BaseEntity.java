package Bank.domain.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@Setter // 롬복
@MappedSuperclass // 상속받을 경우 자식 클래스에게 매핑 정보를 전달합니다.
@EntityListeners(AuditingEntityListener.class)
public class BaseEntity {
    @CreatedDate // 생성 날짜 주입
    @Column(updatable = false) // 수정 불가
    private LocalDateTime cdate;

    @LastModifiedDate // 수정 날짜 주입
    private  LocalDateTime udate;
}
