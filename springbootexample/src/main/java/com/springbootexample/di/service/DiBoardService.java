package com.springbootexample.di.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springbootexample.di.component.DiAComponent;
import com.springbootexample.di.component.DiBComponent;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class DiBoardService {
	//필드 주입
	@Autowired
	private DiAComponent aComponent;

	//생성자 주입
	private DiBComponent bComponent;

	public DiBoardService(DiBComponent bComponent) {
		this.bComponent = bComponent;
	}

	// public DiBoardService(DiAComponent aComponent, DiBComponent bComponent) {
	// 	this.aComponent = aComponent;
	// 	this.bComponent = bComponent;
	// }

	public void write() {
		log.info("실행");
	}

	public void update() {
		log.info("실행");
	}

	public void delete() {
		log.info("실행");
	}


}
