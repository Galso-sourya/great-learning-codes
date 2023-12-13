package com.gl.graphs;

public class AdjacencyMatrixGraph {
private boolean[][] adjMatrix;
private int vertexCount;
public AdjacencyMatrixGraph(int vertexCount) {
	this.vertexCount=vertexCount;
	adjMatrix=new boolean[vertexCount][vertexCount];
}
public void addEdge(int i,int j) {
	//validate the arguments i and j.if they are valid, then only we can add edges
	if(i>=0 && i<vertexCount && j>=0 && j<vertexCount) {
		this.adjMatrix[i][j]=true;//this is only for directed
		//this.adjMatrix[j][i]=true;//this is only for undirected
		
	}
}
public void removeEdge(int i,int j) {
	if(i>=0 && i<vertexCount && j>=0 && j<vertexCount) {
		this.adjMatrix[i][j]=false;
	}
}
public boolean isEdge(int i,int j) {
	if(i<0 || i>=vertexCount || j<0 || j>vertexCount) {
	return false;	
	}
	return adjMatrix[i][j];
}
public void getAllEdges() {
for(int i=0;i<adjMatrix.length;i++) {//adjMatrix.length is nothing but vertexCount
	for(int j=0;j<vertexCount;j++) {
	if(adjMatrix[i][j]) {
		System.out.println("edge between vertex:"+i+" and "+j);
	}	
	}	
}
}

}
