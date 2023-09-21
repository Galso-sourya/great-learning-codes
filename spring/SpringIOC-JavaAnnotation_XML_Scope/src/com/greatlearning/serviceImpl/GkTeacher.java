package com.greatlearning.serviceImpl;

import org.springframework.stereotype.Component;
import org.springframework.context.annotation.Scope;
import com.greatlearning.service.Teacher;
@Component
@Scope("singleton")
public class GkTeacher implements Teacher{

	@Override
	public String getHomework() {
		// TODO Auto-generated method stub
		return "read current affairs";
	}

}
