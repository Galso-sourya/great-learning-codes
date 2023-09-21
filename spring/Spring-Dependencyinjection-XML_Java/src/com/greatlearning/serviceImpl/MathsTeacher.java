package com.greatlearning.serviceImpl;

import com.greatlearning.service.ExamTip;
import com.greatlearning.service.Teacher;
import org.springframework.stereotype.Component;
@Component
public class MathsTeacher implements Teacher {
	// defining a private field for dependency
		ExamTip examTip;
		public MathsTeacher() {
			
		}
		// define a constructor for dependency injection
		@Autowired
		MathsTeacher(@Qualifier("solvePreviousYearsPaper")ExamTip theExamTip) {
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
