package com.springbootexample.restcontroller.controller;

import java.util.Date;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springbootexample.restcontroller.dto.Board;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/content-negotiation")
@Slf4j
public class ContentNegotiationController {
	@GetMapping(
		value = "/data",
		produces = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
	public Board contentNegotiation() {
		Board board = new Board();
		board.setBno(1);
		board.setBtitle("제목");
		board.setBcontent("내용");
		board.setBwriter("user");
		board.setBdate(new Date());
		board.setBhitcount(0);
		board.setBattach(null);
		board.setBattachoname("포토1.jpg");
		board.setBattachsname(new Date().getTime() + "-포토1.jpg");
		board.setBattachtype("image/png");
		board.setBattachdata(null);
		return board;
	}
}
