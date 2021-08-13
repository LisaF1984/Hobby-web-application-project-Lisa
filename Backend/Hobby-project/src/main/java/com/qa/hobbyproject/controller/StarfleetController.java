package com.qa.hobbyproject.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.qa.hobbyproject.model.Officer;
import com.qa.hobbyproject.service.StarfleetService;

@RestController
@CrossOrigin
public class StarfleetController {

	private StarfleetService service;

	public StarfleetController(StarfleetService service) {
		super();
		this.service = service;
	}
	@GetMapping("/engage")
	public String helloTest() {
		return "Engage!";
		
	}
	
	@PostMapping("/add")
	public ResponseEntity<String> createOfficer(@RequestBody Officer officer) {
		this.service.createOfficer(officer);
		
		return new ResponseEntity<String>("Officer name:" + officer.getName() + " " + "added to list)", HttpStatus.CREATED);
		
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Officer>> getAllOfficers() {
		
		List<Officer> officerList = this.service.getAllOfficers();
		
		return ResponseEntity.ok(officerList);
		
	}
	@PutMapping("/replace/{id}")
	public ResponseEntity<String> replaceOfficer(@RequestBody Officer officer, @PathVariable Long id) {
	this.service.updateOfficer(officer, id);
	
	return new ResponseEntity<String>("Item id; " + id + "Officer details have been updated", HttpStatus.ACCEPTED);
	
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String>deleteOfficer(@PathVariable Long id) {
		
		this.service.deleteOfficer(id);
		
		return new ResponseEntity<String>("object id:" + id + "has been deleted)", HttpStatus.OK);
		
		
		
	}
	
	
}
