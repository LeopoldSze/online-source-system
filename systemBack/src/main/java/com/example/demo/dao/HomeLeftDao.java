package com.example.demo.dao;

import com.example.demo.dataobjects.HomeLeft;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HomeLeftDao extends JpaRepository<HomeLeft, Integer> {
    //随机取出一条数据
    @Query(nativeQuery = true, value = "SELECT * FROM tab_homeleft ORDER BY RAND() LIMIT 1")
    public HomeLeft findOneByRand();
}
