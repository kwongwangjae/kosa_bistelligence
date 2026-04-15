package com.springbootexample.validation.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class JoinRequest {
	@NotBlank(message = "mid는 필수입니다")
	@Size(min =  5, max = 10, message = "mid는 5~10글자 사이입니다.")
	private String mid;

	private String mname;

	@Pattern(regexp = "[0-9]", message = "패턴 지켜!")
	private String mpassword;

	@Email
	private String memail;
}
