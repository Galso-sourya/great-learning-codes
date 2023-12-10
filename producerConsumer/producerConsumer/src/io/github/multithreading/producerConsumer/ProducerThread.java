package io.github.multithreading.producerConsumer;
import java.util.concurrent.BlockingQueue;
class ProducerThread implements Runnable{
private BlockingQueue<Integer> blockingQueue;
public ProducerThread(BlockingQueue<Integer> blockingQueue) {
	this.blockingQueue=blockingQueue;
}
@Override
public void run() {
	try {
		int value=0;
		while(true) {//it is a infinite loop
			blockingQueue.put(value);//this put method will only work if the queue is empty 
			//whose capacity is 5 as mentioned in driver code. if there is no space available,
			//the put function will be blocked
			System.out.println("produced"+value);
			value++;
			Thread.sleep(1000);//waiting for 1 sec
		}
	}catch(InterruptedException e) {
		e.printStackTrace();
	}
}
}
