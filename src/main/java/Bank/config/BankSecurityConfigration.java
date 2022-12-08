package Bank.config;

import Bank.domain.entity.BaseEntity;
import Bank.service.BankService;
import Bank.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

public class BankSecurityConfigration extends WebSecurityConfigurerAdapter{

    @Autowired
    MemberService memberService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/member/logout"))
                .logoutSuccessUrl("/")
                .invalidateHttpSession(true)
                .and()
                .csrf()
                .ignoringAntMatchers("/member/getmember")
                .ignoringAntMatchers("/member/setmember")
                .and()
                .oauth2Login()
                .defaultSuccessUrl("/")
                .userInfoEndpoint()
                .userService(memberService);

    }
}
