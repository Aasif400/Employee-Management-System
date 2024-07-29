package cts.project.spring.model;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employees")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "first_name")
	private String firstName;

	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "Basic")
	private int basic;
	
	@Column(name = "HRA")
	private int hra;
	
	@Column(name="Special_Allowance")
	private int specialAllowance;
	
	@Column(name = "Deduction_Type")
	private int deductionType;
	
	@Column(name = "Total")
	private int total;
	
	@Column(name = "CasualLeave")
	private int casualLeave;
	
	@Column(name = "CompensatoryOff")
	private int compensatoryOff;
	
	@Column(name="earnedLeave")
	private int earnedLeave;
	
	@Column(name = "earnedLeaveCarryForward")
	private int earnedLeaveCarryForward;
	
	@Column(name = "involuntaryAbsenceFromWork")
	private int involuntaryAbsenceFromWork;
	
	@Column(name = "paternityLeave")
	private int paternityLeave;
	
	@Column(name = "sickLeave")
	private int sickLeave;
	
	@Column(name="casualLeaveExpiry")
	private Date casualLeaveExpiry;
	
	@Column(name = "earnedLeaveCarryForwardExpiry")
	private Date earnedLeaveCarryForwardExpiry;
	
	@Column(name = "designation")
	private String designation;
	
	@Column(name = "pfamountDeduction")
	private int pfAmountDeduction;
	
	@Column(name = "modeofpay")
	private String modeOfPay;
	
	@Column(name="individualIncentives")
	private int individualIncentives;
	
	@Column(name = "password")
	private String password;
	
	public Employee() {
		
	}
	
	public Employee(String firstName, String lastName, String email,String password,int basic, int hra, int specialAllowance, int deductionType, int total,int casualLeave, int compensatoryOff,int earnedLeave,int earnedLeaveCarryForward,int involuntaryAbsenceFromWork,int paternityLeave,int sickLeave,Date casualLeaveExpiry,Date earnedLeaveCarryForwardExpiry,String modeOfPay,String designation, int pfAmountDeduction,int individualIncentives) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.basic = basic;
		this.hra = hra;
		this.specialAllowance = specialAllowance;
		this.deductionType = deductionType;
		this.total = total;
		this.casualLeave=casualLeave;
		this.compensatoryOff=compensatoryOff;
		this.earnedLeave=earnedLeave;
		this.earnedLeaveCarryForward=earnedLeaveCarryForward;
		this.involuntaryAbsenceFromWork=involuntaryAbsenceFromWork;
		this.paternityLeave=paternityLeave;
		this.sickLeave=sickLeave;
		this.casualLeaveExpiry=casualLeaveExpiry;
		this.earnedLeaveCarryForwardExpiry=earnedLeaveCarryForwardExpiry;
		this.modeOfPay=modeOfPay;
		this.designation=designation;
		this.pfAmountDeduction=pfAmountDeduction;
		this.individualIncentives=individualIncentives;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getBasic() {
		return basic;
	}

	public void setBasic(int basic) {
		this.basic = basic;
	}

	public int getHra() {
		return hra;
	}

	public void setHra(int hra) {
		this.hra = hra;
	}

	public int getSpecialAllowance() {
		return specialAllowance;
	}

	public void setSpecialAllowance(int specialAllowance) {
		this.specialAllowance = specialAllowance;
	}

	public int getDeductionType() {
		return deductionType;
	}

	public void setDeductionType(int deductionType) {
		this.deductionType = deductionType;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public int getCasualLeave() {
		return casualLeave;
	}

	public void setCasualLeave(int casualLeave) {
		this.casualLeave = casualLeave;
	}

	public int getCompensatoryOff() {
		return compensatoryOff;
	}

	public void setCompensatoryOff(int compensatoryOff) {
		this.compensatoryOff = compensatoryOff;
	}

	public int getEarnedLeave() {
		return earnedLeave;
	}

	public void setEarnedLeave(int earnedLeave) {
		this.earnedLeave = earnedLeave;
	}

	public int getEarnedLeaveCarryForward() {
		return earnedLeaveCarryForward;
	}

	public void setEarnedLeaveCarryForward(int earnedLeaveCarryForward) {
		this.earnedLeaveCarryForward = earnedLeaveCarryForward;
	}

	public int getInvoluntaryAbsenceFromWork() {
		return involuntaryAbsenceFromWork;
	}

	public void setInvoluntaryAbsenceFromWork(int involuntaryAbsenceFromWork) {
		this.involuntaryAbsenceFromWork = involuntaryAbsenceFromWork;
	}

	public int getPaternityLeave() {
		return paternityLeave;
	}

	public void setPaternityLeave(int paternityLeave) {
		this.paternityLeave = paternityLeave;
	}

	public int getSickLeave() {
		return sickLeave;
	}

	public void setSickLeave(int sickLeave) {
		this.sickLeave = sickLeave;
	}

	public Date getCasualLeaveExpiry() {
		return casualLeaveExpiry;
	}

	public void setCasualLeaveExpiry(Date casualLeaveExpiry) {
		this.casualLeaveExpiry = casualLeaveExpiry;
	}

	public Date getEarnedLeaveCarryForwardExpiry() {
		return earnedLeaveCarryForwardExpiry;
	}

	public void setEarnedLeaveCarryForwardExpiry(Date earnedLeaveCarryForwardExpiry) {
		this.earnedLeaveCarryForwardExpiry = earnedLeaveCarryForwardExpiry;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public int getPfAmountDeduction() {
		return pfAmountDeduction;
	}

	public void setPfAmountDeduction(int pfAmountDeduction) {
		this.pfAmountDeduction = pfAmountDeduction;
	}

	public String getModeOfPay() {
		return modeOfPay;
	}

	public void setModeOfPay(String modeOfPay) {
		this.modeOfPay = modeOfPay;
	}

	public int getIndividualIncentives() {
		return individualIncentives;
	}

	public void setIndividualIncentives(int individualIncentives) {
		this.individualIncentives = individualIncentives;
	}
	
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	
	}
	
}
