package com.gl.graphs.traversals.dfs;
import java.util.List;
import java.util.ArrayList;
public class Vertex {
private String name;
private boolean visited;
private List<Vertex>neighbours;
public Vertex(String name) {
	this.name=name;
	neighbours=new ArrayList<>();
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name=name;
}
public boolean isVisited() {
	return visited;
}
public void setVisited(boolean visited) {
this.visited=visited;}
public List<Vertex>getNeighbours(){
	return neighbours;
}
public void setNeighbours() {
	this.neighbours=neighbours;
}
public void addNeighbour(Vertex vertex) {
	this.neighbours.add(vertex);
	
}
//this is nothing but how to represent the output
@Override
public String toString() {
return "Vertex{"+"name='"+name+'\''+'}';}
}
