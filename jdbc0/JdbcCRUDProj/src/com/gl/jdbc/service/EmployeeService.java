package com.gl.jdbc.service;

import java.util.ArrayList;

import com.gl.jdbc.dao.EmployeeDao;
import com.gl.jdbc.model.Employee;

public class EmployeeService {
	EmployeeDao eDao;//we have to call dao also here
	public EmployeeService() {//this is the constructor
		eDao=new EmployeeDao();//we created the object eDao. now we are calling it here 
	}
public ArrayList<Employee>getEmployeesSvc(){//this function should be invoked from the mail menu
return eDao.getEmployees();	
}
public Employee getEmployeebyId(String eId) {
	return eDao.getEmployeeById(eId);
}
public boolean insertEmployeeSvc(Employee employee) {
	return eDao.insertEmployee(employee);
}
public boolean updateEmployeeSvc(Employee employee) {
	return eDao.updateEmployee(employee);
}
public boolean deleteEmployeeByIdSvc(String employeeId) {
	return eDao.deleteEmployeeById(employeeId);
}
}
