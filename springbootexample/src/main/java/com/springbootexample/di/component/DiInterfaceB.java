package com.springbootexample.di.component;

import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class DiInterfaceB implements DiInterface{
	@Override
	public void method() {
		log.info("DiInterfaceB");
	}
}
