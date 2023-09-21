package com.greatlearning.serviceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import com.greatlearning.service.ExamTip;
import com.greatlearning.service.Teacher;
import org.springframework.stereotype.Component;
@Component
public class HindiTeacher implements Teacher {
//defining a private field for dependency
	ExamTip examTip;
	public HindiTeacher() {
		
	}
	//define a constructor for dependency injection
	@Autowired
	public HindiTeacher(@Qualifier("revisionTip") ExamTip theExamTip) {
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
