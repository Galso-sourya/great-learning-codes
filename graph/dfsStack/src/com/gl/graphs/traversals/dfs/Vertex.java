package com.gl.graphs.traversals.dfs;
import java.util.List;
import java.util.ArrayList;
public class Vertex {
//name is called the vertex identifier
	private String name;
	private boolean visited;
	private List<Vertex>neighbours;
	public Vertex(String name) {
		this.name=name;
		this.neighbours=new ArrayList<>();
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
		return visited;
	}
	public void setVisited(boolean visited) {
		this.visited=visited;
	}
	public List<Vertex>getNeighbours(){
		return neighbours;
	}
	public void setNeighbours(List<Vertex>neighbours) {
		this.neighbours=neighbours;
	}
	public void addNeighbour(Vertex neighbour) {
		this.neighbours.add(neighbour);
	}
}
