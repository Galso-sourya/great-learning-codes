package com.vishal.CollegeFest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DashboardController {
@GetMapping("/")
public String showHomeDashboard() {
	return "home-dashboard";
}
}
