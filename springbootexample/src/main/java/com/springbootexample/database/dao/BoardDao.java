package com.springbootexample.database.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.springbootexample.database.dto.Pager;
import com.springbootexample.database.entity.Board;

@Mapper
public interface BoardDao {
	public int count();
	public List<Board> selectByPage(Pager pager);
	public int insert(Board board);
	public int update(Board board);
	public int delete(int bno);
	public Board selectByBno(int bno);
}
