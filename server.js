// server.js
const express = require('express');  // express 모듈을 가져옵니다.
const app = express();               // express 애플리케이션 객체를 생성합니다.
const port = 3000;                   // 서버가 수신할 포트를 3000번으로 설정합니다.

app.get('/', (req, res) => {         // '/' 엔드포인트에 GET 요청이 들어왔을 때 실행될 함수입니다.
    const headers = req.headers;     // 요청 헤더 객체를 가져옵니다.
    let headerSize = 0;

    // 모든 헤더의 키와 값의 길이를 합산하여 헤더 크기를 계산합니다.
    for (const key in headers) {
        if (headers.hasOwnProperty(key)) {
            headerSize += key.length + headers[key].length + 4;  // 키와 값의 길이 + ': ' + 줄바꿈
        }
    }

    console.log(`Total Header Size: ${headerSize} bytes`);       // 서버에 헤더 크기를 출력합니다.
    res.send(`Header Size: ${headerSize} bytes`);                // 클라이언트에 헤더 크기를 응답합니다.
});

app.listen(port, () => {              // 서버를 지정한 포트에서 실행합니다.
    console.log(`Server listening on port ${port}`);
});
