package com.springbootexample.database.service.attachment;

import java.io.IOException;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

import com.springbootexample.database.entity.Board;

public abstract class AbstractBoardAttachmentStorage implements BoardAttachmentStorage {

	protected boolean hasNewAttachment(Board board) {
		MultipartFile battach = board.getBattach();
		return battach != null && !battach.isEmpty();
	}

	protected void applyAttachmentMetadata(Board board) {
		MultipartFile battach = board.getBattach();
		String originalFilename = battach.getOriginalFilename();
		if (originalFilename == null || originalFilename.isBlank()) {
			originalFilename = battach.getName();
		}

		board.setBattachoname(originalFilename);
		board.setBattachsname(UUID.randomUUID() + "-" + originalFilename);
		board.setBattachtype(battach.getContentType());
	}

	protected void copyAttachmentMetadata(Board target, Board source) {
		target.setBattachoname(source.getBattachoname());
		target.setBattachsname(source.getBattachsname());
		target.setBattachtype(source.getBattachtype());
		target.setBattachdata(source.getBattachdata());
	}

	protected byte[] readBytes(MultipartFile battach) {
		try {
			return battach.getBytes();
		} catch (IOException e) {
			throw new IllegalArgumentException("첨부파일 처리 실패", e);
		}
	}
}
