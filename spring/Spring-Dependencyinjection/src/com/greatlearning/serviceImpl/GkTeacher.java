package com.greatlearning.serviceImpl;

import com.greatlearning.service.ExamTip;
import com.greatlearning.service.Teacher;

public class GkTeacher implements Teacher {
	// defining a private field for dependency
	ExamTip examTip;

	// define a constructor for dependency injection
	public GkTeacher(ExamTip theExamTip) {
		examTip = theExamTip;
	}

	@Override
	public String getHomework() {
		// TODO Auto-generated method stub
		return "read current affairs";
	}
	@Override
	public String getExamTip() {
		return examTip.getExamTip();
	}
}
