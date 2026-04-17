package com.springbootexample.database.entity;

import java.time.LocalDateTime;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class Board {
	private int bno;
	private String btitle;
	private String bcontent;
	private LocalDateTime bdate;
	private String bwriter;
	private int bhintcount;

	private MultipartFile battach;
	private String battachoname;
	private String battachsname;
	private String battachtype;

	private byte[] battachdata;
}
