package com.blood.donorApp.model;

import jakarta.persistence.*;   
import jakarta.validation.constraints.*;
//import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class Donor 
{
	private LocalDate lastDonationDate;
	private LocalDate nextEligibleDate;
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @NotBlank(message = "Name cannot be empty")
	    private String name;

	    @NotBlank(message = "Blood group is required")
	    private String bloodGroup;

	    @NotBlank(message = "Location is required")
	    private String location;

	    @NotBlank(message = "City is required")
	    private String city;
	    
	    @NotBlank(message = "Area is required")
	    private String area;
	      
	   
	    private boolean available;

	    @JsonIgnoreProperties({"password"})
	    @ManyToOne
	    @JoinColumn(name = "user_id")
	    private User user;
	    
    public Donor() {}

    public Donor(String name, String bloodGroup, String location, String city, String area, boolean available) 
    {
    	
        this.name = name;
        this.bloodGroup = bloodGroup;
        this.location = location;
        this.available = available;
        this.city=city;
        this.area=area;
        
    }
    
    public String getBloodGroup() 
    {
        return bloodGroup;
    }
    public void setBloodGroup(String bloodGroup)
    {
    	this.bloodGroup=bloodGroup;
    }
    
    
    public boolean isAvailable() 
    {
        return available;
    }
    public void setAvailable(boolean available) 
    {
  	    this.available = available;
    }
    
    public String getName() 
    {
  	    return name;
    }
    public void setName(String name)
    {
    	this.name=name;
    }
    
    public String getCity() 
    {
  	    return city;
    }
    public void setCity(String city)
    {
    	this.city=city;
    }
    
    public String getArea() 
    {
  	    return area;
    }
    public void setArea(String area)
    {
    	this.area=area;
    }
    
    public String getLocation()
    {
    	return location;
    }
    public void setLocation(String location)
    {
    	this.location=location;
    }
    
    
    public Long getId() 
    {
        return id;
    }

    public void setId(Long id) 
    {
        this.id = id;
    }
    
    public User getUser() 
    {
        return user;
    }

    public void setUser(User user) 
    {
        this.user = user;
    }
    
    public LocalDate getLastDonationDate() {
        return lastDonationDate;
    }

    public void setLastDonationDate(LocalDate lastDonationDate) 
    {
        this.lastDonationDate = lastDonationDate;
    }

    public LocalDate getNextEligibleDate() 
    {
        return nextEligibleDate;
    }

    public void setNextEligibleDate(LocalDate nextEligibleDate) 
    {
        this.nextEligibleDate = nextEligibleDate;
    }
}