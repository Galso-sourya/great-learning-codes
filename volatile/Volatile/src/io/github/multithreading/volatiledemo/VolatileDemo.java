package io.github.multithreading.volatiledemo;

public class VolatileDemo {
static volatile int SHARED_INT_VALUE=0;
	public static void main(String[] args) {
		// TODO Auto-generated method stub
new ObserverThread().start();//this will catch or notice the change. to detect it.
new ActorThread().start();//this will change the value of the volatile variable
	}

}
