package com.springbootexample.restcontroller.controller.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardUpdateRequest {
	private Integer bno;
	private String btitle;
	private String bcontent;
	private String bwriter;
	private MultipartFile battach;
}
