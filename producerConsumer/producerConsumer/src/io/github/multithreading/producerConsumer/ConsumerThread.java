package io.github.multithreading.producerConsumer;
import java.util.concurrent.BlockingQueue;
class ConsumerThread implements Runnable{
	private BlockingQueue<Integer> blockingQueue;
	public ConsumerThread(BlockingQueue<Integer> blockingQueue) {
		this.blockingQueue=blockingQueue;
	}
	@Override
	public void run() {
		try {
			while(true) {//it is a infinite loop
				int value=blockingQueue.take();//take is actually a dequeue method
				//if there is nothing to remove, it will block itself.it will wait for other 
				//threads to add element. it will not be immediately end. once a new one is added, it 
				//will again start removing
				System.out.println("consumed"+value);
				Thread.sleep(1000);//waiting for 1 sec
			}
		}catch(InterruptedException e) {
			e.printStackTrace();
		}
	}
	}
