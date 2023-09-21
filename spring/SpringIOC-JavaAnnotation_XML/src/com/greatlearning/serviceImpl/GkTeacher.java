package com.greatlearning.serviceImpl;

import com.greatlearning.service.Teacher;
import org.springframework.stereotype.Component;
@Component
public class GkTeacher implements Teacher{

	@Override
	public String getHomework() {
		// TODO Auto-generated method stub
		return "read current affairs";
	}

}
