package com.bankend.restfulwebservices10.soarnego;

public class WorkDirFile {
	private long id;
	private String fileName;
	private String fileData;
	

	
	public WorkDirFile(long id, String fileName, String fileData) {
		super();
		this.id = id;
		this.fileName = fileName;
		this.fileData = fileData;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileData() {
		return fileData;
	}

	public void setFileData(String fileData) {
		this.fileData = fileData;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	

}
