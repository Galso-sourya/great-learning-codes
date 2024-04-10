package com.gl.jdbc.model;

public class Employee {
/*
employeeId varchar(20),
employeeName varchar(100),
employeeAddress varchar(100),
employeePhone varchar(50),
employeeSalary int,
professionalTax float
the above code is of mySQL but the equivalent code of it in java is as follows-*/
	String employeeId;
	String employeeName;
	String employeeAddress;
	String employeePhone;
	int employeeSalary;
	double profTax;
	public Employee() {//this is the default constructor
		super();
	}
	//the below one is called the overall constructor
public Employee(String employeeId, String employeeName, String employeeAddress, String employeePhone,
			int employeeSalary, double profTax) {
		super();
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.employeeAddress = employeeAddress;
		this.employeePhone = employeePhone;
		this.employeeSalary = employeeSalary;
		this.profTax = profTax;
	}
@Override
public String toString() {
	return "Employee [employeeId=" + employeeId + ", employeeName=" + employeeName + ", employeeAddress="
			+ employeeAddress + ", employeePhone=" + employeePhone + ", employeeSalary=" + employeeSalary + ", profTax="
			+ profTax + "]";
}
public String getEmployeeId() {
	return employeeId;
}
public void setEmployeeId(String employeeId) {
	this.employeeId = employeeId;
}
public String getEmployeeName() {
	return employeeName;
}
public void setEmployeeName(String employeeName) {
	this.employeeName = employeeName;
}
public String getEmployeeAddress() {
	return employeeAddress;
}
public void setEmployeeAddress(String employeeAddress) {
	this.employeeAddress = employeeAddress;
}
public String getEmployeePhone() {
	return employeePhone;
}
public void setEmployeePhone(String employeePhone) {
	this.employeePhone = employeePhone;
}
public int getEmployeeSalary() {
	return employeeSalary;
}
public void setEmployeeSalary(int employeeSalary) {
	this.employeeSalary = employeeSalary;
}
public double getProfTax() {
	return profTax;
}
public void setProfTax(double profTax) {
	this.profTax = profTax;
}
}
