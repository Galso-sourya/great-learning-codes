package com.greatlearning.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.greatlearning.pojo.Employee;

@Controller
@RequestMapping("/employee")
public class EmployeeController {
	@RequestMapping("/registrationForm")
	public String showRegistrationForm(Model theModel) {//the name of the model is 
		//theModel
		Employee employee=new Employee();
		theModel.addAttribute("employeeModel",employee);//here we are passing the 
		//created object as 2nd argument
		return "employee-form";
	}
	// @ModelAttribute annotation refer to the property of the model object and is used 
	//to prepare the model data. This annotation bind a method variable or the model
	//object to a named model attribute.
	//user will give data to fill the form. all these data is being stored in  the
	//model attribute called employeeModel
	@RequestMapping("/processForm")
		public String processForm(@ModelAttribute("employeeModel") Employee employee) {
		return "registration-confirmation";	
		}
	}
