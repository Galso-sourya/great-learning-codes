package com.gl.generics;
import java.util.ArrayList;
public class Demo {

	public static void main(String[] args) {
		ArrayList<String>myList=new ArrayList<String>();
		//myList.add(123); this line throw an error during compilation
String name=myList.get(0);//no need to type cast. It is automatic
	}

}
