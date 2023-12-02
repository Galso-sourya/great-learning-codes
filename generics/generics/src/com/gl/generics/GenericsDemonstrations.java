package com.gl.generics;
import java.util.List;
public class GenericsDemonstrations {
public static void main(String[] args) {
	MyFirstGenClass<String>obj1=new MyFirstGenClass<>();
	obj1.setMyObject("viswa");
	System.out.println(obj1.getMyObject());
	GenericMethod genericMethod=new GenericMethod();
	Integer[] arrI= {1,2,3,4,5};
	genericMethod.printElements(arrI);
}
}
//generic class contains a generic parameter which is T. T for type. applicable for any kind
//of data type. apart from T, other type parameters are-
//E for element, K for key, N for number and V for value
class MyFirstGenClass<T>{
	private T myObject;
	//declare getter and setter
	public T getMyObject() {
		return myObject;
	}
	public void setMyObject(T myObject) {
		this.myObject=myObject;
	}
}
//generic method
class GenericMethod{
	public <E> void printElements(E[] elements) {
		for(int i=0;i<elements.length;i++) {
			System.out.println(elements[i]);
		}
	}
}
//wildcards are denoted by ? which represents any kind of data type
interface MyDrawings{
	void draw();
}
class Circle implements MyDrawings{
	@Override
	public void draw() {
		System.out.println("plotting circle");
	}
}
class Polygon implements MyDrawings{
	@Override
	public void draw() {
		System.out.println("plotting polygon");
	}
}
class DiagramPlotter{
	public void 
}