package com.blood.donorApp.repository;

import org.springframework.data.jpa.repository.JpaRepository; 
import com.blood.donorApp.model.User;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> 
{
	Optional<User> findByUsername(String username);
	
}


