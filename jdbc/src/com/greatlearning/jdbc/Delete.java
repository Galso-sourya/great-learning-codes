package com.greatlearning.jdbc;
import java.sql.Connection;
public class Delete {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String dbURL="jdbc:myql://localhot:3306/JDBC_Demo?useSSL=false";
		String userName="root";
		String password="Partha@1234";
		try(Connection conn=DriveManager.getConnection(jdbcUrl,username,password)){
			String sql="DELETE FROM users WHERE username=?";
			PreparedStatement statement=conn.prepareStatement(sql);
			statement.setString(1,"aman6");
			int rowsDeleted=statement.executeUpdate();
			if(rowsDeleted>0) {
				System.out.println("An user was deleted successfully!");
			}
		}catch(SQLException ex) {//if user does not exist, it will throw this error
			ex.printStackTrace();
		}
	}

}
