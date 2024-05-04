package com.greatlearning.Driver;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.greatlearning.entity.Course;
import com.greatlearning.entity.Review;
import com.greatlearning.entity.Student;
import com.greatlearning.entity.Teacher;
import com.greatlearning.entity.TeacherDetails;

public class AddMoreCourses {
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
			int theStudentId=1;
			Student tempStudent=session.get(Student.class, theStudentId);
			//create more courses
			Course tempCourse1=new Course("cyber security");
			Course tempCourse2=new Course("game development");
			//add student to course
			tempCourse1.addStudent(tempStudent);
			tempCourse2.addStudent(tempStudent);
			//save the course
			session.save(tempCourse1);
			session.save(tempCourse2);
			//commit transaction
			session.getTransaction().commit();
		}finally {
			//add a clean up code
			session.close();
			factory.close();
		}
	}
}
