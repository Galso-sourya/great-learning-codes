package io.github.multithreading.synchronization;

class Thread2 implements Runnable{
MathUtils mu;//this the reference line of MathUtils
public Thread2(MathUtils mu) {//this is the constructor
	this.mu=mu;
}
public void run() {
	try {
		mu.getMultiples(3);
	}catch(Exception e) {//try catch is just given for safety purpose
		System.out.println("exception is caught");
	}
}
}
