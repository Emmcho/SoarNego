package com.bankend.restfulwebservices10.soarnego.model;

import javax.persistence.*;

@Entity
@Table(name = "userTable")
public class NewUserEntity {
	
	protected NewUserEntity() {
		
	}
	
	public NewUserEntity( String userFullName, String userName, String email, String password) {
		super();
		
		this.userFullName = userFullName;
		this.userName = userName;
		this.email = email;
		this.password = password;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long userId;
	
	@Column(name = "fullName")
	private String userFullName;
	
	@Column
	private String userName;
	
	@Column
	private String email;
	
	@Column
	private String password;

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getUserFullName() {
		return userFullName;
	}

	public void setUserFullName(String userFullName) {
		this.userFullName = userFullName;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "NewUserEntity [userId=" + userId + ", userFullName=" + userFullName + ", userName=" + userName
				+ ", email=" + email + ", password=" + password + "]";
	}
	
	
	

}
