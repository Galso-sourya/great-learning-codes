package com.gl.graphs.traversals.dfs;
//iteratively
import java.util.List;
import java.util.Stack;
public class DFSTraversal {
private Stack<Vertex>stack;
public DFSTraversal(Stack<Vertex> stack) {
	this.stack=stack;
}
public void dfsTraversal(List<Vertex>vertexList) {
	for(Vertex vertex:vertexList) {
		if(!vertex.isVisited()) {
			vertex.setVisited(true);
			dfsIter(vertex);
		}
	}
}
public void dfsIter(Vertex rootVertex) {
	this.stack.push(rootVertex);
	rootVertex.setVisited(true);
	while(!this.stack.isEmpty()) {
		Vertex currentVertex=this.stack.pop();
		System.out.println("visited:"+currentVertex);
	}
	for(Vertex v:currentVertex.getNeighbours()) {
	if(!v.isVisited()) {
		v.setVisited(true);
		this.stack.push(v);
	}	
	}
}
}
