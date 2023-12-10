package com.gl.fileHandling;

import java.io.FileWriter;

public class FileHandlingDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
//first we have to create a file object
File file=new File(pathname:"myFile.txt");	
FileWriter fileWriter=new FileWriter(file,append:true);//true means if the file already exists,
//we will append
fileWriter.write(str:"hello");
fileWriter.flush();
fileWriter.close();
//to read the file, we have to again create the file object
File file=new File(pathname:"myFile.txt");	
FileReader fileReader=new FileReader(file);
int myChar=-1;
while((myChar=fileReader.read())!=-1) {
	System.out.print((char)myChar);
}
System.out.println();
	}

}
