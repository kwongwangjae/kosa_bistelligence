package com.springbootexample.database.entity;

import lombok.Data;

@Data
public class Member {
	private String mid;
	private String mname;
	private String mpassword;
	private String memail;
	private boolean menaled;
	private String mrole;
}

