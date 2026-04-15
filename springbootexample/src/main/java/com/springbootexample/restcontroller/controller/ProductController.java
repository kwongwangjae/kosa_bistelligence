package com.springbootexample.restcontroller.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springbootexample.restcontroller.controller.dto.ProductResponse;
import com.springbootexample.restcontroller.controller.dto.ProductSaveRequest;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/product")
@Slf4j
public class ProductController {

	@PostMapping
	public String save(@ModelAttribute ProductSaveRequest request) {
		log.info(request.toString());

		return "등록성공";
	}

	@GetMapping()
	public ProductResponse getProduct(@RequestParam int pid) {
		log.info("pid: " + pid);

		ProductResponse response = new ProductResponse();
		response.setPid(pid);
		response.setPname("카메라");
		response.setPprice(500000);
		response.setPcompany("삼성전자");
		response.setPimagename1("original.png");
		response.setPimagename2("save.png");
		response.setPimagetype("image/png");

		return response;
	}
}
