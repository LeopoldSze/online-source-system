package com.example.demo.dao;

import com.example.demo.Demo2ApplicationTests;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import static org.junit.Assert.*;


@Component
public class HomeRecInfoDaoTest extends Demo2ApplicationTests {
    @Autowired
    private HomeRecInfoDao homeRecInfoDao;

    //查询
    @Test
    public void testGet(){
        System.out.println(homeRecInfoDao.randOne());
    }

}