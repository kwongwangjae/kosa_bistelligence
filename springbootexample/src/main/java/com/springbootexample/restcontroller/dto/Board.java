package com.springbootexample.restcontroller.dto;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Board {
	private Integer bno;
	private String btitle;
	private String bcontent;
	private String bwriter;
	private Date bdate;
	private int bhitcount;

	private MultipartFile battach; //업로드된 파일을 받을 때
	private String battachoname; //MultipartFile에서 원래 파일 이름을 추출해서 저장
	private String battachsname; // 서버 파일 시스템에 저장헐 때 사용할 파일 이름
	private String battachtype; //파일의 타입(image/jpeg, image/png)

	private byte[] battachdata; //업로드된 파일 데이터


}
