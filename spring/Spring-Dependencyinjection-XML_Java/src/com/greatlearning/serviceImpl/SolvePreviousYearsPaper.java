package com.greatlearning.serviceImpl;
import org.springframework.stereotype.Component;
import com.greatlearning.service.ExamTip;
@Component
public class SolvePreviousYearsPaper implements ExamTip{
@Override
public String getExamTip() {
	return "solve last 5 years question papers";
}
}
