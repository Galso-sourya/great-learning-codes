package io.github.multithreading.volatiledemo;
public class ActorThread extends Thread{
@Override
public void run() {
	int value=VolatileDemo.SHARED_INT_VALUE;
	while(VolatileDemo.SHARED_INT_VALUE<5) {
		System.out.println("incrementing value,new value is: "+(value+1));
		VolatileDemo.SHARED_INT_VALUE=++value;
		try {
			Thread.sleep(500);
		}catch(InterruptedException e){
		e.printStackTrace();	
		}
	}
}
}
