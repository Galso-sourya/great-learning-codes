package com.gl.graph;

public class Vertex {
private String name;
private List<Vertex>adjacencyList;//this will contain the list of neighbours of each vertex
//this below is the constructor
public Vertex(String name) {
	this.name=name;
adjacencyList=new ArrayList<>();//to initialize the adjacency list	
}
public void addNeighbour(Vertex vertex) {
	if(vertex==null) {//validation step whether the vertex is present or not 
		return;
	}
	this.adjacencyList.add(vertex);
}
public void removeNeighbour(Vertex vertex) {
	if(vertex==null) {//validation step whether the vertex is present or not 
		return;
	}
	this.adjacencyList.remove(vertex);
}
public void showNeighbours() {
	for(Vertex v:this.adjacencyList) {
		System.out.println("edge between "+this.name+" and "+v.getName());
	}
}
public String getName() {
	return name;
}
public void setName() {
	this.name=name;
}
public List<Vertex>getAdjacencyList(){
	return adjacencyList;
}
public void setAdjacencyList(List<Vertex>adjacencyList) {
	this.adjacencyList=adjacencyList;
}
@Override
public String toString() {
	return "Vertex{"+"name='"+name+'\''+",adjacencyList="+adjacencyList+'}';
}
}
