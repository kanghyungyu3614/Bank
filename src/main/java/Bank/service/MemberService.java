package Bank.service;

import Bank.domain.dto.BmemberDto;
import Bank.domain.dto.OauthDto;
import Bank.domain.entity.member.BmemberEntity;
import Bank.domain.entity.member.BmemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class MemberService
        implements UserDetailsService, OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    @Autowired
    private  BmemberRepository bmemberRepository;
    @Autowired
    private HttpServletRequest request;


    public MemberService(BmemberRepository bmemberRepository) {
        this.bmemberRepository = bmemberRepository;
    }

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {

        OAuth2UserService oAuth2UserService =new DefaultOAuth2UserService();
        OAuth2User oAuth2User = oAuth2UserService.loadUser(userRequest);
        System.out.println("Oauth확인용 ;; "+oAuth2User.toString());

        String registrationId = userRequest.getClientRegistration().getRegistrationId();
        System.out.println("oauth2 회사명 : " + registrationId.toString());

        String oauth2UserInfo=
                userRequest
                        .getClientRegistration()
                        .getProviderDetails()
                        .getUserInfoEndpoint()
                        .getUserNameAttributeName();
        System.out.println("oauth2 회원정보  담긴 객체 : " + oauth2UserInfo);

        OauthDto oauthDto = OauthDto.of(registrationId,oauth2UserInfo,oAuth2User.getAttributes());

        Optional<BmemberEntity> optional = bmemberRepository.findByMemail(oauthDto.getMemail());

        BmemberEntity bmemberEntity=null;

        if(optional.isPresent()){
            bmemberEntity=optional.get();
        }else {
            bmemberEntity=bmemberRepository.save(oauthDto.toEntity());
        }

        Set<GrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority(bmemberEntity.getMrole()));

        BmemberDto bmemberDto = new BmemberDto();
        bmemberDto.setMemail(bmemberEntity.getMemail());
        bmemberDto.setAuthorities(authorities);
        return bmemberDto;
    }

    @Override
    public UserDetails loadUserByUsername(String mid) throws UsernameNotFoundException {

        BmemberEntity bmemberEntity = bmemberRepository.findByMemail(mid)
                .orElseThrow(()->new UsernameNotFoundException("사용자가 존재하지 않습니다."));


        Set<GrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority(bmemberEntity.getMrole()));

        BmemberDto bmemberDto = bmemberEntity.toDto();
        bmemberDto.setAuthorities(authorities);
        return bmemberDto;
    }
}
