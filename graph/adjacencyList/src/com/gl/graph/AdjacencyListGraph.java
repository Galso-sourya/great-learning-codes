package com.gl.graph;

public class AdjacencyListGraph {
//create array of vertex
	private Vertex[] vertices;
	private int vertexCount;
	//initialize the size by constructor
	public AdjacencyListGraph(int vertexCount) {
		this.vertexCount=vertexCount;
		vertices=new Vertex[vertexCount]; 
	}
	//this method will add vertex2 as neighbor of vertex1 for directed graph
	public void addNeighbour(Vertex vertex1,Vertex vertex2) {
	if(vertex1!=null && vertex2!=null) {
		vertex1.addNeighbour(vertex2);
		//vertex2.addNeighbour(vertex1);this line should be added if it is a undirected graph
	}	
	}
	public void printAllEdges() {
		for(Vertex v:vertices) {
			v.showNeighbours();
		}
	}
	public Vertex[] getVertices() {
		return vertices;
	}
	public void setVertices(Vertex[] vertices) {
		this.vertices=vertices;
	}
	public int getVertexCount() {
		return vertexCount;
	}
	public void setVertexCount(int vertexCount) {
		this.vertexCount=vertexCount;
	}
}
