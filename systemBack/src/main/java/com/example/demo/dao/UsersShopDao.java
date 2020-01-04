package com.example.demo.dao;

import com.example.demo.dataobjects.UsersShop;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsersShopDao extends JpaRepository<UsersShop,Integer> {
    List<UsersShop> findAllByUid(Integer uid);
}
