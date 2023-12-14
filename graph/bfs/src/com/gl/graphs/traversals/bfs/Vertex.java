package com.gl.graphs.traversals.bfs;
import java.util.List;
import java.util.ArrayList;
public class Vertex {
private String name;//we have 3 properties of each vertex. one is name. then whether
//the node is still visited or not and lastly the neighbors of it. we need to set getter 
//and setter separately for each of them. for each property.
private boolean isVisited;
//this indicates the neighbors of the indicated vertex
private List<Vertex>adjList;
public void addNeighbour(Vertex v) {
	this.adjList.add(v);
}
@Override
public String toString() {
	return "Vertex{"+"name='"+name+'\''+'}';
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name=name;
}
public boolean isVisited() {
	return isVisited;
}
public void setVisited(boolean visited) {
	isVisited=visited;
}
public List<Vertex>getAdjList(){
	return adjList;
}
public void setAdjList(List<Vertex>adjList) {
	this.adjList=adjList;
}
//to initialize the list
public Vertex(String name) {
this.name=name;
adjList=new ArrayList<>();
}

}
