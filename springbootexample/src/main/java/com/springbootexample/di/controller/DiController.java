package com.springbootexample.di.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springbootexample.di.service.DiBoardService;
import com.springbootexample.di.service.DiMemberService;
import com.springbootexample.validation.dto.JoinRequest;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/di")
@AllArgsConstructor
@Slf4j
public class DiController {

	//컨트롤러는 반드시 기본 생성자만 사용해야 함
	//컨트롤러는 생성자를 작성하지 않는게 원칙
	private final DiBoardService boardService;
	private final DiMemberService memberService;

	@PostMapping("/join")
	public String join() {
		memberService.join();

		return "가입 성공";
	}

	@GetMapping("/board-list")
	public String boardList() {
		boardService.write();
		return "등록 성공";
	}
}
