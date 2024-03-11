package com.greatlearning.serviceImpl;

import com.greatlearning.service.Teacher;

public class HindiTeacher implements Teacher {

	@Override
	public String getHomework() {
		return "write a nice hindi poem";
	}

}
