package com.greatlearning.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
@Table(name="teacher")
public class Teacher {
@Id
@Column(name="id")
@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
@Column(name="supplierName")
	private String name;
@OneToOne(cascade=CascadeType.ALL)
@JoinColumn(name="teacher_detail_id")
private TeacherDetails teacherDetails;
@OneToMany(
mappedBy="teacher",
cascade= {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.DETACH,CascadeType.REFRESH}
		)
private List<Course>courses;
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
	public void add(Course tempcourse) {
		// TODO Auto-generated method stub
	if(courses==null) {
		courses=new ArrayList<>();
	}
	courses.add(tempcourse);
	tempcourse.setTeacher(this);
	}
	public List<Course> getCourses() {
		return courses;
	}
	public void setCourses(List<Course> courses) {
		this.courses = courses;
	}
	

}
