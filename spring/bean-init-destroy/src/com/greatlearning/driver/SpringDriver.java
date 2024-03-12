package com.greatlearning.driver;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.greatlearning.service.Teacher;
import com.greatlearning.serviceImpl.HindiTeacher;
import com.greatlearning.serviceImpl.MathsTeacher;

public class SpringDriver {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
ClassPathXmlApplicationContext context=new ClassPathXmlApplicationContext("applicationContext.xml");
Teacher teacher1=context.getBean("hindiTeacher",HindiTeacher.class);//bean id,class name with .class extension
System.out.println(teacher1.getHomework());
context.close();
	}

}
