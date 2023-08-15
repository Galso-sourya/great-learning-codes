package com.greatlearning.jdbc;
import java.sql.Connection;
public class Update {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String dbURL="jdbc:myql://localhot:3306/JDBC_Demo?useSSL=false";
		String userName="root";
		String password="Partha@1234";
		try(Connection conn=DriveManager.getConnection(jdbcUrl,username,password)){
			String sql="UPDATE Users SET password=?,fullname=?,email=? WHERE username=?";
			PreparedStatement statement=conn.prepareStatement(sql);
			statement.setString(1,"password8");
			statement.setString(2,"Aman8 Singh");
			statement.setString(3,"Aman8@google.org");
			statement.setString(4,"Aman6");
			int rowsUpdated=statement.executeUpdate();
			if(rowsUpdated>0) {
				System.out.println("An existing user was updated successfully!");
			}
		}catch(SQLException ex) {
			ex.printStackTrace();
		}
	}

}
