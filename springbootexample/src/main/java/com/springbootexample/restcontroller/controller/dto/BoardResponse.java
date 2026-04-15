package com.springbootexample.restcontroller.controller.dto;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * WRITE_ONLY 즉, 요청 받기만 할 것을 사용하라
 * READ_ONLY는 쓰지마라
 * 사실상 response, request로 dto를 분리하는게 좋다.
 * */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardResponse {
	private Integer bno;
	private String btitle;
	private String bcontent;
	private String bwriter;
	private Date bdate;
	private int bhitcount;

	//Request(0), Response(x) - 응답에서 제외
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private MultipartFile battach;

	//Request(x), Response(o) - 요청에서 제외
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	private String battachoname;

	private String battachsname;
	private String battachtype;

	private byte[] battachdata;

}
