package com.qa.hobbyproject.database;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qa.hobbyproject.model.Officer;

@Repository 
public interface OfficerDB extends JpaRepository<Officer, Long> {

	
}
	
