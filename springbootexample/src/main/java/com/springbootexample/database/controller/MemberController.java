package com.springbootexample.database.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.springbootexample.database.dto.MemberJoinRequest;
import com.springbootexample.database.dto.MemberJoinResponse;
import com.springbootexample.database.dto.MemberLoginRequest;
import com.springbootexample.database.dto.MemberLoginResponse;
import com.springbootexample.database.dto.MemberReadResponse;
import com.springbootexample.database.dto.MemberRemoveResponse;
import com.springbootexample.database.dto.MemberUpdateRequest;
import com.springbootexample.database.dto.MemberUpdateResponse;
import com.springbootexample.database.service.MemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/database/member")
@RequiredArgsConstructor
public class MemberController {

	private final MemberService memberService;

	@PostMapping("/join")
	public MemberJoinResponse join(@RequestBody MemberJoinRequest request) {
		return memberService.join(request);
	}

	@PostMapping("/login")
	public MemberLoginResponse login(@RequestBody MemberLoginRequest request) {
		return memberService.login(request);
	}

	@GetMapping("/{mid}")
	public MemberReadResponse read(@PathVariable String mid) {
		return memberService.read(mid);
	}

	@PutMapping("/{mid}")
	public MemberUpdateResponse update(@PathVariable String mid, @RequestBody MemberUpdateRequest request) {
		return memberService.update(mid, request);
	}

	@DeleteMapping("/{mid}")
	public MemberRemoveResponse delete(@PathVariable String mid) {
		boolean delete = memberService.delete(mid);
		MemberRemoveResponse response = new MemberRemoveResponse();

		if(delete){
			response.setResult("success");
		} else {
			response.setResult("failure");
			response.setMessage("삭제할 데이터가 없습니다.");
		}

		return response;
	}
}
