package com.vishal.CollegeFest.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
private Integer id;
	@Column(name="first_name")
private String firstName;
	@Column(name="last_name")
private String lastName;

private String email;

private String password;
@ManyToMany(fetch=FetchType.EAGER,cascade=CascadeType.ALL)
@JoinTable(name="users_roles",
joinColumns=@JoinColumn(name="user_id",referencedColumnName="id"),
inverseJoinColumns=@JoinColumn(name="role_id",referencedColumnName="id")
		)
private List<Role> roles;
public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public List<Role> getRoles() {
	return roles;
}
public void setRoles(List<Role> roles) {
	this.roles = roles;
}
public User(String firstName, String lastName, String email, String password, List<Role> roles) {
	super();
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.password = password;
	this.roles = roles;
}
public User() {
	super();
	// TODO Auto-generated constructor stub
}

}
