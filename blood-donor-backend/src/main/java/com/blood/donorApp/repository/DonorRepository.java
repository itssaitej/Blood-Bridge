package com.blood.donorApp.repository;

import com.blood.donorApp.model.Donor; 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DonorRepository extends JpaRepository<Donor, Long> 
{
    List<Donor> findByBloodGroupIgnoreCaseAndAvailableTrue(String bloodGroup);
    
    List<Donor> findByCityIgnoreCase(String city);

    List<Donor> findByCityIgnoreCaseAndBloodGroupIgnoreCase(String city, String bloodGroup);

    List<Donor> findByAreaIgnoreCase(String area);
}