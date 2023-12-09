package io.github.multithreading.synchronization;

public class SynchronizationDemo {
public static void main(String args[]) {
	MathUtils obj=new MathUtils();
	Thread1 t1=new Thread1(obj);//initializing thread1
	Thread t2=new Thread(new Thread2(obj));//initializing thread2
	t1.start();
	t2.start();//starting the two threads. thread 1 will start first. when it will be finished, then
	//only the second one will start
}
}
