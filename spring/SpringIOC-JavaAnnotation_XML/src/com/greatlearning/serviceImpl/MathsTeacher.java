package com.greatlearning.serviceImpl;

import com.greatlearning.service.Teacher;
import org.springframework.stereotype.Component;
@Component
public class MathsTeacher implements Teacher {

	@Override
	public String getHomework() {
		// TODO Auto-generated method stub
		return "math me dabba gul";
	}

}
