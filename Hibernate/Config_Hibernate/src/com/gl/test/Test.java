package com.gl.test;
import java.sql.Connection;
import java.sql.DriverManager;
public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String jdbc="jdbc:mysql://localhost:3306/javajdbc";
		String user="root";
		String pass="admin";
		try {
			System.out.println("jdbc url:"+jdbc);
			Connection myConn=DriverManager.getConnection(jdbc,user,pass);
			System.out.println("success");
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}

}
