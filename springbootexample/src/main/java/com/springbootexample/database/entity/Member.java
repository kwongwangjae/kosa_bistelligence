package com.springbootexample.database.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Member {
	private String mid;
	private String mname;
	private String mpassword;
	private String memail;
	private boolean menabled;
	private String mrole;
}
