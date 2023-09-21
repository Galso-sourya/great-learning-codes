package com.greatlearning.serviceImpl;

import com.greatlearning.service.Teacher;
import org.springframework.stereotype.Component;
@Component("customName")
public class HindiTeacher implements Teacher {

	@Override
	public String getHomework() {
		// TODO Auto-generated method stub
		return "pado mitro";
	}

}
