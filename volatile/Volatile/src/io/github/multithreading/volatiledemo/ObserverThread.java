package io.github.multithreading.volatiledemo;

public class ObserverThread extends Thread{
@Override
public void run() {
	int value=VolatileDemo.SHARED_INT_VALUE;
	while (value<5) {}
	if(value!=VolatileDemo.SHARED_INT_VALUE) {
		System.out.println("value got changed,new value is:"+VolatileDemo.SHARED_INT_VALUE);
		value=VolatileDemo.SHARED_INT_VALUE;
		//0 0
		//0 1
		//1 1
		//1 2
		//2 2. first one is this local variable and second one is the volatiledemo variable
	}
}
}
