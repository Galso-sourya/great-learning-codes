package io.github.multithreading.waitNotify;

class WaitNotifyDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Integer value=Integer.valueOf(10);//initializing the value as 10
Thread waitingThread=new Thread(new WaitingThread(value));
waitingThread.start();
Thread notifierThread=new Thread(new NotifierThread(value));
notifierThread.start();
	}

}
