package com.bankend.restfulwebservices10.soarnego.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bankend.restfulwebservices10.soarnego.model.FileEntity;
import com.bankend.restfulwebservices10.soarnego.repository.FileEntityRepository;

//@RestController
//@CrossOrigin(maxAge = 3600, allowCredentials = "true")
//@RequestMapping("/api/save/files")
@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api")
public class FileEntityController {
	
	@Autowired
	FileEntityRepository fileEntityRepository;
	
	//@CrossOrigin(origins="http://localhost:4200", allowedHeaders = {"Requestor-Type", "Authorization"}, exposedHeaders = "X-Get-Header")
	@PostMapping("/save/files")
	public ResponseEntity<FileEntity> createFileEntity(@RequestBody FileEntity fileEntity) {
//			HttpHeaders headers = new HttpHeaders();
//			headers.set("X-Get-Header", "ExampleHeader");
			FileEntity _fileEntity = fileEntityRepository
					.save(new FileEntity(fileEntity.getFileName(), fileEntity.getFileContent()));
			return new ResponseEntity<FileEntity>(_fileEntity, HttpStatus.CREATED);
		
		
	
	}
	
//	@GetMapping("/find/files/index")
//	public ResponseEntity<FileEntity> findFileIdIndex(@RequestBody FileEntity fileEntity) {
//		
//			FileEntity _fileEntity = fileEntityRepository
//					.save(new FileEntity(fileEntity.getFileName(), fileEntity.getFileContent()));
//			return new ResponseEntity<FileEntity>(_fileEntity, HttpStatus.CREATED);
//		
			
	
	//}
	

}
