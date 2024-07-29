package cts.project.springboot;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;
import java.sql.Date;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import cts.project.spring.Application;
import cts.project.spring.model.Employee;
import cts.project.spring.repository.EmployeeRepository;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
@TestMethodOrder(OrderAnnotation.class)
class ApplicationTests {

	@Autowired
	EmployeeRepository eRepo;
	//Create
	@Test
	@Order(1)
	public void testCreate () {
		Employee e = new Employee();
//		e.setId(1L);
		e.setFirstName("Test123");
		e.setLastName("Test123");
		e.setEmail("test123@gmail.com");
		e.setPassword("Testing@123");
		e.setBasic(26000);
		e.setCasualLeave(9);
		e.setCasualLeaveExpiry(java.sql.Date.valueOf("2022-12-31"));
		e.setCompensatoryOff(9);
		e.setDeductionType(9);
		e.setDesignation("TESTDeveloper");
		e.setEarnedLeave(9);
		e.setEarnedLeaveCarryForward(9);
		e.setEarnedLeaveCarryForwardExpiry(java.sql.Date.valueOf("2022-12-31"));
		e.setHra(9);
		e.setIndividualIncentives(9);
		e.setInvoluntaryAbsenceFromWork(9);
		e.setModeOfPay("HDFC");
		e.setPaternityLeave(9);
		e.setPfAmountDeduction(9);
		e.setSickLeave(9);
		e.setSpecialAllowance(9);
		e.setTotal(90000);
		eRepo.save(e);
//		assertNotNull(eRepo.findById((long)1L).get());
	}

	
	//Read
	@Test
	@Order(2)
	public void testReadAll () {
		List list = eRepo.findAll();
		assertThat(list).size().isGreaterThan(0);
	}
	
	//Update
	@Test
	@Order(3)
	public void testUpdate () {
		Employee e = eRepo.findById(1L).get();
		e.setBasic(50000);
		eRepo.save(e);
		assertNotEquals(26000, eRepo.findById(1L).get().getBasic());
	}
	
	//Delete 
	@Test
	@Order(4)
	public void testDelete () {
		eRepo.deleteById(1L);
		assertThat(eRepo.existsById(1L)).isFalse();
	}

}
