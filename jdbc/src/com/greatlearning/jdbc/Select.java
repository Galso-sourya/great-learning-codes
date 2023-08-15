package com.greatlearning.jdbc;
import java.sql.Connection;
public class Select {

	public static void main(String[] args) {
		String dbURL="jdbc:myql://localhot:3306/JDBC_Demo?useSSL=false";
		String userName="root";
		String password="Partha@1234";
		try(Connection conn=DriveManager.getConnection(jdbcUrl,userName,password)){
			String sql="SELECT * FROM Users";
			Statement statement=conn.createStatement();
			ResultSet result=statement.executeQuery(sql);
			int count=0;
			while(result.next()) {
				String name=result.getString(1);
				String pass=result.getString(1);
				String fullname=result.getString("fullname");
				String email=result.getString("email");
				String output="User #%d: %s-%s-%s-%s";
				System.out.println(String.format(output, ++count,name,pass,fullname,email));
			}
		}catch(SQLException ex) {
		ex.printStackTrace();	
		}

	}

}
