package com.greatlearning.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {
	//adding the request mapping-->URL
	@RequestMapping("/hello")
public String giveHelloMessage() {
	return "hello";
}
	@RequestMapping("/g")
	public String giveGMessage() {
		return "g";
	}
}
