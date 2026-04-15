package com.springbootexample.restcontroller.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserMessageRequest {
	private String mid;
	private String question;
}
