package com.springbootexample.database.dto;

import lombok.Data;

@Data
public class MemberLoginRequest {
	private String mid;
	private String mpassword;
}
