package com.gl.graphs.traversals.dfs;
import java.util.ArrayList;
import java.util.List;
public class Test {
public static void main(String[] args) {
	Vertex v1=new Vertex(name:"A");
	Vertex v2=new Vertex(name:"B");
	Vertex v3=new Vertex(name:"C");
	Vertex v4=new Vertex(name:"D");
	Vertex v5=new Vertex(name:"E");
	v1.addNeighbour(v2);
	v1.addNeighbour(v3);
	v1.addNeighbour(v4);
	v1.addNeighbour(v5);
	List<Vertex>vertexList=new ArrayList<>();
	vertexList.add(v1);
	vertexList.add(v2);
	vertexList.add(v3);
	vertexList.add(v4);
	vertexList.add(v5);
	DFSTraversal dfsTraversal=new DFSTraversal();
	//this will traverse the above created graph using DFS recursively
	dfsTraversal.dfsTraversal(vertexList);
}
}
