package com.springbootexample.database.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.springbootexample.database.dao.MemberDao;
import com.springbootexample.database.dto.MemberJoinRequest;
import com.springbootexample.database.dto.MemberJoinResponse;
import com.springbootexample.database.dto.MemberLoginRequest;
import com.springbootexample.database.dto.MemberLoginResponse;
import com.springbootexample.database.dto.MemberReadResponse;
import com.springbootexample.database.dto.MemberUpdateRequest;
import com.springbootexample.database.dto.MemberUpdateResponse;
import com.springbootexample.database.entity.Member;

@Service
public class MemberService {

	@Autowired
	private MemberDao memberDao;

	public MemberJoinResponse join(MemberJoinRequest request) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		request.setMpassword(passwordEncoder.encode(request.getMpassword()));

		Member member = new Member(
			request.getMid(),
			request.getMname(),
			request.getMpassword(),
			request.getMemail(),
			true,
			"ROLE_USER"
		);

		int insert = memberDao.insert(member);

		if(insert == 0)
			throw new IllegalArgumentException("잘못 등록");

		return toResponse(member);
	}

	public MemberLoginResponse login(MemberLoginRequest request) {
		Member member = findByMid(request.getMid());
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

		if (request.getMpassword() == null || !passwordEncoder.matches(request.getMpassword(), member.getMpassword())) {
			throw new IllegalArgumentException("비밀번호가 일치하지 않습니다");
		}

		return toLoginResponse(member);
	}

	public MemberReadResponse read(String mid) {
		return toReadResponse(findByMid(mid));
	}

	public MemberUpdateResponse update(String mid, MemberUpdateRequest request) {
		Member savedMember = findByMid(mid);
		Member member = new Member();

		member.setMid(mid);
		member.setMname(valueOrDefault(request.getMname(), savedMember.getMname()));
		member.setMemail(valueOrDefault(request.getMemail(), savedMember.getMemail()));
		member.setMenabled(request.getMenabled() == null ? savedMember.isMenabled() : request.getMenabled());
		member.setMrole(valueOrDefault(request.getMrole(), savedMember.getMrole()));

		if (request.getMpassword() == null || request.getMpassword().isBlank()) {
			member.setMpassword(savedMember.getMpassword());
		} else {
			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			member.setMpassword(passwordEncoder.encode(request.getMpassword()));
		}

		int update = memberDao.update(member);

		if(update == 0)
			throw new IllegalArgumentException("잘못 수정");

		return toUpdateResponse(findByMid(mid));
	}

	public boolean delete(String mid) {
		int delete = memberDao.delete(mid);

		if(delete == 0)
			return false;

		return true;
	}

	private Member findByMid(String mid) {
		Member member = memberDao.selectByMid(mid);

		if(member == null)
			throw new IllegalArgumentException("회원을 찾을 수 없습니다");

		return member;
	}

	private MemberJoinResponse toResponse(Member member) {
		MemberJoinResponse response = new MemberJoinResponse();
		response.setMid(member.getMid());
		response.setMname(member.getMname());
		response.setMemail(member.getMemail());
		response.setMenabled(member.isMenabled());
		response.setMrole(member.getMrole());
		return response;
	}

	private MemberLoginResponse toLoginResponse(Member member) {
		MemberLoginResponse response = new MemberLoginResponse();
		response.setMid(member.getMid());
		response.setMname(member.getMname());
		response.setMemail(member.getMemail());
		response.setMenabled(member.isMenabled());
		response.setMrole(member.getMrole());
		return response;
	}

	private MemberReadResponse toReadResponse(Member member) {
		MemberReadResponse response = new MemberReadResponse();
		response.setMid(member.getMid());
		response.setMname(member.getMname());
		response.setMemail(member.getMemail());
		response.setMenabled(member.isMenabled());
		response.setMrole(member.getMrole());
		return response;
	}

	private MemberUpdateResponse toUpdateResponse(Member member) {
		MemberUpdateResponse response = new MemberUpdateResponse();
		response.setMid(member.getMid());
		response.setMname(member.getMname());
		response.setMemail(member.getMemail());
		response.setMenabled(member.isMenabled());
		response.setMrole(member.getMrole());
		return response;
	}

	private String valueOrDefault(String value, String defaultValue) {
		return value == null ? defaultValue : value;
	}
}
