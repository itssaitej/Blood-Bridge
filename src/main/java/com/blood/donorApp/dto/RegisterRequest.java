package com.blood.donorApp.dto;

//import com.fasterxml.jackson.annotation.JsonIgnore;

public class RegisterRequest 
{
	private String username;
    private String password;
    private Long id;
    
    private String name;
    private String bloodGroup;
    private String city;
    private String area;
    private String location;
    private boolean available;
   
    public RegisterRequest() {}
  
    public RegisterRequest(Long id,String username,String password,String name, String bloodGroup, String location, String city, String area, boolean available)
    {
    	this.username=username;
    	this.id=id;
    	this.password=password;
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
    
    public String getUsername() 
    {
  	    return username;
    }
    public void setUsername(String username)
    {
    	this.username=username;
    }
    
    public Long getId() 
    {
        return id;
    }

    public void setId(Long id) 
    {
        this.id = id;
    }
    
    public String getPassword() 
    {
  	    return password;
    }
    public void setPassword(String password)
    {
    	this.password=password;
    }
}
