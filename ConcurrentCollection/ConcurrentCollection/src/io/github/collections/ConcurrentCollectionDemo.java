package io.github.collections;
import java.util.ArrayList;
public class ConcurrentCollectionDemo {
public static void main(String args[]) {
	ArrayList<Integer>list=new ArrayList<>();//this is not thread safe
	//CopyOnWriteArrayList<Integer>list=new CopyOnWriteArrayList<>();
	list.add(1);
	list.add(2);
	list.add(3);
	list.add(4);
	try {
		for(Integer i:list) {//iterationg over all the elements of the list
			list.add(5);
			System.out.println(i);//printing all the elements.at the same time, we are also
			//adding a new element 5.2 operation at a time. so error. 
		}
	}catch(Exception e) {
		System.out.println(e);
	}
}
}
