package com.greatlearning.btree;
import java.util.Scanner;
public class BstCreation {
	//bst node
    static class Node{
    int key;
    Node left,right;    
    };
    //creation of new node
   static Node newNode(int data) {
   Node temp=new  Node();
   temp.key=data;
   temp.left=null;
   temp.right=null;
   return temp;   
   }
   static Node insert(Node root,int key){
  Node newnode=newNode(key);
  Node x=root;
  Node y=null; // y maintains pointer to x
  while(x!=null){
      y=x;//copying pointer x to y
      if(key<x.key)
      x=x.left;
      else if(key>x.key)
      x=x.right;
      else{//duplicate value is not allowed in binary search tree
          System.out.println("value already exists");
          return newnode;
      }
  }
  //if the root is null, the tree is empty
  if(y==null)
  y=newnode;//insert a new node in this case
  //assign new node to left child
  else if(key<y.key) 
 y.left=newnode;   
 //assign new node to right child
 else
 y.right=newnode;   
 //return pointer to new node 
 return y;
 
   }
   static void Inorder(Node root){
   if(root==null) 
   return; 
   else{
       Inorder(root.left);
       System.out.print(root.key+" ");
       Inorder(root.right);
       
   }  
   }
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
	     int value,num;
	     System.out.println("enter no of values: ");  
	     num=sc.nextInt();
	     Node root=null;
	     Node result=null;//initialization with null value
	     for(int i=0;i<num;i++){//taking input one by one from the user
	      System.out.println("\nInsert value at ");
	      value=sc.nextInt();
	      if(root==null){
	          root=insert(root,value);
	      }  else{
	        result=insert(root,value); 
	        if(result.key==value)
	        i-=1; 
	      }
	      System.out.println("Inorder of Binary Tree");
	      Inorder(root);
	     } 
	     sc.close();
	}

}
