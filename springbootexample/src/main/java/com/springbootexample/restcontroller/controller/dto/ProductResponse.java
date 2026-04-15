package com.springbootexample.restcontroller.controller.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductResponse {
	private Integer pid;
	private String pname;
	private int pprice;
	private String pcompany;
	private String Pimagename1;
	private String Pimagename2;
	private String pimagetype;
}
