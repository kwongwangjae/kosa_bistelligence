package com.springbootexample.di.service;

import org.springframework.stereotype.Service;

import com.springbootexample.di.component.DiInterface;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class DiMemberService {

	private final DiInterface diInterfaceA;
	private final DiInterface diInterfaceB;

	public void join() {
		diInterfaceA.method();
		log.info("실행");
	}

	public void login() {
		log.info("실행");
	}
}
