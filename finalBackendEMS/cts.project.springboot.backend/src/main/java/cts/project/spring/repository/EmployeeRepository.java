package cts.project.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cts.project.spring.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	Employee findByEmail(String email);

}
