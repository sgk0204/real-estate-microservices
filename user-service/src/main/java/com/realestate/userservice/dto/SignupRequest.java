package com.realestate.userservice.dto;

import lombok.Data;

@Data
public class SignupRequest {
    private String username;
    private String email;
    private String role;
    private String password;
}
