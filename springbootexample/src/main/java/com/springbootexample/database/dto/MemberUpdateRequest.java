package com.springbootexample.database.dto;

import lombok.Data;

@Data
public class MemberUpdateRequest {
	private String mname;
	private String mpassword;
	private String memail;
	private Boolean menabled;
	private String mrole;
}
