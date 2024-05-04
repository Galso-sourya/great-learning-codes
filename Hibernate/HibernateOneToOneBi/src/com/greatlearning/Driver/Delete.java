package com.greatlearning.Driver;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.greatlearning.entity.Teacher;
import com.greatlearning.entity.TeacherDetails;

public class Delete {
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
			int theId=1;
			//start transaction
			session.beginTransaction();
			TeacherDetails teacherDetails=session.get(TeacherDetails.class,theId);
			if(teacherDetails!=null) {
				System.out.println(teacherDetails);
				//it will also delete TeacherDetails data as we have provided 
				//CascadeType.ALL
				session.delete(teacherDetails);
			}
			//commit transaction
			session.getTransaction().commit();
		}finally {
			factory.close();
		}
	}
}
