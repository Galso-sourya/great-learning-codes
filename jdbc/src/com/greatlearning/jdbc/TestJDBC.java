package com.greatlearning.jdbc;
import java.sql.Connection;
public class TestJDBC {
public static void main(String[] args) {
	//JDBC_Demo is the schema name present in mysql
	String jdbcUrl="jdbc:myql://localhot:3306/JDBC_Demo?useSSL=false";
	//username and password for mysql login
	String userName="root";
	String password="Partha@1234";//if we change the password into Partha@123, it will throw the error
	try {
		System.out.println("Connecting to database");
		//using DriveManager to create connection
		Connection myConn=DriveManager.getConnection(jdbcUrl,userName,password);
		System.out.println("Connection successful");
	}
	//if wrong username or password, it will catch the error
	catch(Exception exc) {
		System.out.println("Error connecting db");
		exc.printStackTrace();
	}
}
}
