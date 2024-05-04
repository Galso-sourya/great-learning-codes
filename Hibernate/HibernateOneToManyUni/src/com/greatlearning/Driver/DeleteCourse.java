package com.greatlearning.Driver;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.greatlearning.entity.Course;
import com.greatlearning.entity.Review;
import com.greatlearning.entity.Teacher;
import com.greatlearning.entity.TeacherDetails;

public class DeleteCourse {
	public static void main(String[] args) {
		//create session factory
		SessionFactory factory=factory=new Configuration()
				.configure("hibernate.cfg.xml")
				.addAnnotatedClass(Teacher.class)
				.addAnnotatedClass(TeacherDetails.class)
				.addAnnotatedClass(Course.class)
				.addAnnotatedClass(Review.class)
				.buildSessionFactory();
		//create session
		Session session=factory.getCurrentSession();
		try {
			int theCourseId=3;
			//start transaction
			session.beginTransaction();
			//get the teacher
			
			Course tempCourse=session.get(Course.class,theCourseId);
			if(tempCourse!=null) {
				//it will not delete the teacher data as we have not provided 
				//cascadetype.all				
				session.delete(tempCourse);
			}
			session.getTransaction().commit();
		}finally {
			//add a clean up code
			factory.close();
		}
	}
}
