//this is actually with IoC creating beans
package com.greatlearning.driver;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.greatlearning.service.Teacher;
import com.greatlearning.serviceImpl.MathsTeacher;
public class SpringDriver{
	public static void main(String[] args) {
	//1st load the spring configuration file
		ClassPathXmlApplicationContext context=new 
				ClassPathXmlApplicationContext("applicationContext.xml")
		//2nd retrieve bean from spring container
Teacher teacher=context.getBean("hindiTeacher",HindiTeacher.class)//bean id,class name with .class extension	
				Teacher teacher0=context.getBean("mathsTeacher",MathsTeacher.class)
		//3rd call methods on the bean
		System.out.println(teacher.getHomework());
		System.out.println(teacher0.getHomework());
		//4th close context
		context.close();
	}
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
