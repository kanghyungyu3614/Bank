package Bank.service;

import Bank.SHA256.SHA269;
import Bank.domain.dto.BmemberDto;
import Bank.domain.entity.member.BmemberEntity;
import Bank.domain.entity.member.BmemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

import javax.management.modelmbean.XMLParseException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;

@Service
public class MemberService {

    @Autowired
    private BmemberRepository bmemberRepository;
    @Autowired
    private HttpServletRequest request;
    @Autowired
    private HttpServletResponse response;


    public static String encrypt(String str) throws NoSuchAlgorithmException {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] hash = digest.digest(str.getBytes(StandardCharsets.UTF_8));

        return bytesToHex(hash);
    }

    private static String bytesToHex(byte[] hash) {
        StringBuffer stringBuffer = new StringBuffer();
        for (int i = 0; i < hash.length; i++) {
            String hex = Integer.toHexString(0xff & hash[i]);
            if(hex.length() == 1) {
                stringBuffer.append('0');
            }
            stringBuffer.append(hex);
        }
        return stringBuffer.toString();
    }


    /* 1. 회원가입 */
    @Transactional
    public boolean signup(BmemberDto bmemberDto) {
        System.out.println("check+++");
        System.out.println(bmemberDto); /*DTO확인*/

        String Result = null;

        String adress = bmemberDto.getMadressc() + bmemberDto.getMadress(); // 주소값 합치기
        bmemberDto.setMadress(adress);// 합쳐진 주소 셋팅
        SHA269 SHA256 = new SHA269();
        try {
           Result=SHA256.encrypt(bmemberDto.getMpw());
        }catch (Exception e){
            System.out.println(e);
        }
        System.out.println("확인");
        System.out.println(Result);
        return  false;
   /*     bmemberDto.setMpw(Result); // 변경된 비밀번호로 셋팅

        System.out.println(bmemberDto.getMpw());
        boolean IDcheck= bmemberRepository.findBymid(bmemberDto.getMid()).isPresent();
        System.out.println("결과");
        if(IDcheck==false) {
           BmemberEntity bmemberEntity = bmemberRepository.save(bmemberDto.toEntity());
            return true;
        } else {
            return false;
        }*/
    }
    /* 중복검사 */
    @Transactional
    public boolean checkmember(String mid){
        return false;
    }
    /* 2. 로그인 */
    @Transactional
    public int getmember(BmemberDto bmemberDto) {
        // 1. Dao 처리 [ select ]
        // 1. 모든 엔티티=레코드 호출 [ select * from member ]
        List<BmemberEntity> entityList = bmemberRepository.findAll();
        // 2. 입력받은 데이터와 일치값 찾기
        for (BmemberEntity entity : entityList) { // 리스트 반복
            if (entity.getMid().equals(bmemberDto.getMid())) { // 엔티티=레코드 의 이메일 과 입력받은 이메일

                // 아이디를 맞추고 비밀번호를 맞추는거기 때문에 똑같은 엔티티에서 결정된다.
                // 2. 입력받은 데이터와 엔티티 일치값 찾기
                //String entity = "3E2YQdaJ76qQ20U4d99KT4vIb1Gu6lhT3";
                int pwd = Integer.parseInt(bmemberDto.getMpw()); //String 타입의 비밀번호를 int로 변환해야 한다.
                String num = "";
                num = Long.toHexString(pwd + 7);
                System.out.println(num); // 비밀번호 toHexString 되어서 출력 => 4d9 // 아스키코드 된 값 : 4d9

                String result = null; // 아스키코드 더한값 전역 선언
                for (int i = 0; i < num.length(); i++) {
                    System.out.println("num  내용입니다. ");
                    if (i + 2 < num.length()) {
                        System.out.println(num.charAt(i));
                        System.out.println(num.charAt(i + 1));
                        System.out.println(num.charAt(i + 2));
                        result = String.valueOf(num.charAt(i) + num.charAt(i + 1) + num.charAt(i + 2));
                        System.out.println(result); // 아스키코드를 10진수로 바꾼값을 전부 더한값
                    }
                }

                // 원래 있던거
                String entityPwd = String.valueOf(entity.getMpw());
                List<String> pwdList = new ArrayList<>();
                String resulttrue = null;
                //String DBpwd = "3E2YQdaJ76qQ20U4d99KT4vIb1Gu6lhT3";
                for (int i = 0; i < entityPwd.length(); i++) {
                    if (i + 2 < entityPwd.length()) { // i+2 가 db비밀번호문자열길이보다 작게
                        System.out.println("DBpwd  내용입니다. ");
                        System.out.println(entityPwd.charAt(i));
                        System.out.println(entityPwd.charAt(i + 1));
                        System.out.println(entityPwd.charAt(i + 2));
                        pwdList.add(String.valueOf(entityPwd.charAt(i) + entityPwd.charAt(i + 1) + entityPwd.charAt(i + 2)));
                        System.out.println(pwdList.get(i));
                    }
                }

                boolean idture = false;
                for (int j = 0; j < pwdList.size(); j++) {
                    if (pwdList.get(j).equals(result)) {
                        request.getSession().setAttribute("loginMno", String.valueOf(entity.getMno()));
                        System.out.println("true");
                        if (entity.getMname().equals("admin")) {
                            request.getSession().setAttribute("loginName", "admin");
                        }
                        System.out.println("loginName : admin");
                        System.out.println(request.getSession().getAttribute("loginName"));
                        System.out.println("loginName : admin");
                        return 1;// 비밀번호가 있습니다.
                    }
                }
                System.out.println("false");
                return 2; //비밀번호가 없습니다.
            }
        }
        return 0; // 아이디가 틀림
    }

    // 3. 로그아웃 [ http 세션 ]
    @Transactional
    public void logout() {
        // 기본 세션명의 세션데이터를 null
        request.getSession().setAttribute("loginMno", null);
        request.getSession().setAttribute("loginName", null);
        try {
            response.sendRedirect("/");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    // 4. 로그인 여부 판단 메소드
    public String getloginMno() {
        // 1. loginMno
        if (request.getSession().getAttribute("loginMno") != null) {
            if (request.getSession().getAttribute("loginName") == "admin") {
                return "adminLogin";
            }
            return "userLogin";
        } else {
            return "loginFail.";
        }
    }
}
