package com.springbootexample.database.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springbootexample.database.dto.MemberJoinRequest;
import com.springbootexample.database.dto.MemberJoinResponse;

@RestController
@RequestMapping("/database/member")
public class MemberController {

	@PostMapping("/join")
	public MemberJoinResponse join(@RequestBody MemberJoinRequest request) {
		MemberJoinResponse response = new MemberJoinResponse();
		response.setMid(request.getMid());
		response.setMemail(request.getMemail());
		response.setMname(request.getMname());
		response.setMenaled(true);
		response.setMrole("USER_ROLE");

		return response;
	}
}
