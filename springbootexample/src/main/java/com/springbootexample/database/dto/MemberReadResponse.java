package com.springbootexample.database.dto;

import lombok.Data;

@Data
public class MemberReadResponse {
	private String mid;
	private String mname;
	private String memail;
	private boolean menabled;
	private String mrole;
}
