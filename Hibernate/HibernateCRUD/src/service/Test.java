package service;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import entity.Teacher;

public class Test {
public static void main(String[] args) {
	System.out.println("connecting.....");
	SessionFactory factory=null;
	Session session=null;
	List<Teacher>teachers=null;
	try {
	factory=new Configuration()
			.configure("hibernate.cfg.xml")
			.buildSessionFactory();
	System.out.println("created.....");
	Teacher t1=new Teacher("a");
	Teacher t2=new Teacher("b");
	session=factory.getCurrentSession();
	Transaction tx=null;
	tx=session.beginTransaction();
	session.save(t1);
	session.save(t2);
	Teacher teacher=session.get(Teacher.class,1);
	System.out.println("supplier"+teacher);
	teachers=session.createQuery("from Teacher").list();
	Teacher updateObj=session.get(Teacher.class,1);
	updateObj.setName("aa");
	session.update(updateObj);
	Teacher deleteObj=session.get(Teacher.class,2);
	session.delete(deleteObj);
	tx.commit();
	}catch(Exception e) {
		System.out.println("error"+e.getMessage());
		e.printStackTrace();
	}finally {
		session.close();
		factory.close();
	}
	for(Teacher m:teachers)
		System.out.println(m);	
}
}
