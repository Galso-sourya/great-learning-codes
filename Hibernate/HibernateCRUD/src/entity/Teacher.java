package entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="teacher")
public class Teacher {//this class is called a entity class
@Id
@Column(name="supplierId")
//this line is for auto increment as id will be like that
@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
@Column(name="supplierName")
	private String name;
	public Teacher() {

	}
	public Teacher(String name) {
		this.name=name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name =name;
	}
	@Override
	public String toString() {
		return "Teacher [id=" + id + ", name=" +name + "]";
	}

}
