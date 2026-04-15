package com.springbootexample.restcontroller.dto;

import jakarta.validation.constraints.NotNull;

public class Member {
	@NotNull(groups = {
		Join.class,
		Login.class
	})
	private String mid;

	@NotNull(groups = Join.class)
	private String mname;

	@NotNull(groups = {
		Join.class,
		Login.class
	})
	private String mpassword;

	@NotNull(groups = Join.class)
	private String memail;
}

