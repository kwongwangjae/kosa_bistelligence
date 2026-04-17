package com.springbootexample.database.service.attachment;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Service;

import com.springbootexample.database.entity.Board;

@Service
@ConditionalOnProperty(name = "app.board.attachment.mode", havingValue = "filesystem")
public class FileSystemBoardAttachmentStorage extends AbstractBoardAttachmentStorage {
	private final Path uploadDir;

	public FileSystemBoardAttachmentStorage(BoardAttachmentProperties properties) {
		try {
			this.uploadDir = Path.of(properties.getUploadDir()).toAbsolutePath().normalize();
			Files.createDirectories(this.uploadDir);
		} catch (IOException e) {
			throw new IllegalStateException("첨부파일 저장 폴더 생성 실패", e);
		}
	}

	@Override
	public void prepareForCreate(Board board) {
		if (!hasNewAttachment(board)) {
			return;
		}

		applyAttachmentMetadata(board);
		storeToFileSystem(board);
		board.setBattachdata(null);
	}

	@Override
	public void prepareForUpdate(Board board, Board savedBoard) {
		if (!hasNewAttachment(board)) {
			copyAttachmentMetadata(board, savedBoard);
			board.setBattachdata(null);
			return;
		}

		deleteAttachment(savedBoard);
		applyAttachmentMetadata(board);
		storeToFileSystem(board);
		board.setBattachdata(null);
	}

	@Override
	public void loadAttachmentData(Board board) {
		if (board.getBattachsname() == null || board.getBattachsname().isBlank()) {
			return;
		}

		Path target = uploadDir.resolve(board.getBattachsname()).normalize();
		if (!Files.exists(target)) {
			board.setBattachdata(null);
			return;
		}

		try {
			board.setBattachdata(Files.readAllBytes(target));
		} catch (IOException e) {
			throw new IllegalArgumentException("첨부파일 조회 실패", e);
		}
	}

	@Override
	public void deleteAttachment(Board board) {
		if (board.getBattachsname() == null || board.getBattachsname().isBlank()) {
			return;
		}

		Path target = uploadDir.resolve(board.getBattachsname()).normalize();
		try {
			Files.deleteIfExists(target);
		} catch (IOException e) {
			throw new IllegalArgumentException("첨부파일 삭제 실패", e);
		}
	}

	private void storeToFileSystem(Board board) {
		Path target = uploadDir.resolve(board.getBattachsname()).normalize();
		try (InputStream inputStream = board.getBattach().getInputStream()) {
			Files.copy(inputStream, target, StandardCopyOption.REPLACE_EXISTING);
		} catch (IOException e) {
			throw new IllegalArgumentException("첨부파일 저장 실패", e);
		}
	}
}
