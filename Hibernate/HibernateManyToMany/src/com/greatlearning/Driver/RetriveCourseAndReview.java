package com.greatlearning.Driver;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.greatlearning.entity.Course;
import com.greatlearning.entity.Review;
import com.greatlearning.entity.Teacher;
import com.greatlearning.entity.TeacherDetails;

public class RetriveCourseAndReview {
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
			//start transaction
			session.beginTransaction();
			//get the teacher
			int theCourseId=3;
			Course tempCourse=session.get(Course.class,theCourseId);
			System.out.println("Teacher:"+tempCourse);
			//get courses of teacher
			System.out.println("reviews:"+tempCourse.getReviews());
			session.getTransaction().commit();
		}finally {
			//add a clean up code
			session.close();
			factory.close();
		}
	}
}
