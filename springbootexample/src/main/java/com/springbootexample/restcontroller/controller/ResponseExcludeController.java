package com.springbootexample.restcontroller.controller;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springbootexample.restcontroller.controller.dto.AiMessageResponse;
import com.springbootexample.restcontroller.controller.dto.BoardResponse;
import com.springbootexample.restcontroller.controller.dto.BoardUpdateRequest;
import com.springbootexample.restcontroller.controller.dto.BoardUpdateResponse;
import com.springbootexample.restcontroller.controller.dto.LoginRequest;
import com.springbootexample.restcontroller.controller.dto.LoginResponse;
import com.springbootexample.restcontroller.controller.dto.UserMessageRequest;
import com.springbootexample.restcontroller.dto.Board;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/response-exclude")
@Slf4j
public class ResponseExcludeController {

	//게시물 등록
	@PostMapping("/board-save")
	public String boardSave(@RequestBody Board board) {
			log.info(board.toString());
			return "저장 성공";
	}

	@GetMapping("/board-read")
	public BoardResponse boardRead() {
		BoardResponse board = new BoardResponse();
		board.setBno(1);
		board.setBtitle("제목입니다");
		board.setBcontent("내용입니다");
		board.setBwriter("사용자");
		board.setBhitcount(0);
		board.setBdate(new Date());

		return board;
	}

	@GetMapping("/board-read2")
	public BoardUpdateResponse boardRead2() {
		BoardUpdateResponse board = new BoardUpdateResponse();
		board.setBno(1);
		board.setBtitle("제목입니다");
		board.setBcontent("내용입니다");
		board.setBwriter("사용자");
		board.setBhitcount(0);
		board.setBdate(new Date());

		return board;
	}

	@PostMapping("/board-read2")
	public BoardUpdateResponse boardRead2(@RequestBody BoardUpdateRequest request) {
		BoardUpdateResponse board = new BoardUpdateResponse();
		board.setBno(request.getBno());
		board.setBtitle(request.getBtitle());
		board.setBcontent(request.getBcontent());
		board.setBwriter(request.getBwriter());
		board.setBhitcount(boardRead().getBhitcount());
		board.setBdate(new Date());

		return board;
	}

	@PostMapping
	public LoginRequest login(@ModelAttribute LoginRequest request) {
		log.info(request.toString());

		return request;
	}

	@GetMapping
	public LoginResponse signup(@RequestParam String mid){
		LoginResponse response = new LoginResponse();
		response.setMid(mid);
		response.setAccessToken("xxxxx");

		return response;
	}

	@PostMapping("/chat")
	public AiMessageResponse aiMessageResponse(@RequestBody UserMessageRequest request) {
		AiMessageResponse response = new AiMessageResponse();
		response.setQuestion(request.getQuestion());
		response.setResponse("삼성전자의 오늘 주가는 230000");

		return response;
	}




}
