package com.greatlearning.serviceImpl;
import com.greatlearning.service.ExamTip;
import com.greatlearning.service.Teacher;
import org.springframework.stereotype.Component;
@Component
public class GkTeacher implements Teacher {
	// defining a private field for dependency
	ExamTip examTip;

	// define a constructor for dependency injection
	@Autowired
	public GkTeacher(@Qualifier("revisionTip")ExamTip theExamTip) {
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
