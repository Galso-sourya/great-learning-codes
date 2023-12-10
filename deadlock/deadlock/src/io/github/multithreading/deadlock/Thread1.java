package io.github.multithreading.deadlock;

public class Thread1 implements Runnable{
private Class1 obj1;
private Class2 obj2;
public Thread1(Class1 obj1,Class2 obj2) {
	this.obj1=obj1;
	this.obj2=obj2;
}
public void run() {
	synchronized(obj1) {//by this line, we are locking obj1 for thread1
		//how to fix the problem? both threads should follow the same sequence. like we can 
		//change it into obj2 like thread 2 and then obj1.
		try {
			Thread.sleep(100);
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
		System.out.println("thread1 got lock on obj1 waiting to get lock on obj2");
		synchronized(obj2) {//nested synchronized block, not the independent one
			System.out.println("thread1 got lock on obj2 also");	
		}
	}
}
}
