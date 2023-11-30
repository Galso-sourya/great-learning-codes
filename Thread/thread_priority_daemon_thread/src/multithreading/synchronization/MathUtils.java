package multithreading.synchronization;

public class MathUtils {
//void getMultiples(int n) { here the output will be generated randomly
	synchronized void getMultiples(int n) {
	//synchronized (this){
	for(int i=1;i<=5;i++) {
		System.out.println(n*i);
		try {
			Thread.sleep(500);
		}catch(Exception e) {
		System.out.println(e);	
		}
	}
	//}
}
}
