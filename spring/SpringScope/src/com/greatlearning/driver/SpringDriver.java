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
Teacher teacher2=context.getBean("hindiTeacher0",HindiTeacher.class);
//3rd call methods on the bean
System.out.println(teacher1.getHomework());
System.out.println(teacher2.getHomework());
System.out.println(teacher1);//these print addresses of the particular object
System.out.println(teacher2);//a new bean instance is being created. so they are not equal
if(teacher1==teacher2) {
	System.out.println("true");
}else {
	System.out.println("false");	
}
//4th close context
context.close();
	}

}
