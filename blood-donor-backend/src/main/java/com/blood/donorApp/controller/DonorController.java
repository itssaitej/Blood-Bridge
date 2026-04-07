package com.blood.donorApp.controller;

import com.blood.donorApp.model.Donor;
import com.blood.donorApp.service.DonorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.Authentication;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/donors")
@CrossOrigin(origins = "*")
public class DonorController 
{ 
	@Autowired
    private final DonorService service;

    public DonorController(DonorService service) 
    {
        this.service = service;
    }

    @GetMapping("/search/city")
    public List<Donor> getByCity(@Valid @RequestParam String city) 
    {
        return service.searchByCity(city);
    }

    @GetMapping("/search")
    public List<Donor> getByCityAndBlood(@Valid @RequestParam String city,@Valid @RequestParam String bloodGroup) 
    {
        return service.searchByCityAndBlood(city, bloodGroup);
    }

    @GetMapping("/search/area")
    public List<Donor> getByArea(@Valid @RequestParam String area) 
    {
        return service.searchByArea(area);
    }
    
    @PostMapping
    public ResponseEntity<Donor> addDonor(@Valid @RequestBody Donor donor) 
    {
        Donor saved = service.addDonor(donor);
        return ResponseEntity.ok(saved);
    }
 
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDonor(@PathVariable Long id) 
    {
        boolean deleted = service.deleteDonor(id);

        if (deleted)
            return ResponseEntity.ok("Donor deleted successfully");
        else
            return ResponseEntity.status(404).body("Donor not found");
    }
    
    @GetMapping
    public List<Donor> getAllDonors() {
       // System.out.println("🔥 DonorController HIT");
        return service.getAllDonors();
    }
  
    //@GetMapping("/search/{bloodGroup}")
   // public ResponseEntity<String> searchDonors(@RequestParam String bloodGroup) 
   // {
    //    return ResponseEntity.ok(bloodGroup);
   // }
    
    @GetMapping("/{id}")
    public ResponseEntity<Donor> getDonorById(@PathVariable Long id) 
    {
        Donor donor = service.getDonorById(id);

        if (donor != null)
            return ResponseEntity.ok(donor);
        else
            return ResponseEntity.notFound().build();
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<?> updateDonor(
            @PathVariable Long id,
            @Valid @RequestBody Donor donor,
            Authentication authentication) 
    {

        String username = authentication.getName(); // logged-in user

        Donor existing = service.getDonorById(id);

        if (existing == null) 
        {
            return ResponseEntity.notFound().build();
        }

        // 🔒 OWNER CHECK
        if (!existing.getUser().getUsername().equals(username)) 
        {
            return ResponseEntity.status(403).body("You can only edit your own donor profile");
        }

        Donor updated = service.updateDonor(id, donor);
        return ResponseEntity.ok(updated);
    }
    
}
