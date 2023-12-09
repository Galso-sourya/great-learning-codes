package io.github.multithreading.synchronization;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
public class MathUtils {
Lock locker=new ReentrantLock();
void getMultiples(int n) {
	//synchronized(this) {//to execute one thread at a time
	try {
	locker.lock();//starting point of locking
		for(int i=1;i<=5;i++) {
			System.out.println(n*i);//if input is given 5, the output will be 5 10 15 20 25
			//5 multiples of the given number
			try {
				Thread.sleep(500);
			}catch(Exception e) {
				System.out.println(e);	
			}}}finally {
		locker.unlock();}//ending point of safing thread like synchronization
//always keep lock in try and finally with unlock but why? unnecessary?? or have a purpose?		
	//}
		
}
}
