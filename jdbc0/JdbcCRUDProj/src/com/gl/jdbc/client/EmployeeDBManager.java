package com.gl.jdbc.client;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.Iterator;

import com.gl.jdbc.service.EmployeeService;
import com.gl.jdbc.model.Employee;
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
while(reply.equals("Yes") || reply.equals("YES")) {
System.out.println("-------MAIN MENU----------");
System.out.println("1. View Employees...");
System.out.println("2. View Employee by ID...");
System.out.println("3. Insert Employee...");
System.out.println("4. Modify Employee...");
System.out.println("5. Delete Employee...");
System.out.println("6. Exit Application...");
System.out.println("Enter your choice...");
System.out.println("Enter your choice...");
choice=scan.nextInt();
switch(choice) {
case 1:
{
	System.out.println("Viewing Employees");
	ArrayList <Employee> employees=eService.getEmployeesSvc();
	Iterator <Employee> eIter=employees.iterator();
	System.out.println("The Employees Are...");
	while(eIter.hasNext()) {
	Employee e=eIter.next();
	System.out.println(e);
	}
	break;
}
case 2:
{
	System.out.println("Viewing Employee By Id");
	String employeeId;
	System.out.println("enter The Employee Id of the Employee whose record you wish to see..");
	employeeId=scan.next();
	Employee employee= eService.getEmployeebyId(employeeId);
	System.out.println(employee);
	break;
}
case 3:
{
	System.out.println("Inserting Employee");
	Employee employee=new Employee();
	String eId,eName,eAddr,ePhone;
	int eSal;
	float eTax;
	System.out.println("Enter the Employee Id");
	eId=scan.next();
	System.out.println("Enter the Employee Name");
	eName=scan.next();
	System.out.println("Enter the Employee Address");
	eAddr=scan.next();
	System.out.println("Enter the Employee Salary");
	eSal=scan.nextInt();
	System.out.println("Enter the Tax liability for the Employee");
	eTax=scan.nextFloat();
	System.out.println("Enter the Employee Phone");
	ePhone=scan.next();
	employee=new Employee(eId,eName,eAddr,ePhone,eSal,eTax);
	if(eService.insertEmployeeSvc(employee)) {
		System.out.println("success of insertion");
	}else {
		System.out.println("faliled");	
	}
	
	
	break;
}
case 4:
{
	System.out.println("Updateing Employee");
	String empId,empAddress;
	System.out.println("Enter the EmployeeId of the Employee whose Address you wish to change");
	empId=scan.next();
	Employee employee=eService.getEmployeebyId(empId);
	System.out.println("The Employee Record for the given Id is ");
	System.out.println(employee);
	System.out.println("Enter the New Address for this Employee that is to be uploaded");
	empAddress=scan.next();
	employee.setEmployeeAddress(empAddress);
	eService.updateEmployeeSvc(employee);
	if(eService.updateEmployeeSvc(employee)) {
		System.out.println("success of update");
	}else {
		System.out.println("faliled to update");	
	}
	break;
}
case 5:
{
	System.out.println("Deleteing Employee By Id");
	String empId;
	System.out.println("Enter the EmployeeId of the Employee whose record you wish to delete");
	empId=scan.next();
	if(eService.deleteEmployeeByIdSvc(empId)) {
		System.out.println("success of deletion");
	}else {
		System.out.println("faliled to delete");	
	}
	break;
}
case 6:
{
	System.out.println("Exiting Application");
	System.exit(0);
	break;
}
default:
{
	System.out.println("Sorry Allowed options are 1-6");
	break;
}
}
System.out.println("Do you wish to continue yes/no");
reply=scan.next();
}
}
}
