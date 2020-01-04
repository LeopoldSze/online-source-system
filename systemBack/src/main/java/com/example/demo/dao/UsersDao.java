package com.example.demo.dao;

import com.example.demo.dataobjects.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersDao extends JpaRepository<Users, Integer> {
    Users findAllByAccAndPass(String acc, String pass);
    Users findAllByAcc(String acc);
}
