package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletResponse;

@RestController
public class MyController {

    @GetMapping("/test")
    public String test(HttpServletResponse response) {
        // 8192 바이트 크기의 큰 헤더 추가
        response.setHeader("X-Large-Header", "a".repeat(8192));
        return "Check the headers!";
    }
}
