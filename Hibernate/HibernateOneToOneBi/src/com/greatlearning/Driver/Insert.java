package com.greatlearning.Driver;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.greatlearning.entity.Teacher;
import com.greatlearning.entity.TeacherDetails;

public class Insert {
	public static void main(String[] args) {
		//create session factory
		SessionFactory factory=factory=new Configuration()
				.configure("hibernate.cfg.xml")
				.addAnnotatedClass(Teacher.class)
				.addAnnotatedClass(TeacherDetails.class)
				.buildSessionFactory();
		//create session
		Session session=factory.getCurrentSession();
		try {
			//create objects
			Teacher tempTeacher=new Teacher("a");
			TeacherDetails tempTeacherDetails=new TeacherDetails("gurugram","reading");
			//associate objects
			tempTeacher.setTeacherDetails(tempTeacherDetails);
			Teacher tempTeacher0=new Teacher("b");
			TeacherDetails tempTeacherDetails0=new TeacherDetails("kolkata","swimming");
			//associate objects
			tempTeacher0.setTeacherDetails(tempTeacherDetails0);
			//start transaction
			session.beginTransaction();
			//save teacher
			session.save(tempTeacher);
			session.save(tempTeacher0);
			//commit transaction
			session.getTransaction().commit();
		}finally {
			factory.close();
		}
	}
}
