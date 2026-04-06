package com.blood.donorApp.controller;

import com.blood.donorApp.dto.LoginRequest; 
import com.blood.donorApp.dto.RegisterRequest;
import com.blood.donorApp.model.User;
import com.blood.donorApp.repository.UserRepository;
import com.blood.donorApp.service.AuthService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController 
{

    private final UserRepository userRepo;
   // private final PasswordEncoder passwordEncoder;
    
    @Autowired
    private AuthService authService;
    
    public AuthController(UserRepository userRepo, PasswordEncoder passwordEncoder) 
    {
        this.userRepo = userRepo;
        //this.passwordEncoder = passwordEncoder;
    }

    // REGISTER
    @PostMapping("/register")
    public String register(@Valid @RequestBody RegisterRequest request) 
    {
        return authService.register(request);
    }
    

    // LOGIN
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) 
    {
        String token = authService.login(request.getUsername(), request.getPassword());
        //String name = authService.login(request.getUsername(), request.getPassword());
        User user = userRepo.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        return ResponseEntity.ok(
            Map.of(
                "token", token,
                "username", user.getUsername(),
                "name", user.getName()
            )
        );
    }
    
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() 
    {
        List<User> users = userRepo.findAll();
        return ResponseEntity.ok(users);
    }
    
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) 
    {
        return userRepo.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/users/username/{username}")
    public ResponseEntity<Optional<User>> getUserByUsername(@PathVariable String username) 
    {

        Optional<User> user = userRepo.findByUsername(username);

        if (user != null)
            return ResponseEntity.ok(user);
        else
            return ResponseEntity.notFound().build();
    }
    
}