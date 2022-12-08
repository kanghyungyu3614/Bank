package Bank.domain.dto;

import Bank.domain.entity.member.BmemberEntity;
import lombok.*;

import java.util.Map;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class OauthDto {
    private String mname;    //  회원이름
    private String mphone;        // 	회원전화번호
    private String msno;        //  회원주민번호
    private String madress;    // 	회원 주소
    private String memail;
    private String mid;        //  회원아이디
    private String mpw;     //  회원비밀번호
    private String registrationId;// oauth 회사명
    private Map<String, Object> attributes;// 인증 결과
    private String oauth2UserInfo;// 회원정보 키

    public static OauthDto of(
            String registrationId,
            String oauth2UserInfo,
            Map<String, Object> attributes) {
        if (registrationId.equals("kakao")) {
            return ofkakao(registrationId, oauth2UserInfo, attributes);
        } else if (registrationId.equals("naver")) {
            return ofnaver(registrationId, oauth2UserInfo, attributes);
        } else if (registrationId.equals("google")) {
            return ofgoogle(registrationId, oauth2UserInfo, attributes);
        } else {
            return null;
        }
    }

    //카카오
    public static OauthDto ofkakao(String registrationId, String oauth2UserInfo, Map<String, Object> attributes) {
        Map<String, Object> kakao_account = (Map<String, Object>) attributes.get(oauth2UserInfo);
        Map<String, Object> profile = (Map<String, Object>) kakao_account.get("profile");

        return OauthDto.builder()
                .mid((String) kakao_account.get("email"))
                .mname((String) kakao_account.get("nickname"))
                .registrationId(registrationId)
                .oauth2UserInfo(oauth2UserInfo)
                .attributes(attributes)
                .build();
    }
    //네이버
    public static OauthDto ofnaver(String registrationId, String oauth2UserInfo, Map<String, Object> attributes) {
        Map<String, Object> response = (Map<String, Object>) attributes.get("oauth2UserInfo");

        return OauthDto.builder()
                .mid((String) response.get("email"))
                .mname((String) response.get("nickname"))
                .registrationId(registrationId)
                .oauth2UserInfo(oauth2UserInfo)
                .attributes(attributes)
                .build();
    }

    public static OauthDto ofgoogle(String registrationId, String oauth2UserInfo, Map<String, Object> attributes) {
        System.out.println("Google attributes :"+attributes );

        return OauthDto.builder()
                .mid((String) attributes.get("email"))
                .mname((String) attributes.get("name"))
                .registrationId(registrationId)
                .oauth2UserInfo(oauth2UserInfo)
                .attributes(attributes)
                .build();
    }
    public BmemberEntity toEntity(){
        return BmemberEntity.builder()
                .memail(this.memail)
                .mrole("SNS_"+registrationId)
                .build();
    }
} // Class end
