package com.greatlearning.btree;
import java.util.Scanner;
public class BstDeletion {
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
		  static void deleteNode(Node root,int key){
		      root=delete_Recursive(root,key);
		  }
		  //recursive delete function
		  static Node delete_Recursive(Node root,int key){
		      //when tree is empty
		      if(root==null)
		      return root;
		      if(key<root.key)//traverse left subtree
		      root.left=delete_Recursive(root.left,key);
		      if(key>root.key)//traverse right subtree
		      root.right=delete_Recursive(root.right,key);
		      else{
		          //node contains only one or no child nodes
		          if(root.left==null)
		          return root.right;
		          else if(root.right==null)
		          return root.left;
		          //node contains 2 children
		          //find inorder successor.i.e.,min value in right subtree
		          root.key=minValue(root.right);//root.right is a node 
		          //delete the inorder successor
		          root.right=delete_Recursive(root.right,root.key);
		      }
		      return root;
		  }
		  static int minValue(Node root){//we are passing here root.right which is a node
		      //initially minval=root
		      int minval=root.key;
		      //find minval
		      while(root.left!=null){//it is keep on going to left sub tree
		          minval=root.left.key;
		          root=root.left;
		      }
		      return minval;
		  }
		  static boolean search(Node root,int key){
		      root=search_Recursive(root,key);
		      if(root!=null)
		      return true;
		      else
		      return false;
		  }
		  static Node search_Recursive(Node root,int key){
		  //when root is null or key is present at
		  if(root==null || root.key==key)
		  return root;
		  //when value is greater than root's key
		  if(root.key>key)
		  return search_Recursive(root.left,key);
		  //when value is less than root's key
		  return search_Recursive(root.right,key);}
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
	     int value;
	     boolean status;
	     Node root=null;
	      int[] arr={34,1,89,22,19,38};
	      for(int i=0;i<arr.length;i++){
	          value=arr[i];
	          if(root==null){
	              root=insert(root,value);
	          }else{
	              insert(root,value);
	          }
	      }  
	      System.out.println("Inorder of Binary Tree!!!");
	      Inorder(root);
	      int stop=-1;
	      while(stop!=0){
	          System.out.println("\nEnter value to delete");
	          int val=sc.nextInt();
	          status=search(root,val);
	          if(status==true){
	              deleteNode(root,val);
	              System.out.println("\nInorder of Binary Tree");
	              Inorder(root);
	              System.out.println("\nValue found and deleted successfully");
	              if(sc.nextInt()==0){
	                  stop=0;
	              }
	          }else{
	            System.out.println("\nValue not found!!!!!"+"\nEnter 0 to stop or Enter any value to continue");  
	            if(sc.nextInt()==0){
	             stop=0;   
	            }
	          }
	      }
	      System.out.println("program completed successfully");
	      sc.close();
	}

}
