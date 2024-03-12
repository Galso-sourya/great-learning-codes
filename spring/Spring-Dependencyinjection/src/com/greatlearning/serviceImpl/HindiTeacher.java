package com.greatlearning.serviceImpl;

import com.greatlearning.service.ExamTip;
import com.greatlearning.service.Teacher;

public class HindiTeacher implements Teacher {
//defining a private field for dependency
	ExamTip examTip;
	public HindiTeacher() {//this is the default constructor
//this constructor will initialize the private field examTip to null		
	}
	//define a constructor for dependency injection. this is a parameterized constructor
	public HindiTeacher(ExamTip theExamTip) {
	examTip=theExamTip;	
	}
	@Override
	public String getHomework() {
		// TODO Auto-generated method stub
		return "pado mitro";
	}
	@Override
public String getExamTip() {
	return examTip.getExamTip();
}
}
