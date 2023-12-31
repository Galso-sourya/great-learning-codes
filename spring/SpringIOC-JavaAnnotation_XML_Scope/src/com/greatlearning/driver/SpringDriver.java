package com.greatlearning.driver;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.greatlearning.service.Teacher;
public class SpringDriver{
	public static void main(String[] args) {
	//1st load the spring configuration file
		ClassPathXmlApplicationContext context=new 
				ClassPathXmlApplicationContext("applicationContext.xml")
		//2nd retrieve bean from spring container
Teacher teacher=context.getBean("mathsTeacher",MathsTeacher.class)//bean id,class name with .class extension
//Teacher teacher2=context.getBean("mathsTeacher",MathsTeacher.class)
//if(teacher==teacher2) {
//	System.out.println("true");
//}
//		if(teacher!=teacher2) {
//			System.out.println("they are not equal objects");
//		}
//		System.out.println(teacher);
//		System.out.println(teacher2);
		//3rd call methods on the bean
		System.out.println(teacher.getHomework());
		//4th close context
		context.close();
	}
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               