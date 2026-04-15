package com.springbootexample.restcontroller.controller;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springbootexample.restcontroller.dto.Board;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/return-type")
public class ReturnTypeController {

	@GetMapping("/string")
	public String returnString() {
		return "success";
	}

	//파일 응답을 보낼 때는 void + HttpServlet으로 보낸다.
	@GetMapping("/void")
	public void download(HttpServletRequest request, HttpServletResponse response) throws Exception {
		log.info("실행");

		// content-type 설정: 응답 본문의 데이터 형식
		response.setContentType("image/jpeg");

		String fileName = "포토1.jpg";
		//Http 시작행하고 헤더행에는 ISO-8859-1로만 가능하다.
		//"UTF-8" 이 부분은 java 17이상 버전부터는 필요 없지만 호완성을 위해서 붙여준다.
		// body에 있는 데이터를 브라우저가 바로 보여주지 말고 파일 다운로드를 하도록 설정
		//"Content-Disposition"
		// attachment = 이건 화면에 표시하지 말고 다운로드하라
		// inline = 브라우저가 표시 가능한 파일이면 화면에 바로 보여주려고 시도
		fileName = new String(fileName.getBytes(StandardCharsets.UTF_8), StandardCharsets.ISO_8859_1);
		response.setHeader("Content-Disposition",
			"attachment; filename=\"" + fileName + "\"");

		// 응답 본문에 데이터를 싣기(출력)
		Resource resource = new ClassPathResource("static/images/포토.jpg");
		//이런 간소화 메서드를 보내는 것을 비추천한다. (동작이 파일 전체를 읽고, 메모리를 가져와서 사용한다.)
		Files.copy(resource.getFile().toPath(), response.getOutputStream());

		//아래처럼 하자 + try-with-resource
		/*
		InputStream is = new FileInputStream("");
		OutputStream os = response.getOutputStream();

		byte[] buffer = new byte[1024];
		while (true){
			int num = is.read(buffer);
			if(num == -1)break;
			os.write(buffer, 0, num);
		}
		os.flush();
		is.close();
		os.close();
		*/
	}

	@GetMapping("/respne-entity")
	public ResponseEntity<Board> responseEntity() {
		Board board = new Board();

		//커스텀 헤더 추가
		HttpHeaders headers = new HttpHeaders();
		headers.add("my-head", "my-value");

		return ResponseEntity
			.status(HttpStatus.OK)
			.headers(headers)
			.body(board);
	}

}
