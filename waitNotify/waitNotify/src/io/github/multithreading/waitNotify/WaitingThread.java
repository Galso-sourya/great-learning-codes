package io.github.multithreading.waitNotify;

public class WaitingThread implements Runnable {
	public Integer value;
	public WaitingThread(Integer value) {
		this.value=value;
	}
	public void run() {
		// TODO Auto-generated method stub
synchronized(value) {
	try {
		System.out.println("waiting to get the lock");
		value.wait();
		System.out.println("waiting thread received notification by NotifierThread");
	}catch(InterruptedException e) {
		e.printStackTrace();
	}
}
	}

}
