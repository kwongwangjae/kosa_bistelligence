package com.springbootexample.database.dao;

import org.apache.ibatis.annotations.Mapper;

import com.springbootexample.database.entity.Member;

@Mapper
public interface MemberDao {
	public int insert(Member member);

	public int update(Member member);

	public int delete(String mid);

	public Member selectByMid(String mid);
}
