package io.github.multithreading.waitNotify;

public class NotifierThread implements Runnable{
public Integer value;
public NotifierThread(Integer value) {
	this.value=value;
}
public void run() {
	synchronized(value) {//this block is compulsory. to make it owner
		try {
			Thread.sleep(1000);
			System.out.println("now,notifier thread begins notifying the waiting threads...");
			value.notify();//this is an asynchronous call
			System.out.println("notifier thread finished notifying the waiting threads...");
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
}
}
