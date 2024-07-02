package com.vishal.CollegeFest.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.vishal.CollegeFest.service.UserServiceImpl;
@EnableWebSecurity
public class MySecurityConfig {
@Bean
public BCryptPasswordEncoder passwordEncoder() {
	return new BCryptPasswordEncoder();
}
@Bean
public UserDetailsService getUserDetailsService() {
	return new UserServiceImpl();
}
@Bean
public DaoAuthenticationProvider daoAuthenticationProvider() {
	DaoAuthenticationProvider daoAuthenticationProvider=new DaoAuthenticationProvider();
	daoAuthenticationProvider.setUserDetailsService(getUserDetailsService());
	daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
	return daoAuthenticationProvider;
}
}
