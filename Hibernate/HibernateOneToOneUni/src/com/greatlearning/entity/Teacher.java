package com.greatlearning.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
@Table(name="teacher")
public class Teacher {//this class is called a entity class
@Id
@Column(name="id")
@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
@Column(name="supplierName")
	private String name;
@OneToOne(cascade=CascadeType.ALL)
@JoinColumn(name="teacher_detail_id")
private TeacherDetails teacherDetails;
	public TeacherDetails getTeacherDetails() {
	return teacherDetails;
}
public void setTeacherDetails(TeacherDetails teacherDetails) {
	this.teacherDetails = teacherDetails;
}
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
