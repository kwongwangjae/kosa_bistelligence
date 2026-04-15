package com.springbootexample.database.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springbootexample.database.dao.BoardDao;

@Service
public class BoardService {

	@Autowired
	private BoardDao boardDao;
}
