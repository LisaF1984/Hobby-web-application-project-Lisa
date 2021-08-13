package com.qa.hobbyproject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.qa.hobbyproject.database.OfficerDB;
import com.qa.hobbyproject.model.Officer;



@Service
public class StarfleetService {

	private OfficerDB dataBase;
	

	public StarfleetService(OfficerDB dataBase) {
		super();
		this.dataBase = dataBase;
	}

	public Officer createOfficer(Officer officer) {
		// TODO Auto-generated method stub
		return this.dataBase.save(officer);
		
	}

	public List<Officer> getAllOfficers() {
		// TODO Auto-generated method stub
		return this.dataBase.findAll();
	}

	public void deleteOfficer(Long id) {
		this.dataBase.deleteById(id);
		
		// TODO Auto-generated method stub
		
	}

	public void updateOfficer(Officer officer, Long id) {
	Optional<Officer> optionalOfficer = this.dataBase.findById(id);
	Officer oldOfficer = optionalOfficer.get();
		
	oldOfficer.setStarship(officer.getStarship());
	oldOfficer.setName(officer.getName());
	oldOfficer.setRanking(officer.getRanking());
	oldOfficer.setYearsAtStarfleet(officer.getYearsAtStarfleet());
	oldOfficer.setFriendOfTheRomulans(officer.isFriendOfTheRomulans());
	oldOfficer.setHomePlanet(officer.getHomePlanet());
	
	this.dataBase.save(oldOfficer);		
		
	}
}


