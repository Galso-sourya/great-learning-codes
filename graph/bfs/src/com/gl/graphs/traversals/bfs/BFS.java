package com.gl.graphs.traversals.bfs;
import java.util.LinkedList;
import java.util.Queue;
public class BFS {
public void bfsTraverse(Vertex root) {
	Queue<Vertex>q=new LinkedList<>();
	root.setVisited(true);
	q.add(root);
	while(!q.isEmpty()) {
		Vertex currentVertex=q.remove();
		System.out.println("visited vertex:"+currentVertex);
		//this for loop will give all the vertices which is neighbor to current vertex
		for(Vertex v:currentVertex.getAdjList()) {
		if(!v.isVisited()) {
			v.setVisited(true);
			q.add(v);
		}	
		}
	}
}
}
