package com.greatlearning.serviceImpl;
import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import com.greatlearning.service.Teacher;
@Component
@Scope("singleton")
//@Scope("prototype")
public class MathsTeacher implements Teacher {

	@Override
	public String getHomework() {
		// TODO Auto-generated method stub
		return "math me dabba gul";
	}
//create 2 methods 1)@PostConstruct 2) Pre destroy
	//rules-->return type must be void,naming can be anything, accept any argument
	@PostConstruct
	public void insidePostConstruct() {
		System.out.println("we are inside the post construct");
	}
	@PreDestroy
	public void insidePreDestroy() {
		System.out.println("we are inside the pre destroy");
	}
}
