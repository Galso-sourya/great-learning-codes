package com.greatlearning.Driver;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.greatlearning.entity.Teacher;
import com.greatlearning.entity.TeacherDetails;

public class Read {
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
			//start transaction
			session.beginTransaction();
			//get the Teacher Detail object
			int theId=2;
			TeacherDetails teacherDetails=session.get(TeacherDetails.class,theId);
			//print the Teacher Detail
			System.out.println("teacher details:"+teacherDetails);
			//print the associated Teacher values
			System.out.println("associated teacher:"+teacherDetails.getTeacher());
			//commit transaction
			session.getTransaction().commit();
		}catch(Exception exc){
		exc.printStackTrace();	
		}
		
		finally {
			session.close();
			factory.close();
			}
		}
}
