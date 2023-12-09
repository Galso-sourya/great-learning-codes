package io.github.multithreading.synchronization;

class Thread1 extends Thread{
MathUtils mu;
public Thread1(MathUtils mu) {//this is the constructor
	this.mu=mu;
}
public void run() {
	try {
		mu.getMultiples(2);
	}catch(Exception e) {//try catch is just given for safety purpose
		System.out.println("exception raised"+e);
	}
}
}
