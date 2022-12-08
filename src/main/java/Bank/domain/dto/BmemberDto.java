package Bank.domain.dto;

import Bank.domain.entity.BaseEntity;
import Bank.domain.entity.member.BmemberEntity;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Collection;
import java.util.Map;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class BmemberDto  implements UserDetails, OAuth2User {
    int mno   ;               // 회원번호  [PK]
    private String mname;  	//  회원이름
    private String mphone;		// 	회원전화번호
    private String msno;		//  회원주민번호
    private String madress ;	// 	회원 주소
    private String memail;
    private String mid;		//  회원아이디
    private String mpw;		//  회원비밀번호
    private Set<GrantedAuthority> authorities; // 인증권한 [토큰]
    private Map<String,Object> attributes;

   public BmemberEntity toEntity(){
        return BmemberEntity.builder()
                .mno(this.mno)
                .mname(this.mname)
                .mphone(this.mphone)
                .msno(this.msno)
                .madress(this.madress)
                .memail(this.memail)
                .mid(this.mid)
                .mpw(this.mpw)
                .build();
   }

    @Override
    public <A> A getAttribute(String name) {
        return OAuth2User.super.getAttribute(name);
    }

    @Override
    public Map<String, Object> getAttributes() {
        return null;
    }

    @Override
    public String getName() {
        return null;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
    public void setAuthorities(Set<GrantedAuthority> authorities) {
        this.authorities = authorities;
    }
}
