package com.springbootexample.database.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class BoardUpdateResponse {
	private int bno;
	private String btitle;
	private String bcontent;
	private LocalDateTime bdate;
	private String bwriter;
	private int bhintcount;
	private String battachoname;
	private String battachsname;
	private String battachtype;
	private byte[] battachdata;
}
