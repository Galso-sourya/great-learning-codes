package com.gl.jdbc.client;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.Scanner;

import com.gl.jdbc.model.Employee;
import com.gl.jdbc.service.EmployeeService;

public class EmployeeDBManager {
	Connection mycon;
	Statement stmt;
	ResultSet rs;
	String reply="yes";
	Scanner scan=new Scanner(System.in);
	int choice;
	EmployeeService eService;
	public EmployeeDBManager() {
		eService=new EmployeeService();
	}
public void displayMenu() {
while(reply.equals("yes") || (reply.equals("YES"))) {
	System.out.println("--MAIN MENU--");
	System.out.println("1. View Employees...");
	System.out.println("2. View Employee by ID...");
	System.out.println("3. Insert Employee...");
	System.out.println("4. Updating Employee...");
	System.out.println("5. Delete Employees...");
	System.out.println("6. Exit Application...");
	System.out.println("enter your choice");
	choice=scan.nextInt();
	switch(choice) {
	case 1:
	{
		System.out.println("viewing employees");
		ArrayList<Employee>employees=eService.getEmployeesSvc();
		//now how to iterate over list?
		Iterator <Employee> eIter=employees.iterator();
		while(eIter.hasNext()) {//if you do not understand it, visit collection
			Employee e=eIter.next();
			System.out.println(e);
		}
		break;
	}
	case 2:
	{
		System.out.println("viewing employees by 	Id");
		String employeeId;
		System.out.println("enter the employee id you wish to see");
		employeeId=scan.next();
		Employee employee=eService.getEmployeebyId(employeeId);//service method pass to the dao
		System.out.println(employee);
		break;
	}
	case 3:
	{
		System.out.println("inserting employees");
		Employee employee=new Employee();
		String eId,eName,eAddr,ePhone;
		int eSal;
		float eTax;
		System.out.println("enter the id");
		eId=scan.next();
		System.out.println("enter the name");
		eName=scan.next();
		System.out.println("enter the address");
		eAddr=scan.next();
		System.out.println("enter the phone");
		ePhone=scan.next();
		System.out.println("enter the salary");
		eSal=scan.nextInt();
		System.out.println("enter the tax liability");
		eTax=scan.nextFloat();
		employee=new Employee(eId,eName,eAddr,ePhone,eSal,eTax);
		if(eService.insertEmployeeSvc(employee)) {
			//the statement eService.insertEmployeeSvc(employee) returns a boolean value
			System.out.println("success");
		}else {
			System.out.println("failed");	
		}
		
		break;
	}
	case 4:
	{
		System.out.println("updating employees");	
		String empId,empAddress;
		System.out.println("enter the employee id you wish to change the address of it");
		empId=scan.next();
		Employee employee=eService.getEmployeebyId(empId);
		System.out.println("the current data is as follows-");
		System.out.println(employee);
		System.out.println("enter new address");
		empAddress=scan.next();
		employee.setEmployeeAddress(empAddress);
		if(eService.updateEmployeeSvc(employee)) {
			System.out.println("success");
		}else {
			System.out.println("failed");	
		}
		break;
	}
	case 5:
	{
		System.out.println("deleting employees");
		String empId;
		System.out.println("enter the id u want to delete");
		empId=scan.next();
		if(eService.deleteEmployeeByIdSvc(empId)) {
			System.out.println("success");
		}else {
			System.out.println("failed");
		}
		break;
	}
	case 6:
	{
		System.out.println("exiting app");
		System.exit(0);
		break;
	}
	default:
	{
		System.out.println("enter 1-6");	
		break;
	}
	}
	System.out.println("do u wish to continue");
	reply=scan.next();
}	
}
}
