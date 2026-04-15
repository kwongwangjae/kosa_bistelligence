package com.springbootexample.database.dto;

import lombok.Data;

@Data
public class MemberJoinResponse {
	private String mid;
	private String mname;
	private String memail;
	private boolean menaled;
	private String mrole;
}
