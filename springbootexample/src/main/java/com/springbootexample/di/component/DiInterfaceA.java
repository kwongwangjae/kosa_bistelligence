package com.springbootexample.di.component;

import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class DiInterfaceA implements DiInterface {
	@Override
	public void method() {
		log.info("DiInterfaceA");
	}
}
