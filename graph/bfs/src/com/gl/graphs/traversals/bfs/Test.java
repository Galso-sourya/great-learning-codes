package com.gl.graphs.traversals.bfs;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Vertex v1=new Vertex(name:"A");
Vertex v2=new Vertex(name:"B");
Vertex v3=new Vertex(name:"C");
Vertex v4=new Vertex(name:"D");
Vertex v5=new Vertex(name:"E");
Vertex v6=new Vertex(name:"F");
Vertex v7=new Vertex(name:"G");
Vertex v8=new Vertex(name:"H");
v1.addNeighbour(v2);
v1.addNeighbour(v6);
v1.addNeighbour(v7);
v2.addNeighbour(v1);
v2.addNeighbour(v3);
v2.addNeighbour(v4);
v3.addNeighbour(v2);
v4.addNeighbour(v2);
v4.addNeighbour(v5);
v7.addNeighbour(v1);
v7.addNeighbour(v8);
v8.addNeighbour(v7);
BFS bfs=new BFS();
bfs.bfsTraverse(v1);
	}

}
