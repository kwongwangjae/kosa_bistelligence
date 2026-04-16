package com.springbootexample.database.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springbootexample.database.dao.MemberDao;
import com.springbootexample.database.dto.MemberJoinRequest;
import com.springbootexample.database.dto.MemberJoinResponse;
import com.springbootexample.database.entity.Member;

@Service
public class MemberService {

	@Autowired
	private MemberDao memberDao;

	public void join(MemberJoinRequest request) {
		int insert = memberDao.insert(new Member(
			request.getMid(),
			request.getMname(),
			request.getMpassword(),
			request.getMemail(),
			true,
			"ROLE_USER"
		));

		if(insert == 0)
			throw new IllegalArgumentException("잘못 등록");
	}
}
