package Bank.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
/*강현규 2022-12-07 react 스프링 연동 스프링이 경로를 가져가서 설정을 해줘야 합니다. proxy연결때문에 필요합니다.*/
@Configuration
public class WebConfiguration extends WebMvcConfigurerAdapter {
    // WebMvcConfigurerAdapter : 스프링 mvc 설정 변경 클래스
    // 1. 스프링 아키텍처에서 사용되는 컨트롤 핸들러 뷰 경로 바꾸자.
    // 스프링 아키텍처  뷰 검색 ----> controller
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        //super.addViewControllers(registry);
        registry.addViewController("/{spring:\\w+}").setViewName("forward:/");
        registry.addViewController("/**/{spring:\\w+}").setViewName("forward:/");
        registry.addViewController("/{spring:\\w+}/**{spring:?!(\\.js|\\.css)$}").setViewName("forward:/");
    }
}
