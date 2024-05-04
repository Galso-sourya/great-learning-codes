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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Entity
@Table(name="course")
public class Course {
	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
		private int id;
	@Column(name="name")
		private String name;
	//we should not use CascadeType.Delete here
	@ManyToOne(
			cascade= {CascadeType.PERSIST,CascadeType.MERGE,CascadeType.DETACH,CascadeType.REFRESH}
					)
	@JoinColumn(name="teacher_id")
	private Teacher teacher;
	public Course() {
	}
	public Course(String name) {
		this.name = name;
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
		this.name = name;
	}
	public Teacher getTeacher() {
		return teacher;
	}
	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}
	@Override
	public String toString() {
		return "Course [id=" + id + ", name=" + name + ", teacher=" + teacher + "]";
	}
	
}
