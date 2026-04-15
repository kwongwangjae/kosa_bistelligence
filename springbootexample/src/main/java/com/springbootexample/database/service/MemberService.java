package com.springbootexample.database.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springbootexample.database.dao.MemberDao;

@Service
public class MemberService {

	@Autowired
	private MemberDao memberDao;
}
