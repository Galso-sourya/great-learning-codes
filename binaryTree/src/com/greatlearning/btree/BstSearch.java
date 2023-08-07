package com.greatlearning.btree;
import java.util.Scanner;
public class BstSearch {
	//BST node
	 static class Node{
	 int key;
	 Node  left,right;   
	 }; 
	 //creation of new node
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
	   Node current_parent=null;   
	   while(x!=null){
	   current_parent=x;
	     if(key<x.key)
	     x=x.left;  
	     else if(key>x.key)
	     x=x.right; 
	     else{
	     System.out.println("value already exists");
	         return newnode;
	     } 
	   }
	   }
	   static void Inorder(Node root){
	     if(root==null)
	     return;
	     else{
	      Inorder(root.left);//call the inorder method for left subtree.
	      //recursive call
	      System.out.print(root.key+" ");//print the value of the root
	      Inorder(root.right); 
	     }
	   }

	   static boolean search(Node root,int key){
	    root=search_Recursive(root,key);
	    if(root!=null)
	    return true;
	    else 
	    return false; 
	   }
	   
	   static Node search_Recursive(Node root, int key){
	     //when root is null or key is present at root
	     if(root==null || root.key==key)
	     return root;
	     //when value is greater than root's key
	     if(root.key>key)
	     return search_Recursive(root.left,key);
	     //when value is less than root's key
	     return search_Recursive(root.right,key);
	   }
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
