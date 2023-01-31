//package com.bankend.restfulwebservices10.soarnego;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//import com.bankend.restfulwebservices10.soarnego.model.FileEntity;
//import com.bankend.restfulwebservices10.soarnego.service.FileDOAService;
//
//import jdk.internal.org.jline.utils.Log;
//
//@Component
//public class FileDaoServiceCommandLineRunner  implements CommandLineRunner{
//	
//	private static final Logger log =
//			LoggerFactory.getLogger(FileDaoServiceCommandLineRunner.class);
//	
//	@Autowired
//	private FileDOAService fileDOAService;
//	
//	//@Override commented because of buy flag
//	public void run(String... args) throws Exception {
//		// TODO Auto-generated method stub
//		FileEntity fileEntity = new FileEntity("FileA.json","Just a randome content");
//		fileDOAService.insert(fileEntity);
//		Log.info("New file is added: " + fileEntity);
//		
//	}
//
//}
