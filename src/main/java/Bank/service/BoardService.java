package Bank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Service
public class BoardService {

    //*--------------1. 전역변수 ------------------------*//
    @Autowired
    private HttpServletRequest request; // 요청객체선언

    @Autowired
    private HttpServletResponse response; // 응답 객체 선언


    //*--------------2. 서비스 ------------------------*//




}
