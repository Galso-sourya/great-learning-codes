package com.gl.jdbc.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import com.gl.jdbc.model.Employee;
import com.gl.jdbc.myconnections.MyConnection;

public class EmployeeDao {
	Connection myCon;
	Statement stmt;
	PreparedStatement pstmt;
	ResultSet rs;//to hold all the result
	MyConnection mCon;//this is the object of MyConnection
	public EmployeeDao() {//this is the constructor
		mCon=new MyConnection();
	}
public ArrayList <Employee> getEmployees(){//the type of the ArrayList is Employee. The function getEmployees() should
	//be called from service
	myCon=mCon.getMyConnection();
	ArrayList<Employee> employees=new ArrayList<Employee>();
	try {
		String query="select * from employees";
		stmt=myCon.createStatement();
		rs=stmt.executeQuery(query);//rs is a pointer pointing to all the records
		String eId,eName,eAddr,ePhone;
		int eSal;
		float eTax;//as we have 6 columns
		while(rs.next()) {//next method inside rs returns boolean value whether data is there or not row wise.
			Employee employee=new Employee();// the object employee will fetch all the data. we have to use an ArrayList
			eId=rs.getString(1);//1st column
			employee.setEmployeeId(eId);
			eName=rs.getString(2);
			employee.setEmployeeName(eName);
			eAddr=rs.getString(3);
			employee.setEmployeeAddress(eAddr);
			ePhone=rs.getString(4);
			employee.setEmployeePhone(ePhone);
			//employee.setEmployeePhone(rs.getString(4)); another method. we can write above 2 lines in one single line
			eSal=rs.getInt(5);
			employee.setEmployeeSalary(eSal);
			eTax=rs.getFloat(6);
			employee.setProfTax(eTax);
			//employee=new Employee(eId,eName,eAddr,ePhone,eSal,eTax); this we can also use as a sinle line instead of all 
			//setters separately like employee.setEmployeeId(eId); employee.setEmployeeName(eName); etc.
			employees.add(employee);
		}//the while loop is populating the ArrayLists 
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return employees;
}
public Employee getEmployeeById(String employeeId) {
	myCon=mCon.getMyConnection();
	Employee employee=new Employee();
	try {
		pstmt=myCon.prepareStatement("select * from Employees where employeeId=?");
		//select * from employees where employeeSalary>? and employeeAddress=?
		pstmt.setString(1, employeeId);
		rs=pstmt.executeQuery();
		rs.next();//as only one result. otherwise we have to use while loop if multiple result. we are assuming that 
		//id is a primary key though it is not mentioned
		String eId=rs.getString(1);
		String eName=rs.getString(2);
		String eAddr=rs.getString(3);
		String ePhone=rs.getString(4);
		int eSal=rs.getInt(5);
		float eTax=rs.getFloat(6);
		employee=new Employee(eId,eName,eAddr,ePhone,eSal,eTax);
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return employee;
}
public boolean insertEmployee(Employee employee) {
	boolean flag=false;
	myCon=mCon.getMyConnection();
	String query="insert into employees values(?,?,?,?,?,?)";
	try {
		pstmt=myCon.prepareStatement(query);
		pstmt.setString(1, employee.getEmployeeId());
		pstmt.setString(2, employee.getEmployeeName());
		pstmt.setString(3, employee.getEmployeeAddress());
		pstmt.setString(4, employee.getEmployeePhone());
		pstmt.setInt(5, employee.getEmployeeSalary());
		pstmt.setDouble(6, employee.getProfTax());
		pstmt.execute();
		flag=true;
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		flag=false;
		e.printStackTrace();
	}
	return flag;
}
public boolean updateEmployee(Employee employee) {
	boolean flag=false;
	myCon=mCon.getMyConnection();
	String query="update Employees set employeeAddress=? where employeeId=?";
	try {
		pstmt=myCon.prepareStatement(query);
		pstmt.setString(1, employee.getEmployeeAddress());
		pstmt.setString(2, employee.getEmployeeId());
		pstmt.execute();
		flag=true;
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		flag=false;
		e.printStackTrace();
	}
	return flag;
}
public boolean deleteEmployeeById(String employeeId) {
	boolean flag=false;
	myCon=mCon.getMyConnection();
	String query="delete from Employees where employeeId=?";
	try {
		PreparedStatement pstmt=myCon.prepareStatement(query);
		pstmt.setString(1, employeeId);
		pstmt.executeUpdate();
		flag=true;
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
		flag=false;
	}
	return flag;
}
}
