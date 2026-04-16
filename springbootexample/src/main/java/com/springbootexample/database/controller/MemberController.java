package com.springbootexample.database.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springbootexample.database.dto.MemberJoinRequest;
import com.springbootexample.database.dto.MemberJoinResponse;
import com.springbootexample.database.service.MemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/database/member")
@RequiredArgsConstructor
public class MemberController {

	private final MemberService memberService;

	@PostMapping("/join")
	public MemberJoinResponse join(@RequestBody MemberJoinRequest request) {
		MemberJoinResponse response = new MemberJoinResponse();
		response.setMid(request.getMid());
		response.setMemail(request.getMemail());
		response.setMname(request.getMname());
		response.setMenabled(true);
		response.setMrole("USER_ROLE");

		memberService.join(request);

		return response;
	}
}
