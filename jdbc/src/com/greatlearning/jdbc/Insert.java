package com.greatlearning.jdbc;
import java.sql.Connection;
public class Insert {

	public static void main(String[] args) {
		String dbURL="jdbc:myql://localhot:3306/JDBC_Demo?useSSL=false";
		String userName="root";
		String password="Partha@1234";
		try(Connection conn=DriveManager.getConnection(jdbcUrl,userName,password)){
			String sql="INSERT INTO Users (username,password,fullname,email) VALUES (?,?,?,?)"
					PreparedStatement statement=conn.prepareStatement(sql);
			statement.setString(1,"aman6");
			statement.setString(2,"password6");
			statement.setString(3,"Aman6 Singh");
			statement.setString(4,"Aman6v2@gmail.com");
			int rowsInserted=statement.executeUpdate();
			if(rowsInserted>0) {
				System.out.println("A new user was inserted successfully!");
			}
		}catch(SQLException ex) {
			ex.printStackTrace();
		}
	}

}
