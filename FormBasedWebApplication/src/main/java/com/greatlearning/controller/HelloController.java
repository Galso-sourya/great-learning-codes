package com.greatlearning.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HelloController {
//how to use model
	
	//Model, ModelMap and ModelAndView to define a model in spring mvc
	//this Model is used to add attributes to the model
// ModelMap defines a holder for model attributes and is primarily designed for adding
//attributes
//ModelAndView is holder for both the model and a view
//ModelMap is nothing but a container or carrier or like a box which carries 
//information from front end to back end or from back end to front end
	@RequestMapping("/hello")
	public String welcome(ModelMap model) {
		model.addAttribute("message", "hello and welcome"); //it is an in build function
		//the first part is the model name and the last one is value
		// ctrl+shift+a to format
		// now we have to use this model in view
		return "hello";//file name in view folder will be same as return
	}
}
