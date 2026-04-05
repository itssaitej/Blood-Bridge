package com.blood.donorApp.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "users")
public class User 
{

	
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String name;

    @NotBlank(message = "Password is required")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    
    public User() {}
    
    public User(Long id,String username,String password, String name)
    {
    	this.username=username;
    	this.id=id;
    	this.password=password;
    	this.name=name;
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

    public void setName(String name)
    {
    	this.name=name;
    }
	public String getName() 
	{	
		return name;
	}
    
}