package com.greatlearning.Driver;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.greatlearning.entity.Course;
import com.greatlearning.entity.Review;
import com.greatlearning.entity.Student;
import com.greatlearning.entity.Teacher;
import com.greatlearning.entity.TeacherDetails;
public class InsertCourseAndReview {
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
			//create the objects
			Course tempCourse=new Course("python2");
			Teacher tempTeacher=session.get(Teacher.class,1);
			//add some review
			tempCourse.addReview(new Review("good"));
			tempCourse.addReview(new Review("awsome"));
			tempTeacher.add(tempCourse);
			//save the course and leverage the cascade all
			session.save(tempCourse);
			//commit transaction
			session.getTransaction().commit();
		}finally {
			//add a clean up code
			session.close();
			factory.close();
		}
	}
}
