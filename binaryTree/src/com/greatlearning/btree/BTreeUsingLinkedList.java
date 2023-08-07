package com.greatlearning.btree;
import java.util.Deque;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;
public class BTreeUsingLinkedList {
	static int value;
    static Scanner sc=new Scanner(System.in);
    Deque<Node> queue=new LinkedList<Node>();//object queue under deque
  //represent a node of binary tree
    static class Node{
        int key;
        Node left;
        Node right;//left and right pointers
    }
    //creating a new node
    static Node newNode(int data){
        Node temp=new Node();
         temp.key=data;
         temp.left=null;
         temp.right=null;
         return temp;
    }
    Node insertNode(Node root,int key){
        Node newnode=newNode(key);
        if(root==null){
            root=newnode;
            queue.add(root);
            return root;
        }else{//if root is not null, we are inserting nodes level by level
          Node node;//object is node whose class is Node
         node=queue.remove();
          System.out.println("parent is: "+node.key);
          if(node.left==null){
              node.left=newnode;
              queue.add(node.left);
              queue.addFirst(node);
              return root;
          } else if(node.right==null){
            node.right=newnode;
            queue.add(node.right);
            return root;  
          }
        }
        return root;
    }
    public void levelByLevel(Node root){//root is passed as argument
    Queue<Node> queue1=new LinkedList<Node>();
    queue1.add(root);
    while(!queue1.isEmpty()){
        Node tempNode=queue1.poll();
        System.out.print(tempNode.key+" ");
        //enqueue left node 
        if(tempNode.left!=null){
            queue1.add(tempNode.left);
        }
        //enque right node
        if(tempNode.right!=null){
        queue1.add(tempNode.right);    
        }
    }    
    }
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		BTreeUsingLinkedList bt=new BTreeUsingLinkedList();
	      Node root=null;//initially root is null
	      String status="a";
	      while(!status.equals("s")){
	          System.out.println("Enter value to insert:");
	          value=sc.nextInt();
	          root=bt.insertNode(root,value);
	          System.out.println("Binary tree after insert:");
	          bt.levelByLevel(root);
	          System.out.println("\nEnter s to stop or any char to continue insert");
	          status=sc.next();
	      } 
	      System.out.println("Program Completed Successfully");
	}

}
