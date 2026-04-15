package com.springbootexample.restcontroller.controller.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductSaveRequest {
	private String pname;
	private int pprice;
	private String pcompany;
	private MultipartFile pimage;
}
