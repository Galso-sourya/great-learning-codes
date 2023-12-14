package com.gl.graph;

public class TestGraph {

	public static void main(String[] args) {
		// To define it
AdjacencyListGraph adjacencyListGraph=new AdjacencyListGraph(vertexCount:4);
Vertex vertex1=new Vertex(name:"A");
Vertex vertex2=new Vertex(name:"B");
Vertex vertex3=new Vertex(name:"C");
Vertex vertex4=new Vertex(name:"D");
adjacencyListGraph.getVertices()[0]=vertex1;
adjacencyListGraph.getVertices()[1]=vertex2;
adjacencyListGraph.getVertices()[2]=vertex3;
adjacencyListGraph.getVertices()[3]=vertex4;
adjacencyListGraph.addNeighbour(vertex1,vertex2);
adjacencyListGraph.addNeighbour(vertex1,vertex3);
adjacencyListGraph.addNeighbour(vertex2,vertex3);
adjacencyListGraph.addNeighbour(vertex3,vertex4);
adjacencyListGraph.printAllEdges();
	}

}
