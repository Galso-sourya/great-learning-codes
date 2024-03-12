package com.greatlearning.serviceImpl;

import com.greatlearning.service.Teacher;

public class HindiTeacher implements Teacher {

	@Override
	public String getHomework() {
		// TODO Auto-generated method stub
		return "c";
	}
public void doInitialJob() {
	System.out.println("under the initial method");
}
public void doFinalJob() {
	System.out.println("under the destroy method");
}
}
