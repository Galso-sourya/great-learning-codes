package com.greatlearning.serviceImpl;

import com.greatlearning.service.ExamTip;
import org.springframework.stereotype.Component;
@Component
public class RevisionTip implements ExamTip {

	@Override
	public String getExamTip() {
		// TODO Auto-generated method stub
		return "do revision";
	}

}
