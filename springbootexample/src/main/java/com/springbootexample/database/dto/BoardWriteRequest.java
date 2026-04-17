package com.springbootexample.database.dto;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class BoardWriteRequest {
	private String btitle;
	private String bcontent;
	@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
	private LocalDateTime bdate;
	private String bwriter;
	private Integer bhintcount;
	private MultipartFile battach;
	private String battachoname;
	private String battachsname;
	private String battachtype;
	private byte[] battachdata;
}
