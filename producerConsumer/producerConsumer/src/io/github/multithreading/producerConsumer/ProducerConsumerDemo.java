package io.github.multithreading.producerConsumer;
import java.util.concurrent.BlockingQueue;
public class ProducerConsumerDemo {

	public static void main(String[] args) throws InterruptedException{
		// TODO Auto-generated method stub
BlockingQueue<Integer> blockingQueue=new BlockingQueue<>(5);
Thread producerThread=new Thread(new ProducerThread(blockingQueue));
Thread consumerThread=new Thread(new ConsumerThread(blockingQueue));
producerThread.start();
consumerThread.start();
producerThread.join();//we are forcing producer thread to complete first to start consumer thread
consumerThread.join();
	}

}
