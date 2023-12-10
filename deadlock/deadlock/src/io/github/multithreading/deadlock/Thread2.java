package io.github.multithreading.deadlock;

public class Thread2 implements Runnable{
private Class1 obj1;
private Class2 obj2;
public Thread2(Class1 obj1,Class2 obj2) {
	this.obj1=obj1;
	this.obj2=obj2;
}
public void run() {
	synchronized(obj2) {
System.out.println("thread2 got lock on obj2, waiting to get lock on obj1");
synchronized(obj1) {
System.out.println("thread2 got lock on obj1 also");
}
}
}
}