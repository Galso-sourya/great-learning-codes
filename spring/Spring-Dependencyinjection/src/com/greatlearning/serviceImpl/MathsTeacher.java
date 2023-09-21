package com.greatlearning.serviceImpl;

import com.greatlearning.service.ExamTip;
import com.greatlearning.service.Teacher;

public class MathsTeacher implements Teacher {
	// defining a private field for dependency
		ExamTip examTip;
		public MathsTeacher() {
			
		}
		// define a constructor for dependency injection
		MathsTeacher(ExamTip theExamTip) {
			examTip = theExamTip;
		}
	@Override
	public String getHomework() {
		// TODO Auto-generated method stub
		return "math me dabba gul";
	}
	@Override
	public String getExamTip() {
		return examTip.getExamTip();
	}
}
