package com.springbootexample.database.dto;

import java.util.List;

import lombok.Data;

@Data
public class BoardListResponse {
	private Pager pager;
	private List<BoardReadResponse> boards;
}
