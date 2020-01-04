package com.example.demo.dao;

import com.example.demo.dataobjects.HomeRecInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface HomeRecInfoDao extends JpaRepository<HomeRecInfo,Integer> {

    //随机取出一条数据
    @Query(nativeQuery = true, value = "select * from tab_homerec ORDER BY RAND() LIMIT 1")
    public HomeRecInfo randOne();

}
