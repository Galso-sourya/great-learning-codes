package com.greatlearning.btree;
public class HeightOfTree {
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
   static int HeightOfTree(Node node){
     if(node==null)
     return 0;
     else{
      //compute the depth of each subtree
      int leftheight=HeightOfTree(node.left);//recursive function   
      int rightheight=HeightOfTree(node.right); 
      //use of larger one
      if(leftheight>rightheight)
      return (leftheight+1);
      else
      return (rightheight+1);
     }  
   }
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int value;
	     Node root=null;
	     int[] arr={67,55,76,89,-21,12,-20,38,75};
	     //inserting all the elements in binary search tree
	     for(int i=0;i<arr.length;i++){
	         value=arr[i];
	         if(root==null){
	             root=insert(root,value);
	         }else{
	             insert(root,value);
	         }
	     } 
	     System.out.println("Inorder of Binary Tree\n");
	     Inorder(root);
	      System.out.println("\nHeight of tree is: "+HeightOfTree(root)); 
	}

}
