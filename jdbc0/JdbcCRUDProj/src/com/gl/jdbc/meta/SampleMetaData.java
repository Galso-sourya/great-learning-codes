package com.gl.jdbc.meta;
import java.sql.Statement;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import com.gl.jdbc.myconnections.MyConnection;
public class SampleMetaData {
MyConnection mycon;
public SampleMetaData() {
	mycon=new MyConnection();
}
public void getDatabaseMetaDataInfo() {
Connection con=mycon.getMyConnection();
try {
	DatabaseMetaData dbmd=con.getMetaData();
	System.out.println(dbmd.getDatabaseProductName());
	System.out.println(dbmd.getDatabaseProductVersion());
	System.out.println(dbmd.getDatabaseMajorVersion());
	System.out.println(dbmd.getDatabaseMinorVersion());
	System.out.println(dbmd.getDriverName());
	System.out.println(dbmd.getDriverVersion());
	System.out.println(dbmd.getDriverMajorVersion());
	System.out.println(dbmd.getDriverMinorVersion());
} catch (SQLException e) {
	// TODO Auto-generated catch block
	e.printStackTrace();
}
}
public void getDatabaseMetaDataInfo1() {
	Connection con=mycon.getMyConnection();
		try {
			DatabaseMetaData dbmd=con.getMetaData();
			ResultSet rs=dbmd.getTables(null,null,null,null);
			System.out.println("The Tables Present are ");
			while(rs.next()) {
				System.out.println(rs.getString(3));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
}
public void getReultSetMetaDataInfo() {
	Connection con=mycon.getMyConnection();
	String query="select * from employees";
	try {
		Statement stmt=con.createStatement();
		ResultSet rs=stmt.executeQuery(query);
		ResultSetMetaData rsmd=rs.getMetaData();
		System.out.println("the Column info ");
		System.out.println(rsmd.getColumnCount());
		System.out.println(rsmd.getColumnLabel(1));
		System.out.println(rsmd.getColumnName(1));
		System.out.println(rsmd.getColumnType(1));
		System.out.println(rsmd.getColumnTypeName(1));
		
		System.out.println(rsmd.getColumnLabel(2));//for 2nd column
		System.out.println(rsmd.getColumnName(2));
		System.out.println(rsmd.getColumnType(2));
		System.out.println(rsmd.getColumnTypeName(2));
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
SampleMetaData smd=new SampleMetaData();
System.out.println("Database Info ");
smd.getDatabaseMetaDataInfo();
System.out.println("-----------------------");
System.out.println("TABLE Present");
smd.getDatabaseMetaDataInfo1();
	}

}
