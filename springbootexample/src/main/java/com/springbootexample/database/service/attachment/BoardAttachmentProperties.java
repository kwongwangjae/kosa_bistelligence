package com.springbootexample.database.service.attachment;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "app.board.attachment")
public class BoardAttachmentProperties {
	private String uploadDir = "uploads/board";
}
