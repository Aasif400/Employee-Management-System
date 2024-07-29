package cts.project.spring.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cts.project.spring.dto.EmployeeLogin;
import cts.project.spring.dto.EmployeeResponse;
import cts.project.spring.exception.ResourceNotFoundException;
import cts.project.spring.model.Employee;
import cts.project.spring.repository.EmployeeRepository;
import cts.project.spring.service.EmployeeLoginServiceAU;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private EmployeeLoginServiceAU employeeloginServiceAU;
	
	// get all employees
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}		
	
	// create employee rest api
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	// get employee by id rest api
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(employee);
	}
	
	// update employee rest api
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setEmail(employeeDetails.getEmail());
		employee.setBasic(employeeDetails.getBasic());
		employee.setHra(employeeDetails.getHra());
		employee.setSpecialAllowance(employeeDetails.getSpecialAllowance());
		employee.setDeductionType(employeeDetails.getDeductionType());
		employee.setTotal(employeeDetails.getTotal());
		employee.setCasualLeave(employeeDetails.getCasualLeave());
		employee.setCompensatoryOff(employeeDetails.getCompensatoryOff());
		employee.setEarnedLeave(employeeDetails.getEarnedLeave());
		employee.setEarnedLeaveCarryForward(employeeDetails.getEarnedLeaveCarryForward());
		employee.setInvoluntaryAbsenceFromWork(employeeDetails.getInvoluntaryAbsenceFromWork());
		employee.setPaternityLeave(employeeDetails.getPaternityLeave());
		employee.setCasualLeaveExpiry(employeeDetails.getCasualLeaveExpiry());
		employee.setEarnedLeaveCarryForwardExpiry(employeeDetails.getEarnedLeaveCarryForwardExpiry());
		employee.setDesignation(employeeDetails.getDesignation());
		employee.setPfAmountDeduction(employeeDetails.getPfAmountDeduction());
		employee.setModeOfPay(employeeDetails.getModeOfPay());
		employee.setIndividualIncentives(employeeDetails.getIndividualIncentives());
		employee.setPassword(employeeDetails.getPassword());
		
		Employee updatedEmployee = employeeRepository.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}
	
	// delete employee rest api
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	  @CrossOrigin(origins = "http://localhost:3000")
	  @PostMapping("/validateEmployee")
	  public ResponseEntity<?> validateEmployee(@RequestBody EmployeeLogin employeeLogin) {

	  System.out.println(employeeLogin);
	  
	  Employee employee=employeeloginServiceAU.validate(employeeLogin.getEmail(),employeeLogin.getPassword());

	  if(employee!=null) {

	  System.out.println("Success");

	  return EmployeeResponse.success(employee);

	  }

	  else

	  return EmployeeResponse.status(HttpStatus.NOT_FOUND);

	  }
	  
	  @CrossOrigin(origins = "http://localhost:3000")
	  @PostMapping("/validateEmail")
	  public ResponseEntity<?> validateEmail(@RequestBody EmployeeLogin employeeLogin) {

	  System.out.println(employeeLogin);
	  
	  Employee employee=employeeloginServiceAU.validateEmailId(employeeLogin.getEmail());

	  if(employee==null) {

	  System.out.println("Success");

	  return EmployeeResponse.success(employee);

	  }

	  else

	  return EmployeeResponse.status(HttpStatus.NOT_FOUND);

	  }
	
}