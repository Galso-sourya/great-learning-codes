package com.gl.jdbc.meta;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;

import com.gl.jdbc.myconnections.MyConnection;

public class SampleMetaData {
	MyConnection mycon;
	public SampleMetaData() {//this is the constructor
		mycon=new MyConnection();
	}
	public void getDatabaseMetaDataInfo() {//this is not pre defined. this is user defined method. so we have to call it
		//from the main method
	Connection con=mycon.getMyConnection();	
	try {
		DatabaseMetaData dbmd=con.getMetaData();
		System.out.println("Database product name:"+dbmd.getDatabaseProductName());//pre defined methods
		System.out.println("Database product version:"+dbmd.getDatabaseProductVersion());
		System.out.println("Database major version:"+dbmd.getDatabaseMajorVersion());
		System.out.println("Database minor version:"+dbmd.getDatabaseMinorVersion());
		System.out.println("Driver name:"+dbmd.getDriverName());
		System.out.println("Driver version:"+dbmd.getDriverVersion());
		System.out.println("Driver major version:"+dbmd.getDriverMajorVersion());
		System.out.println("Driver minor version:"+dbmd.getDriverMinorVersion());
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	}
	public void getDatabaseMetaDataInfo1() {
		Connection con=mycon.getMyConnection();	
			try {
				DatabaseMetaData dbmd=con.getMetaData();
				ResultSet rs=dbmd.getTables(null, null, null, null);
				while(rs.next()) {
					System.out.println(rs.getString(3));
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}		
	}	
public void getResultSetMetaDataInfo() {
	Connection con=mycon.getMyConnection();	
	String query="select * from employees";
	try {
		Statement stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery(query);
		ResultSetMetaData rsmd=rs.getMetaData();
		System.out.println("column info:");
		System.out.println("column count:"+rsmd.getColumnCount());
		System.out.println("column name of 1st column:"+rsmd.getColumnName(1));
		System.out.println("column label of 1st column:"+rsmd.getColumnLabel(1));
		System.out.println("column type of 1st column:"+rsmd.getColumnType(1));
		System.out.println("column typename of 1st column:"+rsmd.getColumnTypeName(1));
		System.out.println("column name of 2nd column:"+rsmd.getColumnName(2));
		System.out.println("column label of 2nd column:"+rsmd.getColumnLabel(2));
		System.out.println("column type of 2nd column:"+rsmd.getColumnType(2));
		System.out.println("column typename of 2nd column:"+rsmd.getColumnTypeName(2));
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	}
public static void main(String[] args) {
	SampleMetaData smd=new SampleMetaData();
	System.out.println("Database info:");
	smd.getDatabaseMetaDataInfo();
	System.out.println("----------------------------------------------------------------------------------");
	System.out.println("The tables present are:");
	smd.getDatabaseMetaDataInfo1();//this will give all system pre defined tables too
	System.out.println("-------------result set meta data------------------------------------------------");
	smd.getResultSetMetaDataInfo();
}
}
