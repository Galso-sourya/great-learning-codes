package com.gl.annotations;
import java.util.List;
public class AnnotationDemonstrations {
	//target annotation tells where to use the custom annotation
	@interface MyFirstAnnotation{
		String methodDetails();
	}
	@SuppressWarnings("unchecked")
public void demoSupressWarning() {
List list=new ArrayList();
list.add("a");
list.add(1);
}
}
class Animal{
	public void eat() {
		System.out.println("animal is eating");}
}
class Cat extends Animal{
	@Override
	public void eat() {
		System.out.println("cat is eating");}	
}