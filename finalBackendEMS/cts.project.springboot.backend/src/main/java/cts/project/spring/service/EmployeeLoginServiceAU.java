package cts.project.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cts.project.spring.model.Employee;
import cts.project.spring.repository.EmployeeRepository;

@Service
public class EmployeeLoginServiceAU implements EmployeeLoginServiceInterface
{
	@Autowired
    EmployeeRepository employeeRepository;

	 @Override
     public Employee validate(String email, String password) {

	 Employee dd=employeeRepository.findByEmail(email);

	 if(dd!=null && dd.getPassword().equals(password))

	 {

	  return dd;

	 }

	 return null;

	 }
	 
	 @Override
	 public Employee validateEmailId(String email) {
		 Employee gettingEmail = employeeRepository.findByEmail(email);
		 if(gettingEmail!=null) {
			 return gettingEmail;
		 }
		 
		 return null;
	 }
	}

//package cts.project.spring.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import cts.project.spring.model.Admin;
//import cts.project.spring.model.Employee;
//import cts.project.spring.repository.EmployeeRepository;
//
//@Service
//public class EmployeeLoginServiceAU implements EmployeeLoginServiceInterface
//{
//	@Autowired
//    EmployeeRepository employeeRepository;
//
//	 @Override
//     public Admin validate(String email, String password) {
//
//	 Admin dd=employeeRepository.findByEmail(email);
//
//	 if(dd!=null && dd.getPassword().equals(password))
//
//	 {
//
//	  return dd;
//
//	 }
//
//	 return null;
//
//	 }
//
//	}
//
