package com.bankend.restfulwebservices10.soarnego.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

//Table -FileEntity


@Entity
@Table(name = "workingFile")
public class FileEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long fileId;
	
	@Column(name = "fileName")
	private String fileName;
	
	@Lob
	private String fileContent;
	
	
	
	protected FileEntity() {
		
	}
	public FileEntity(String fileName, String fileContent) {
		super();
		this.fileName = fileName;
		this.fileContent = fileContent;
	}
	
	public Long getFileId() {
		return fileId;
	}
	public String getFileName() {
		return fileName;
	}
	public String getFileContent() {
		return fileContent;
	}
	
	public void setFileId(Long fileId) {
		this.fileId = fileId;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	
	
	
	public void setFileContent(String fileContent) {
		this.fileContent = fileContent;
	}
	@Override
	public String toString() {
		return "FileEntity [fileId=" + fileId + ", fileName=" + fileName + ", fileContent=" + fileContent + "]";
	}

}
