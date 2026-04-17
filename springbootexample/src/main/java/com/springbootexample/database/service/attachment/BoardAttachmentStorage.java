package com.springbootexample.database.service.attachment;

import com.springbootexample.database.entity.Board;

public interface BoardAttachmentStorage {
	void prepareForCreate(Board board);

	void prepareForUpdate(Board board, Board savedBoard);

	void loadAttachmentData(Board board);

	void deleteAttachment(Board board);
}
