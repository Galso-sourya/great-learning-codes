package com.greatlearning.Driver;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.greatlearning.entity.Course;
import com.greatlearning.entity.Review;
import com.greatlearning.entity.Student;
import com.greatlearning.entity.Teacher;
import com.greatlearning.entity.TeacherDetails;

public class CreateCourseAndStudent {
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
			//create the objects of course class
			Course tempCourse=new Course("react");
			//create the objects of teacher class
			Teacher theTeacher=new Teacher("b");
			session.save(tempCourse);
			session.save(theTeacher);
			//create the students
			Student tempStudent1=new Student("c");
			Student tempStudent2=new Student("d");
			//add students to the course
			tempCourse.addStudent(tempStudent1);
			tempCourse.addStudent(tempStudent2);
			//save the students
			session.save(tempStudent1);
			session.save(tempStudent2);
			//commit transaction
			session.getTransaction().commit();
		}finally {
			//add a clean up code
			session.close();
			factory.close();
		}
	}
}
