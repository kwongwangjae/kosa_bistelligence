package com.springbootexample.database.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springbootexample.database.dao.BoardDao;
import com.springbootexample.database.dto.BoardListResponse;
import com.springbootexample.database.dto.BoardReadResponse;
import com.springbootexample.database.dto.BoardUpdateRequest;
import com.springbootexample.database.dto.BoardUpdateResponse;
import com.springbootexample.database.dto.BoardWriteRequest;
import com.springbootexample.database.dto.BoardWriteResponse;
import com.springbootexample.database.dto.Pager;
import com.springbootexample.database.entity.Board;
import com.springbootexample.database.service.attachment.BoardAttachmentStorage;

@Service
public class BoardService {
	private static final int ROWS_PER_PAGE = 10;
	private static final int PAGES_PER_GROUP = 5;

	@Autowired
	private BoardDao boardDao;

	@Autowired
	private BoardAttachmentStorage boardAttachmentStorage;

	public BoardListResponse list(int pageNo) {
		int totalRows = boardDao.count();
		Pager pager = new Pager(ROWS_PER_PAGE, PAGES_PER_GROUP, totalRows, pageNo);
		List<BoardReadResponse> boards = boardDao.selectByPage(pager)
			.stream()
			.peek(boardAttachmentStorage::loadAttachmentData)
			.map(this::toReadResponse)
			.toList();

		BoardListResponse response = new BoardListResponse();
		response.setPager(pager);
		response.setBoards(boards);
		return response;
	}

	public BoardWriteResponse write(BoardWriteRequest request) {
		Board board = toBoard(request);

		if (board.getBdate() == null) {
			board.setBdate(LocalDateTime.now());
		}

		boardAttachmentStorage.prepareForCreate(board);

		int insert = boardDao.insert(board);

		if(insert == 0)
			throw new IllegalArgumentException("잘못 등록");

		boardAttachmentStorage.loadAttachmentData(board);
		return toWriteResponse(board);
	}

	public BoardReadResponse read(int bno) {
		Board board = findByBno(bno);
		boardAttachmentStorage.loadAttachmentData(board);
		return toReadResponse(board);
	}

	public BoardUpdateResponse update(int bno, BoardUpdateRequest request) {
		Board savedBoard = findByBno(bno);
		Board board = toBoard(bno, request, savedBoard);

		boardAttachmentStorage.prepareForUpdate(board, savedBoard);

		int update = boardDao.update(board);

		if(update == 0)
			throw new IllegalArgumentException("잘못 수정");

		Board updatedBoard = findByBno(bno);
		boardAttachmentStorage.loadAttachmentData(updatedBoard);
		return toUpdateResponse(updatedBoard);
	}

	public void delete(int bno) {
		Board savedBoard = findByBno(bno);
		int delete = boardDao.delete(bno);

		if(delete == 0)
			throw new IllegalArgumentException("잘못 삭제");

		boardAttachmentStorage.deleteAttachment(savedBoard);
	}

	private Board findByBno(int bno) {
		Board board = boardDao.selectByBno(bno);

		if(board == null)
			throw new IllegalArgumentException("게시글을 찾을 수 없습니다");

		return board;
	}

	private Board toBoard(BoardWriteRequest request) {
		Board board = new Board();
		board.setBtitle(request.getBtitle());
		board.setBcontent(request.getBcontent());
		board.setBdate(request.getBdate());
		board.setBwriter(request.getBwriter());
		board.setBhintcount(request.getBhintcount() == null ? 0 : request.getBhintcount());
		board.setBattach(request.getBattach());
		board.setBattachoname(request.getBattachoname());
		board.setBattachsname(request.getBattachsname());
		board.setBattachtype(request.getBattachtype());
		board.setBattachdata(request.getBattachdata());
		return board;
	}

	private Board toBoard(int bno, BoardUpdateRequest request, Board savedBoard) {
		Board board = new Board();
		board.setBno(bno);
		board.setBtitle(valueOrDefault(request.getBtitle(), savedBoard.getBtitle()));
		board.setBcontent(valueOrDefault(request.getBcontent(), savedBoard.getBcontent()));
		board.setBdate(request.getBdate() == null ? savedBoard.getBdate() : request.getBdate());
		board.setBwriter(valueOrDefault(request.getBwriter(), savedBoard.getBwriter()));
		board.setBhintcount(request.getBhintcount() == null ? savedBoard.getBhintcount() : request.getBhintcount());
		board.setBattach(request.getBattach());
		board.setBattachoname(request.getBattachoname());
		board.setBattachsname(request.getBattachsname());
		board.setBattachtype(request.getBattachtype());
		board.setBattachdata(request.getBattachdata());
		return board;
	}

	private BoardWriteResponse toWriteResponse(Board board) {
		BoardWriteResponse response = new BoardWriteResponse();
		response.setBno(board.getBno());
		response.setBtitle(board.getBtitle());
		response.setBcontent(board.getBcontent());
		response.setBdate(board.getBdate());
		response.setBwriter(board.getBwriter());
		response.setBhintcount(board.getBhintcount());
		response.setBattachoname(board.getBattachoname());
		response.setBattachsname(board.getBattachsname());
		response.setBattachtype(board.getBattachtype());
		response.setBattachdata(board.getBattachdata());
		return response;
	}

	private BoardReadResponse toReadResponse(Board board) {
		BoardReadResponse response = new BoardReadResponse();
		response.setBno(board.getBno());
		response.setBtitle(board.getBtitle());
		response.setBcontent(board.getBcontent());
		response.setBdate(board.getBdate());
		response.setBwriter(board.getBwriter());
		response.setBhintcount(board.getBhintcount());
		response.setBattachoname(board.getBattachoname());
		response.setBattachsname(board.getBattachsname());
		response.setBattachtype(board.getBattachtype());
		response.setBattachdata(board.getBattachdata());
		return response;
	}

	private BoardUpdateResponse toUpdateResponse(Board board) {
		BoardUpdateResponse response = new BoardUpdateResponse();
		response.setBno(board.getBno());
		response.setBtitle(board.getBtitle());
		response.setBcontent(board.getBcontent());
		response.setBdate(board.getBdate());
		response.setBwriter(board.getBwriter());
		response.setBhintcount(board.getBhintcount());
		response.setBattachoname(board.getBattachoname());
		response.setBattachsname(board.getBattachsname());
		response.setBattachtype(board.getBattachtype());
		response.setBattachdata(board.getBattachdata());
		return response;
	}

	private String valueOrDefault(String value, String defaultValue) {
		return value == null ? defaultValue : value;
	}
}
