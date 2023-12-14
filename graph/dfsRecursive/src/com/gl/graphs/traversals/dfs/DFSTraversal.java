package com.gl.graphs.traversals.dfs;
import java.util.List;
public class DFSTraversal {
	//if we have cluster of unconnected graphs, we need an extra function
	public void dfsTraversal(List<Vertex>vertexList) {
	for(Vertex vertex:vertexList) {
		if(!vertex.isVisited()) {
			vertex.setVisited(true);
			dfsRec(vertex);
		}
	}
	
	}
public void dfsRec(Vertex rootVertex) {
	//base condition check
	if(rootVertex==null) {
		return;
	}
	System.out.println("visited vertex:"+rootVertex);
	for(Vertex neighbour:rootVertex.getNeighbours()) {
		if(!neighbour.isVisited()) {
			neighbour.setVisited(true);
			dfsRec(neighbour);
		}
	}
}
}
