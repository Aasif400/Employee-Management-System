package cts.project.spring.service;

import cts.project.spring.model.Employee;

public interface EmployeeLoginServiceInterface {

	Employee validate(String email, String password);
	Employee validateEmailId(String email);
}

