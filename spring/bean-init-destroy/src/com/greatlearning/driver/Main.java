package com.greatlearning.driver;

import com.greatlearning.service.Teacher;
import com.greatlearning.serviceImpl.GkTeacher;
import com.greatlearning.serviceImpl.HindiTeacher;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Teacher teacher=new HindiTeacher();
Teacher teacher0=new GkTeacher();
System.out.println(teacher.getHomework());
System.out.println(teacher0.getHomework());
	}

}
