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
			//start transaction
			session.beginTransaction();
			//save teacher
			session.save(tempTeacher);
			//commit transaction
			session.getTransaction().commit();
		}finally {
			
		}
	}
}
