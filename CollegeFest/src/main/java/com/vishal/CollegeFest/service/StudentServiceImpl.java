package com.vishal.CollegeFest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vishal.CollegeFest.entity.Student;
import com.vishal.CollegeFest.repository.StudentRepository;
@Service
public class StudentServiceImpl implements StudentService{
@Autowired
StudentRepository studentRepository;
	@Override
	public List<Student> findAll() {
		// TODO Auto-generated method stub
		return studentRepository.findAll();
	}

	@Override
	public Student findById(int theId) {
		// TODO Auto-generated method stub
		Optional<Student> result=studentRepository.findById(theId);
		Student theStudent=null;
		if(result.isPresent()) {
			theStudent=result.get();
		}else {
			throw new RuntimeException("student not found in given roll no--"+theId);
		}
		return theStudent;
	}

	@Override
	public void save(Student theBook) {
		// TODO Auto-generated method stub
		studentRepository.save(theBook);
	}

	@Override
	public void deleteById(int theId) {
		// TODO Auto-generated method stub
		studentRepository.deleteById(theId);
	}

}
