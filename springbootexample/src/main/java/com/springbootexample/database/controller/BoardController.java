package com.springbootexample.database.controller;

import org.springframework.http.MediaType;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.springbootexample.database.dto.BoardListResponse;
import com.springbootexample.database.dto.BoardReadResponse;
import com.springbootexample.database.dto.BoardUpdateRequest;
import com.springbootexample.database.dto.BoardUpdateResponse;
import com.springbootexample.database.dto.BoardWriteRequest;
import com.springbootexample.database.dto.BoardWriteResponse;
import com.springbootexample.database.service.BoardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/database/board")
@RequiredArgsConstructor
public class BoardController {

	private final BoardService boardService;

	@GetMapping
	public BoardListResponse list(@RequestParam(defaultValue = "1") int pageNo) {
		return boardService.list(pageNo);
	}

	@PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public BoardWriteResponse write(@ModelAttribute BoardWriteRequest request) {
		return boardService.write(request);
	}

	@GetMapping("/{bno}")
	public BoardReadResponse read(@PathVariable int bno) {
		return boardService.read(bno);
	}

	@PutMapping(value = "/{bno}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	public BoardUpdateResponse update(@PathVariable int bno, @ModelAttribute BoardUpdateRequest request) {
		return boardService.update(bno, request);
	}

	@DeleteMapping("/{bno}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable int bno) {
		boardService.delete(bno);
	}
}
