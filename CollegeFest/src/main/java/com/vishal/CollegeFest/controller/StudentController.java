package com.vishal.CollegeFest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.vishal.CollegeFest.entity.Student;
import com.vishal.CollegeFest.service.StudentService;

@Controller
@RequestMapping("/student")
public class StudentController {
	@Autowired
	StudentService studentService;
@GetMapping("/list")
public String getAllStudents() {
	List<Student>students=studentService.findAll();
			return "student-list";
}
}
