package com.example.demo.dao;

import com.example.demo.dataobjects.Usersvip;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsersvipDao extends JpaRepository<Usersvip,Integer> {
    List<Usersvip> findAllByUid(Integer uid);
}
