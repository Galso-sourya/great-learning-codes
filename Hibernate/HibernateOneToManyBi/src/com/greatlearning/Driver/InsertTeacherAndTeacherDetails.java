package com.greatlearning.Driver;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.greatlearning.entity.Course;
import com.greatlearning.entity.Teacher;
import com.greatlearning.entity.TeacherDetails;
public class InsertTeacherAndTeacherDetails {
	public static void main(String[] args) {
		//create session factory
		SessionFactory factory=factory=new Configuration()
				.configure("hibernate.cfg.xml")
				.addAnnotatedClass(Teacher.class)
				.addAnnotatedClass(TeacherDetails.class)
				.addAnnotatedClass(Course.class)
				.buildSessionFactory();
		//create session
		Session session=factory.getCurrentSession();
		try {
			//create objects
			Teacher theTeacher=new Teacher("a");
			TeacherDetails theTeacherDetails=new TeacherDetails("gurugram","reading");
			//associate objects
			theTeacher.setTeacherDetails(theTeacherDetails);
			//start transaction
			session.beginTransaction();
			//save teacher
			session.save(theTeacher);
			//commit transaction
			session.getTransaction().commit();
		}finally {
			factory.close();
		}
	}
}
