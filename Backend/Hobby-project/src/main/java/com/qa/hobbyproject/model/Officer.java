package com.qa.hobbyproject.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Officer {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Long starfleet_id;
	private String starship;
	private String name;
	private String ranking;
	private String yearsAtStarfleet;
	private boolean friendOfTheRomulans;
	private String homePlanet;
	
	
	public Officer() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Officer(Long starfleet_id, String starship, String name, String ranking, String yearsAtStarfleet, boolean friendOfTheRomulans,
			String homePlanet) {
		super();
		this.starfleet_id = starfleet_id;
		this.starship = starship;
		this.name = name;
		this.ranking = ranking;
		this.yearsAtStarfleet = yearsAtStarfleet;
		this.friendOfTheRomulans = friendOfTheRomulans;
		this.homePlanet = homePlanet;
	}


	public Long getStarfleet_id() {
		return starfleet_id;
	}


	public void setStarfleet_id(Long starfleet_id) {
		this.starfleet_id = starfleet_id;
	}


	public String getStarship() {
		return starship;
	}


	public void setStarship(String starship) {
		this.starship = starship;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getRanking() {
		return ranking;
	}


	public void setRanking(String ranking) {
		this.ranking = ranking;
	}


	public String getYearsAtStarfleet() {
		return yearsAtStarfleet;
	}


	public void setYearsAtStarfleet(String yearsAtStarfleet) {
		this.yearsAtStarfleet = yearsAtStarfleet;
	}


	public boolean isFriendOfTheRomulans() {
		return friendOfTheRomulans;
//		
//		if(friendOfTheRomulans = true) {
//			System.out.println("you are Dismissed from Starfleet, you must leave your starship or the federation HQ at once, if you do not have transport Starfleet will arrange safe passage to the Alpha Quadrant where you will depart");
//		}
	}


	public void setFriendOfTheRomulans(boolean friendOfTheRomulans) {
		this.friendOfTheRomulans = friendOfTheRomulans;
	}


	public String getHomePlanet() {
		return homePlanet;
	}


	public void setHomePlanet(String homePlanet) {
		this.homePlanet = homePlanet;
	}
	
	
}
