package com.springbootexample.database.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class BoardWriteRequest {
	private String btitle;
	private String bcontent;
	private LocalDateTime bdate;
	private String bwriter;
	private Integer bhintcount;
	private String battachoname;
	private String battachsname;
	private String battachtype;
	private byte[] battachdata;
}
