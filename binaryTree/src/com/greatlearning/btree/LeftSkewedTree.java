package com.greatlearning.btree;
import java.util.Scanner;
public class LeftSkewedTree {
	static class Node{
        int key;
        Node left,right;
    };
    static Node newNode(int data){
    Node temp=new Node();
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
   static void leftNodes(Node root){
    if(root==null)
    return;
    else{
        System.out.print(root.key+" ");
        leftNodes(root.left);
    }   
   }
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
	    int value;
	    Node root=null;
	    Node result=null;
	    int[] arr={67,55,76,89,-21,12,-20,38,75};   
	    for(int i=0;i<arr.length;i++){
	         value=arr[i];
	         if(root==null){
	             root=insert(root,value);
	         }else{
	             result=insert(root,value);
	             if(result.key==value)
	             i-=1;
	         }
	         System.out.println();
	         System.out.println("Inorder of Binary Tree\n");
	     Inorder(root); 
	     } 
	     System.out.println("\n\nLeft skewed tree values");
	     leftNodes(root);
	     sc.close();
	}

}
