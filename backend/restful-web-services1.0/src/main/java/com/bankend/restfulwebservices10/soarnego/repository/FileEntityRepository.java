package com.bankend.restfulwebservices10.soarnego.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bankend.restfulwebservices10.soarnego.model.FileEntity;

@Repository
public interface FileEntityRepository extends JpaRepository<FileEntity, Long> {
	
	//List <FileEntity> createFileEntity(String fileName);

}

