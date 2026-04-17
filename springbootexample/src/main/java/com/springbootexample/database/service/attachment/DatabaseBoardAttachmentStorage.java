package com.springbootexample.database.service.attachment;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

import com.springbootexample.database.entity.Board;

@Service
@ConditionalOnProperty(name = "app.board.attachment.mode", havingValue = "database", matchIfMissing = true)
public class DatabaseBoardAttachmentStorage extends AbstractBoardAttachmentStorage {

	@Override
	public void prepareForCreate(Board board) {
		if (!hasNewAttachment(board)) {
			return;
		}

		applyAttachmentMetadata(board);
		board.setBattachdata(readBytes(board.getBattach()));
	}

	@Override
	public void prepareForUpdate(Board board, Board savedBoard) {
		if (!hasNewAttachment(board)) {
			copyAttachmentMetadata(board, savedBoard);
			return;
		}

		applyAttachmentMetadata(board);
		board.setBattachdata(readBytes(board.getBattach()));
	}

	@Override
	public void loadAttachmentData(Board board) {
	}

	@Override
	public void deleteAttachment(Board board) {
	}
}
