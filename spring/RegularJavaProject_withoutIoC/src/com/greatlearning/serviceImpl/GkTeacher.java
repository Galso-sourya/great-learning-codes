package com.greatlearning.serviceImpl;
// ctrl +shift+o to import

import com.greatlearning.service.Teacher;

public class GkTeacher implements Teacher{

	@Override
	public String getHomework() {
		return "read newspaper daily";
	}

}
