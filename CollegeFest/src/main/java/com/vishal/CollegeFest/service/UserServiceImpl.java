package com.vishal.CollegeFest.service;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.vishal.CollegeFest.config.CustomeUserDetails;
import com.vishal.CollegeFest.dto.UserRegistrationDto;
import com.vishal.CollegeFest.entity.Role;
import com.vishal.CollegeFest.entity.User;
import com.vishal.CollegeFest.repository.UserRepository;
@Service
public class UserServiceImpl implements UserService,UserDetailsService{
	@Autowired
UserRepository userRepository;
	@Override
	public User save(UserRegistrationDto registrationDto) {
		User user=new User(registrationDto.getFirstName(),registrationDto.getLastName(),registrationDto.getEmail(),
				registrationDto.getPassword(),Arrays.asList(new Role("ADMIN")));
		return userRepository.save(user);
	}
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		User user=userRepository.findByEmail(username);
		if(user==null)
			throw new UsernameNotFoundException("invalid");
		CustomeUserDetails customeUserDetails=new CustomeUserDetails(user);
		return customeUserDetails;
	}

}
