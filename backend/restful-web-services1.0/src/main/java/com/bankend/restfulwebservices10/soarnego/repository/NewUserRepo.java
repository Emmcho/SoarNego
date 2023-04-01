package com.bankend.restfulwebservices10.soarnego.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.bankend.restfulwebservices10.soarnego.model.NewUserEntity;

@Repository
public interface NewUserRepo extends JpaRepository <NewUserEntity, Long> {
	
	

}


