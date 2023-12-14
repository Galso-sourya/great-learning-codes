package com.gl.heap;
class MaxHeap{
	int[] arr;
	int size;
	int capacity;
	//in constructor,we initialize all of them
	public MaxHeap(int capacity) {
		this.capacity=capacity;
		arr=new int[capacity];
		size=0;
	}
	int getLeftChild(int i) {
		return 2*i+1;
	}
	int getRightChild(int i) {
		return 2*i+2;
	}
	int getParent(int i) {
		return (i-1)/2;
	}
	void insert(int ele) {
		if(size==capacity) {
		System.out.println("no more elements can be added");
		return;}
		arr[size++]=ele;
		heapifyUp(size-1);
	}
	void delete() {
		if(size==0) {
			System.out.println("no elements can be deleted");
			return;
		}
		arr[0]=arr[size-1];
		heapifyDown(0);
		size--;
	}
	void heapifyDown(int i) {
		int leftChild=getLeftChild(i);
		int rightChild=getRightChild(i);
		int max=i;
		if(leftChild<size && arr[max]<arr[leftChild])
			max=leftChild;
		if(rightChild<size && arr[max]<arr[rightChild])
			max=rightChild;
		if(max!=i) {
			int tmp=arr[i];
			arr[i]=arr[max];
			arr[max]=tmp;
			heapifyDown(max);
		}
	}
	void heapifyUp(int i) {
		if(i>0 && arr[i]>arr[getParent(i)]) {
			int tmp=arr[getParent(i)];
			arr[getParent(i)]=arr[i];
			arr[i]=tmp;
			heapifyUp(getParent(i));
		}
	}
	public void display() {
		for(int i=0;i<size;i++)
			System.out.println(arr[i]);
	}
}
class MaxHeapDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
MaxHeap heap=new MaxHeap(10);
heap.insert(5);
heap.insert(11);
heap.insert(7);
heap.insert(20);
heap.display();
heap.delete();
heap.display();
	}

}
