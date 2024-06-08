package com.greatlearning.main;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.datasource.SimpleDriverDataSource;

import com.greatlearning.entity.Employee;

public class Main {

	//before main steps, we have to configure our database
	//for that,we have to create 2 objects below
	static JdbcTemplate jdbcTemplateObj;
	static SimpleDriverDataSource dataSourceObj;
	//1st step is to create connection
	// Db Configuration
	static String USERNAME = "root";
	static String PASSWORD = "admin";
	static String URL = "jdbc:mysql://localhost:3306/springjdbc";

	public static SimpleDriverDataSource getDatabaseConnection()  {
		//2nd step is to inform spring code about database
		dataSourceObj = new SimpleDriverDataSource();
		try {       
			//3rd step is setting driver class
			dataSourceObj.setDriver(new com.mysql.cj.jdbc.Driver());
			dataSourceObj.setUrl(URL);
			dataSourceObj.setUsername(USERNAME);
			dataSourceObj.setPassword(PASSWORD);
		} catch(SQLException sqlException) {
			sqlException.printStackTrace();
		}
		return dataSourceObj;
	}

	public static void main(String[] args) throws SQLException {
		
		// Setting Driver Class Name, Database URL, UserName & Password
		jdbcTemplateObj = new JdbcTemplate(getDatabaseConnection());

		if(null != jdbcTemplateObj) {

			// SQL INSERT Operation
			String sqlInsertQuery = "INSERT INTO Employee (name, email, address, phoneNo) VALUES (?, ?, ?, ?)";
			for(int i=1; i<5; i++) {
				jdbcTemplateObj.update(sqlInsertQuery, "Employee " + i, "Employee" + i +"@greatlearning.in", "Gurugram", "0123456789");
			}

			
			  // SQL UPDATE Operation 
		    	String sqlUpdateQuery = "UPDATE Employee set email=? where name=?";
			  jdbcTemplateObj.update(sqlUpdateQuery, "admin@greatlearning.com", "Employee 2");
			 
			//  SQL READ Operation
			String sqlSelectQuery = "SELECT name, email, address, phoneNo FROM Employee";
			
			List listEmployees = jdbcTemplateObj.query(sqlSelectQuery, new RowMapper() {
				public Employee mapRow(ResultSet result, int rowNum) throws SQLException {
					Employee employeeObj = new Employee();
					employeeObj.setName(result.getString("name"));
					employeeObj.setEmail(result.getString("email"));
					employeeObj.setAddress(result.getString("address"));
					employeeObj.setPhoneNo(result.getString("phoneNo"));
					return employeeObj;
				}
			});

			// Displaying SQL Records on console
			for (Object employeeDetail : listEmployees) {
				System.out.println(employeeDetail.toString());
			}
			// SQL DELETE Operation
			
			  String sqlDeleteQuery = "DELETE FROM Employee where name=?";
			  jdbcTemplateObj.update(sqlDeleteQuery, "Employee 1");
			//close the connection	 
		} else {
			System.out.print("Please check connection details , unable to connect to the database.");
		}
	}


}
