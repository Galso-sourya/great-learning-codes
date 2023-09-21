package com.greatlearning.serviceImpl;
import org.springframework.context.annotation.Scope;
@Component("customName")
@Scope("singleton")
public class HindiTeacher implements Teacher {

	@Override
	public String getHomework() {
		// TODO Auto-generated method stub
		return "pado mitro";
	}

}
