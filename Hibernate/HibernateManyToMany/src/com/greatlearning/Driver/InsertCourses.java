package com.greatlearning.Driver;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.greatlearning.entity.Course;
import com.greatlearning.entity.Review;
import com.greatlearning.entity.Student;
import com.greatlearning.entity.Teacher;
import com.greatlearning.entity.TeacherDetails;

public class InsertCourses {
	public static void main(String[] args) {
		//create session factory
		SessionFactory factory=factory=new Configuration()
				.configure("hibernate.cfg.xml")
				.addAnnotatedClass(Teacher.class)
				.addAnnotatedClass(TeacherDetails.class)
				.addAnnotatedClass(Course.class)
				.addAnnotatedClass(Review.class)
				.addAnnotatedClass(Student.class)
				.buildSessionFactory();
		//create session
		Session session=factory.getCurrentSession();
		try {
			//start transaction
			session.beginTransaction();
			//get the teacher
			int theId=1;
			Teacher tempTeacher=session.get(Teacher.class, theId);
			//create some course
			Course course1=new Course("python");
			Course course2=new Course("java");
			//add course to teacher
			tempTeacher.add(course1);
			tempTeacher.add(course2);
			//save the course
			session.save(course1);
			session.save(course2);
			//commit transaction
			session.getTransaction().commit();
		}finally {
			//add a clean up code
			session.close();
			factory.close();
		}
	}
}
