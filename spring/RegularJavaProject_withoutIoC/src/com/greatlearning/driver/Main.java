package com.greatlearning.driver;

import com.greatlearning.service.Teacher;
import com.greatlearning.serviceImpl.HindiTeacher;
//properties of a production level code are-
//1. functionality easily changable.
//2. apllication easily configurable means not hardcoded.
//here only one point(first) is achieved.
public class Main {
public static void main(String[] args) {//short cut is type main and then ctrl+space bar
//create an object of teacher
Teacher teacher=new HindiTeacher();	
//Teacher teacher=new MathsTeacher(); so the functionality can be easily changable
//but it is still hard coded as we have to type each time for different teachers.
	//use the object and retrieve the homework of a particular teacher
System.out.println(teacher.getHomework());
}
}
