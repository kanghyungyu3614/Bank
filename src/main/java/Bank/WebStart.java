package Bank;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

// p.11
@SpringBootApplication // 스프링 웹 위한 기본 설정 어노테이션
@EnableJpaAuditing // JPA 감시 [ 생성 , 변경 ]  P.242
public class WebStart {
    public static void main(String[] args) {  // main 스레드
        SpringApplication.run( WebStart.class  );
        // 스프링 어플리케이션 실행[ 현재클래스명.class ]
    }
}
