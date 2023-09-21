package com.greatlearning.driver;

import com.greatlearning.service.Teacher;
import com.greatlearning.serviceImpl.HindiTeacher;

public class Main {
public static void main(String[] args) {
	//create an object of teacher
	Teacher teacher=new HindiTeacher();
	
	//use the object and retrieve the homework of a particular teacher
	System.out.println(teacher.getHomework());
}
}
