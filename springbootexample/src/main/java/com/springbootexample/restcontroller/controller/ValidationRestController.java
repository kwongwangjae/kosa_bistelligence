package com.springbootexample.restcontroller.controller;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springbootexample.restcontroller.dto.Join;
import com.springbootexample.restcontroller.dto.Login;
import com.springbootexample.restcontroller.dto.Member;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/validation")
@Slf4j
public class ValidationRestController {
	@PostMapping("/join")
	public String join(@Validated(Join.class) @RequestBody Member member){
		return "가입 성공";
	}

	@PostMapping("/login")
	public String login(@Validated(Login.class)@RequestBody Member member){
		return "로그인 성공";
	}
}
