package com.gl.graphs;

public class TestGraph {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		AdjacencyMatrixGraph adjacencyMatrixGraph=new AdjacencyMatrixGraph(vertexCount:4);
		adjacencyMatrixGraph.addEdge(i:0, j:1);
		adjacencyMatrixGraph.addEdge(i:0, j:2);
		adjacencyMatrixGraph.addEdge(i:2, j:3);
		adjacencyMatrixGraph.getAllEdges();
	}

}
