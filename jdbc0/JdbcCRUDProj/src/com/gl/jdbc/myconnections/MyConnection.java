package com.gl.jdbc.myconnections;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MyConnection {
Connection con;
String user="root";//this is the username of mySQL
String password="admin";//this is the password of the work bench what need to be noted or memorized
String url="jdbc:mysql://localhost:3306/javajdbc";//find the port name from mySQL workbench under source tag
//localhost here is the system name and javajdbc is the database name
public Connection getMyConnection() {
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");//how to find it?go to jars in referenced libraries. search for 
		//com.mysql.cj.jdbc and under that, there will be calass called Driver.here we are loading the driver
		con=DriverManager.getConnection(url, user, password);//here we are establishing the connection
	} 
	catch(ClassNotFoundException cfe){
	cfe.printStackTrace();	
	}
	catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return con;
}
}
